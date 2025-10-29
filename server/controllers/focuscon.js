const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Save a new focus session
 */
exports.saveFocusSession = async (req, res) => {
  const { sessionId, startTime, endTime, completedTasks } = req.body;

  try {
    // 🟢 If sessionId is provided, update existing session
    if (sessionId && endTime) {
      const session = await prisma.focusSession.findUnique({ where: { id: sessionId } });
      if (!session) return res.status(404).json({ message: "Session not found" });

      const timeSpent = Math.floor((new Date(endTime) - new Date(session.startTime)) / 1000); // seconds

      const updated = await prisma.focusSession.update({
        where: { id: sessionId },
        data: {
          endTime: new Date(endTime),
          timeSpent,
          completedTasks: completedTasks || session.completedTasks,
        },
      });

      return res.status(200).json(updated);
    }

    // 🟢 Otherwise, create a new session
    if (!startTime) return res.status(400).json({ message: "startTime required" });

    const session = await prisma.focusSession.create({
      data: {
        startTime: new Date(startTime),
        endTime: new Date(startTime), // placeholder, will update later
        timeSpent: 0,
        completedTasks: [],
        taskChanges: [],
        userId: Number(req.userId),
      },
    });

    return res.status(201).json(session);
  } catch (error) {
    console.error("❌ Error saving focus session:", error);
    res.status(500).json({ message: "Failed to save focus session" });
  }
};


/**
 * Get all focus sessions for the user
 */
exports.getFocusSessions = async (req, res) => {
  try {
    const sessions = await prisma.focusSession.findMany({
      where: { userId: Number(req.userId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(sessions);
  } catch (error) {
    console.error('Error fetching focus sessions:', error);
    res.status(500).json({ message: 'Failed to fetch focus sessions' });
  }
};

/**
 * Log a task change in a session
 */
exports.logTaskChange = async (req, res) => {
  try {
    const userId = Number(req.userId);
    const { sessionId, taskId, changes } = req.body;

    if (!sessionId || !taskId || !changes || typeof changes !== "object") {
      return res.status(400).json({ message: "sessionId, taskId, and changes{} required" });
    }

    // Fetch session and task
    const [session, task] = await Promise.all([
      prisma.focusSession.findUnique({ where: { id: sessionId } }),
      prisma.task.findUnique({ where: { id: taskId } })
    ]);

    if (!session) return res.status(404).json({ message: "Focus session not found" });

    const logEntry = {
      taskId,
      taskTitle: task?.title || "Untitled Task",
      timestamp: new Date().toISOString(),
      changes
    };

    const updatedSession = await prisma.focusSession.update({
      where: { id: sessionId },
      data: {
        taskChanges: Array.isArray(session.taskChanges)
          ? [...session.taskChanges, logEntry]
          : [logEntry],
      },
    });

    res.status(200).json({ message: "Task change logged", session: updatedSession });
  } catch (error) {
    console.error("❌ Error logging task change:", error);
    res.status(500).json({ message: "Failed to log task change", error: error.message });
  }
};

/**
 * Get Focus Summary (card-style)
 */
exports.getFocusSummary = async (req, res) => {
  try {
    const sessions = await prisma.focusSession.findMany({
      where: { userId: Number(req.userId) },
      orderBy: { createdAt: 'desc' },
    });

    // Transform for card-style UI
    const summary = sessions.map(session => ({
      sessionId: session.id,
      startTime: session.startTime,
      endTime: session.endTime,
      timeSpent: session.timeSpent,
      completedTasks: session.completedTasks,
      taskChanges: session.taskChanges?.map(change => ({
        taskId: change.taskId,
        title: change.taskTitle,
        timestamp: change.timestamp,
        changes: change.changes
      })) || [],
    }));

    res.json(summary);
  } catch (error) {
    console.error('Error fetching focus summary:', error);
    res.status(500).json({ message: 'Failed to fetch focus summary', error: error.message });
  }
};
