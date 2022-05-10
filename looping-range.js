let returnedArray = [];

function range(start, end, step){
  let count = start;

  for(let i = 0; i < end; i++){
    if(count <= end && step <= 1){
      count++;
      returnedArray.push(count);
    } else if(count <= end && step > 1){
      returnedArray.push(count);
      count = count + step;
    }
  }

  if(start === undefined || end === undefined || step === undefined){
    returnedArray = [];
  } else if(start > end){
    returnedArray = [];
  } else if(step <= 0){
    returnedArray = [];
  }

}
range(0, 8, 2);
console.log(returnedArray);