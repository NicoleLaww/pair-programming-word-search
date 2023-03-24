// Partners: Anastasia Zaika & Nicole Law

const wordSearch = (letters, word) => {
  if ((letters.length === 0) || (!word)) {
    return false;
  }

  //finding horizontal word
  const horizontalJoin = letters.map((ls) => ls.join(""));
  // console.log("horizontalJoin",horizontalJoin);
  for (l of horizontalJoin) {
    //console.log("l", l);
    if (l.includes(word)) return true;
  }

  //finding horizontal word backwards
  const horizontalReverse = letters.map((ls) => ls.reverse().join(""));
  for (l of horizontalReverse) {
    //console.log("l", l);
    if (l.includes(word)) return true;
  }

  // for (let i = 0; i < letters.length; i++) {
  //   if (letters[i].reverse().join("").includes(word)) {
  //     return true;
  //   }
  // }

  //creating vertical array
  const verticalArr = [];
  for (let i = 0; i <= letters[0].length; i++) {
    verticalArr.push([]);
    //console.log("verticalArr", verticalArr);
    for (let j = 0; j < letters.length; j++) {
      verticalArr[i].push(letters[j][i]);
    }
  }

  //finding vertical word
  const verticalJoin = verticalArr.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  //finding vertical word backwards
  for (let i = 0; i < verticalArr.length; i++) {
    if (verticalArr[i].reverse().join("").includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;