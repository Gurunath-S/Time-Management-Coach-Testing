const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.saveFocusSession = async (req, res) => {
  const { startTime, endTime, completedTasks } = req.body;


  if (!startTime || !endTime || !completedTasks || !Array.isArray(completedTasks)) {
    return res.status(400).json({ message: 'Invalid input. Required: startTime, endTime, completedTasks[]' });
  }

  try {
    const timeSpent = Math.floor((new Date(endTime) - new Date(startTime)) / 1000); // in seconds

    const session = await prisma.focusSession.create({
      data: {
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        timeSpent,
        completedTasks,
        userId: Number(req.userId),
      }
    });

    res.status(201).json(session);
  } catch (error) {
    console.error('Error saving focus session:', error);
    res.status(500).json({ message: 'Failed to save focus session' });
  }
};

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
