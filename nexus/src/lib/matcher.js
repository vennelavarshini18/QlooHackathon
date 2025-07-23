export function matchUsers(currentUser, allProfiles) {
  const scores = [];

  for (const user of allProfiles) {
    if (user.userId === currentUser.userId) continue;

    const commonTags = user.tags.filter(tag => currentUser.tags.includes(tag));
    const score = commonTags.length;

    scores.push({ userId: user.userId, score, commonTags });
  }

  // Sort by score descending
  return scores.sort((a, b) => b.score - a.score);
}
