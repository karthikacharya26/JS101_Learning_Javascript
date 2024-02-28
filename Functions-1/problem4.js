function sumOfArray(sum, num) {
  return sum + num;
}

function findSum() {
  var sum = arr.reduce(sumOfArray);
  console.log('Sum is', sum);
  return sum;
}

function avg() {
  var sum = findSum();
  var average = sum / arr.length;
  return average;
}

var arr = [2, 4, 6, 8];
console.log('Average is', avg());