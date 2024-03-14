const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

dotenv.config({
  path: path.resolve(__dirname, '../', '.env.local'),
});

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const LOCAL_ASSETS_PATH = 'public/assets';
const AWS_FILE_PATH = '/_assets/assets';

const upload = ({ localPath, filePath, bucketName }) => {
  const command = `aws s3 cp ${localPath} s3://${`${bucketName}${filePath}`}`;
  execSync(command, { stdio: 'inherit' });
};

const start = () => {
  const stat = fs.statSync(LOCAL_ASSETS_PATH);

  if (!stat.isDirectory()) {
    throw new Error('No folders found');
  }

  const folders = fs.readdirSync(LOCAL_ASSETS_PATH);

  folders.forEach((folderPath) => {
    const filePaths = fs.readdirSync(`${LOCAL_ASSETS_PATH}/${folderPath}`);

    filePaths.forEach((filePath) => {
      const absolutePath = `${LOCAL_ASSETS_PATH}/${folderPath}/${filePath}`;

      upload({
        bucketName: AWS_BUCKET_NAME,
        localPath: absolutePath,
        filePath: `${AWS_FILE_PATH}/${folderPath}/${filePath}`,
      });
    });
  });

  console.log('done');
};

start();
