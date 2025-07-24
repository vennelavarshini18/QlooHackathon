function countOverlap(arr1 = [], arr2 = []) {
  return arr1.filter(item => arr2.includes(item)).length;
}

export function matchUsers(currentUser, allProfiles) {
  const matches = [];

  for (const user of allProfiles) {
    if (user.userId === currentUser.userId) continue;

    //Match based on tags
    const commonTags = user.tags.filter(tag => currentUser.tags.includes(tag));
    let score = commonTags.length;

    //Match based on Qloo keywords
    const qlooCategories = ['music', 'movies', 'books', 'concepts'];
    const keywordOverlap = {};

    for (const category of qlooCategories) {
      const currentList = currentUser.qloo_keywords?.[category] || [];
      const otherList = user.qloo_keywords?.[category] || [];

      const overlap = countOverlap(currentList, otherList);
      score += overlap; //Add to total score
      keywordOverlap[category] = overlap;
    }

    matches.push({
      userId: user.userId,
      score,
      commonTags,
      keywordOverlap
    });
  }

  //Sort by best match(descending score)
  return matches.sort((a, b) => b.score - a.score);
}
