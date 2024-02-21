const { execSync, exec } = require('child_process');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../', '.env.local'),
});

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const ASSETS_FOLDER_PATH = 'public/test';

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

const uploadAssets = (filePath) => {
  const command = `aws s3 cp ${filePath} s3://${AWS_BUCKET_NAME}`;
  execSync(command, { stdio: 'inherit' });
};

const start = () => {
  fs.readdirSync(ASSETS_FOLDER_PATH).forEach((file) => {
    const filePath = `${ASSETS_FOLDER_PATH}/${file}`;
    uploadAssets(filePath);
  });

  console.log('assets uploaded');

  const deleteFiles = (folderPath) => {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = `${folderPath}/${file}`;
      fs.unlinkSync(filePath);
    });
    console.log(`deleted assets`);
  };

  deleteFiles(ASSETS_FOLDER_PATH);

  executeCommand('git checkout prod');
  executeCommand('git add .');
  executeCommand('git commit -m "content updated"');
  executeCommand('git push origin prod');
};

start();
