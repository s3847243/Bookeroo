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
    const aTitle = a.login.toLowerCase();
    const bTitle = b.login.toLowerCase();
    let result;
    result = aTitle > bTitle ? 1 : bTitle > aTitle ? -1 : 0;
    return result;
}

export function comparePrice(a, b) {
    const aPrice = a.id
    const bPrice = b.id
    let result;
    result = aPrice > bPrice ? 1 : bPrice > aPrice ? -1 : 0;
    return result;
}