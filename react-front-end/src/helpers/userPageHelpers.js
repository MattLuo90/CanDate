// returns array of interest ids
export function filterTags(id, userTag) {
  const tagArr = [];
  for (const tag of userTag) {
    if (tag.id === id) {
      tagArr.push(tag.interest);
    }
  }
  return tagArr;
}

// returns array of interest names
export function getNameOfTag(tagArr, tags) {
  const tagNameArr = [];
  for (const tag of tagArr) {
    for (const obj of tags) {
      if (tag === obj.id) {
        tagNameArr.push(obj.name);
      }
    }
  }
  //[movie. sport]
  let userTag = {
    tags: tagNameArr,
    //id:1
    //tags : [sport, movie]
  };
  return userTag.tags;
}

// interest filter: returns filtered array of unique userids
export function getFilteredUsersByInterest(interests, user_tagArr) {
  const users = [];
  for (const interest of interests) {
    for (const user of user_tagArr) {
      if (interest === user.interest) {
        users.push(user.id);
      }
    }
  }

  let removeRepeatedUsers = [];
  users.forEach((element) => {
    if (!removeRepeatedUsers.includes(element)) {
      removeRepeatedUsers.push(element);
    }
  });
  return removeRepeatedUsers;
}

// return array of objects for filtered users
 export function getFilteredUserProfile(filteredUserIds, filteredAgeIds, users) {
  const userProfiles = [];
  const filteredIds = [];
  filteredUserIds.forEach(element => {
    if (filteredAgeIds.includes(element)) {
      filteredIds.push(element)
    }
  })

  // loop through users to find the user profiles
  for (const user of users) {
    for (const userId of filteredIds) {
      if (user.id === userId) {
        userProfiles.push(user);
      }
    }
  }
  return userProfiles;
}