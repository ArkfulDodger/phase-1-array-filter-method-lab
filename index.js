function findMatching(array, str) {
    return array.filter( item => item.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(array, str) {
    let len = str.length;
    return array.filter ( item => item.slice(0, len) === str);
}

function matchName(objArray, str) {
    return objArray.filter( item => item.name === str);
}