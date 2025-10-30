const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({ where: { userId: Number(req.userId) } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

exports.createTask = async (req, res) => {
  let {
    title,
    created_at,
    due_date,
    priority,
    note,
    reason,
    status,
    assigned_to,
    priority_tags
  } = req.body;

  const createdAtDate = created_at && !isNaN(new Date(created_at)) ? new Date(created_at) : null;
  const dueDateDate = due_date && !isNaN(new Date(due_date)) ? new Date(due_date) : null;

  const strategicTags = ['Strategic Work', 'Deadline', 'Project Delivery Work'];
  const typeTags = priority_tags?.type || [];

  const hasStrategicTag = typeTags.some(tag => strategicTags.includes(tag));
  if (hasStrategicTag) {
    priority = 'high';
  }

  const userId = Number(req.userId);

  
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid or missing userId' });
  }

 
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error checking user existence:', error);
    return res.status(500).json({ message: 'Failed to verify user' });
  }


  try {
    const task = await prisma.task.create({
      data: {
        title,
        created_at: createdAtDate,
        due_date: dueDateDate,
        priority,
        note,
        reason,
        status,
        assigned_to,
        priority_tags,
        userId: userId,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create task' });
  }
};




exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const userId = Number(req.userId);

  let {
    title,
    created_at,
    due_date,
    priority,
    note,
    reason,
    status,
    assigned_to,
    priority_tags
  } = req.body;

  const createdAtDate = created_at && !isNaN(new Date(created_at)) ? new Date(created_at) : null;
  const dueDateDate = due_date && !isNaN(new Date(due_date)) ? new Date(due_date) : null;

  const strategicTags = ['Strategic Work', 'Deadline', 'Project Delivery Work'];
  const typeTags = priority_tags?.type || [];
  const hasStrategicTag = typeTags.some(tag => strategicTags.includes(tag));
  if (hasStrategicTag) priority = 'high';

  try {
    const existingTask = await prisma.task.findFirst({
      where: { id, userId },
    });

    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const changes = {};

    if (title !== undefined && title !== existingTask.title) {
      changes.title = { before: existingTask.title, after: title };
    }

    if (
      (dueDateDate && !existingTask.due_date) ||
      (!dueDateDate && existingTask.due_date) ||
      (dueDateDate && existingTask.due_date && dueDateDate.toISOString() !== existingTask.due_date.toISOString())
    ) {
      changes.due_date = { before: existingTask.due_date, after: dueDateDate };
    }

    if (priority !== existingTask.priority) {
      changes.priority = { before: existingTask.priority, after: priority };
    }

    if (note !== undefined && note !== existingTask.note) {
      changes.note = { before: existingTask.note, after: note };
    }

    if (reason !== undefined && reason !== existingTask.reason) {
      changes.reason = { before: existingTask.reason, after: reason };
    }

    if (status !== undefined && status !== existingTask.status) {
      changes.status = { before: existingTask.status, after: status };
    }

    if (assigned_to !== undefined && assigned_to !== existingTask.assigned_to) {
      changes.assigned_to = { before: existingTask.assigned_to, after: assigned_to };
    }

    if (priority_tags !== undefined && JSON.stringify(priority_tags) !== JSON.stringify(existingTask.priority_tags)) {
      changes.priority_tags = { before: existingTask.priority_tags, after: priority_tags };
    }

    const now = new Date();

    // Find an active focus session
    const activeSession = await prisma.focusSession.findFirst({
      where: {
        userId,
        startTime: { lte: now },
        endTime: { gte: now },
      },
      orderBy: { startTime: 'desc' },
    });

    // Log changes if there is an active session
    if (activeSession && Object.keys(changes).length > 0) {
      const newLog = {
        taskId: id,
        taskTitle: existingTask.title, // 🔥 Save the task title in log for context
        timestamp: now,
        changes,
      };

      const updatedTaskChanges = Array.isArray(activeSession.taskChanges)
        ? [...activeSession.taskChanges, newLog]
        : [newLog];

      // Handle completed tasks separately
      let updatedCompletedTasks = activeSession.completedTasks || [];
      if (
        changes.status &&
        changes.status.after === 'completed' &&
        !updatedCompletedTasks.some(task => task.id === id)
      ) {
        const completedTaskSnapshot = {
          id,
          title,
          due_date: dueDateDate,
          created_at: createdAtDate,
          priority,
          status,
          note,
          reason,
          assigned_to,
          priority_tags,
        };
        updatedCompletedTasks = [...updatedCompletedTasks, completedTaskSnapshot];
      }

      await prisma.focusSession.update({
        where: { id: activeSession.id },
        data: {
          taskChanges: updatedTaskChanges,
          completedTasks: updatedCompletedTasks,
        },
      });
    }

    // Finally, update the task record
    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        created_at: createdAtDate,
        due_date: dueDateDate,
        priority,
        note,
        reason,
        status,
        assigned_to,
        priority_tags,
      },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Failed to update task' });
  }
};




exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findFirst({
      where: { id: id, userId: Number(req.userId) }
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch {
    res.status(500).json({ message: 'Failed to fetch task' });
  }
};