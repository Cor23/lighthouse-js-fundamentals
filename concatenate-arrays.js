function concat(arr1, arr2){
  let result = [];

  for(let i = 0; i < arr1.length; i++){
    result.push(arr1[i]);
  }

  for(let j = 0; j < arr2.length; j++){
    result.push(arr2[j]);
  }
  console.log(result);
  return result;
}

concat([ 5, 10 ], []);