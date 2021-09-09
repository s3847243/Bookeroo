// Credit Wogan on stackoverflow question number: 1129216
export function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function compareTitle(a, b) {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    let result;
    result = aTitle > bTitle ? 1 : bTitle > aTitle ? -1 : 0;
    return result;
}

export function compareYear(a, b) {
    const aYear = a.published
    const bYear = b.published
    let result;
    result = aYear > bYear ? 1 : bYear > aYear ? -1 : 0;
    return result;
}