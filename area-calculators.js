function calculateRectangleArea(length, width){
  let output;
  for(let i = 0; i <= 1; i++){
    output = length * width;
    if(output <= 0){
      output = undefined;
    }
  }
  return output;
}

function calculateTriangleArea(base, height){
  let output;
  for(let i = 0; i <= 1; i++){
    output = base * height / 2;
    if(output <= 0){
      output = undefined;
    }
  }
  return output;
}

function calculateCircleArea(radius){
  let output;
  let thisRadius = radius;
  for(let i = 0; i <= 1; i++){
    output = Math.PI * (thisRadius * thisRadius);
    if(output <= 0 || output === Math.PI){
      output = undefined;
    }
  }
  return output;
}

console.log(calculateRectangleArea(10, -5));
console.log(calculateTriangleArea(10, -5));
console.log(calculateCircleArea(-1));