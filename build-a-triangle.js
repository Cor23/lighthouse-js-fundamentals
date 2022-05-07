function buildTriangle(width){
  let stars = 0;
  while(stars <= width){
      console.log(makeLine(stars))
      stars++;
  }
}

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

buildTriangle(5);