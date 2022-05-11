function range(start, end, step){
  let array = [];
  let count = start;

  for(let i = start; i <= end; i++){
    if(count <= end && step > 0){
      array.push(count);
      count = count + step;
    } else if(count <= end && step === 1){
      array.push(count);
      count++;
    } else if(start > end){
      array = []
    } else if(step <= 0){
      array = []
    }
  }  
  console.log(array);
  return array;
}

range(0, 10, -1);