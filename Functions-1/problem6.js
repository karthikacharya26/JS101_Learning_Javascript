function swap(str) {
  var swapped = '';
  for (var i = 0; i < str.length; i++) {
      swapped += swapCharacterCase(str[i]);
  }
  return swapped;
}

function swapCharacterCase(char) {
  if (char === char.toUpperCase()) {
      return char.toLowerCase();
  } else {
      return char.toUpperCase();
  }
}

var inputString = 'Test';
var outputString = swap(inputString);
console.log(outputString);
