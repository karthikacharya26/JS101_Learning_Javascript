function isOdd(num){
  return num%2!==0;
}

function printOddNo(num){
  for(var i=1; i<=num; i++){
    if(isOdd(i)){
      console.log(i);
    }
  }
}

console.log(isOdd(10));
printOddNo(10);  