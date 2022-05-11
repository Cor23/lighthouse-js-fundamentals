let array = [];

function range(start, end, step){
  let count = start;

  for(let i = 0; i <= end; i++){
    if(count <= end && step === 1){
      array.push(count);
      count++;
    } else if(count < end && step > 1){
      count = count + step;
      array.push(count);
    } else if(start === undefined && end === undefined && step === undefined){
      array = [];
    } else if(start > end){
      array = [];
    } else if(step <= 0){
      array = [];
    }
  }
  console.log(array);
  return array;
}

range(0, 10, 2);