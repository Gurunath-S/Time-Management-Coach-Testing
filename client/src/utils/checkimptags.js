export const autoHighPriority = ({ title = '', note = '', tags = [], currentPriority, currentReason }) => {
  const importantTags = ['Strategic Work', 'Deadline', 'Project Delivery Work'];

  const combinedText = `${title} ${note} ${tags.join(' ')}`.toLowerCase();
  const isImportant = importantTags.some(tag => combinedText.includes(tag.toLowerCase()));

  if (isImportant && currentPriority !== 'high') {
    return {
      priority: 'high',
      reason: currentReason || 'Automatically marked high due to strategic keywords'
    };
  }

  return { priority: currentPriority, reason: currentReason };
};
