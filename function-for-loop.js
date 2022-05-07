let sound = "";
function laugh(num){
    for(let i = 0; i < num; i++){
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
}
console.log(laugh(3));