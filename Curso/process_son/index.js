const { exec, spawn } = require('child_process');
// ! const exec = require('child_process').exec; SON LO MISMO

// EXEC
const url = 'https://www.youtube.com/';
exec(`start chrome /new-tab ${url}`, (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

// SPAWN
const process = spawn('ls');

console.log(process.pid);

process.stdout.on('data', data => {
  console.log('el proceso esta muerto ?');
  console.log(process.killed);
  console.log(data.toString());
});

process.on('exit', () => {
  console.log('el proceso termino');
});

process.on('close', () => {
  console.log(process.killed);
});
