const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves){
  let position = [0, 0];
  for(const move of moves){
    if(move === 'north'){
      position[0]++;
    } else if(move === 'south'){
      position[0]--;
    } else if(move === 'east'){
      position[1]++;
    } else if(move === 'west'){
      position[1]--;
    }
  }
  return position;
}

console.log(finalPosition(moves));