function howManyHundreds(num){
  let output;
  for(i = 0 ;i <= 1 ; i++){
   output = num / 100;
  }
  return parseInt(output);
};

console.log(howManyHundreds());