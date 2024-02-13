// takes inputs based on example in compass from cmd line


// takes timers after cmd line
process.argv.slice(2).forEach(a => {
  // checks if its a number and if its greater 0
  // if so sets values as timers and calls back alarm
  // a * 1000 changes value into miliseconds
  if (!isNaN(a) && a >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, a * 1000);
  }
});