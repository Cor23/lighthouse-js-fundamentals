let array = [];
range(-5, 2, 3);

function range(start, end, step){
  let count = start;

  for(let i = 0; i <= end; i++){
    if(count <= end && step <= 1){
      array.push(count);
      count++;
    } else if(count < end){
      array.push(count);
      count = count + step;
    } else if(start === undefined || end === undefined || step === undefined){
      array = [];
    } else if(start > end){
      array = [];
    } else if(step <= 0){
      array = [];
    }
  }
  array.push(count);
}
console.log(array);