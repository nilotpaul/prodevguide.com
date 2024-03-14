const { exec } = require('child_process');

const executeCommand = (command, callback) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    if (callback) callback();
  });
};

executeCommand('git checkout prod');
executeCommand('git add .');
executeCommand('git commit -m "blog: content updated"');
executeCommand('git push origin prod');
