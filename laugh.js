var laugh = function(num) {
  let sound = ""
  for (let i = 0; i <= num; i++) {
    sound = sound + "ha";  
  }
  return sound + "!";
}

console.log(laugh(10));