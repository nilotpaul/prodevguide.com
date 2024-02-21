const { execSync } = require('child_process');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../', '.env.local'),
});

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const ASSETS_FOLDER_PATH = 'public/assets';

const uploadAssets = (filePath) => {
  const command = `aws s3 cp ${filePath} s3://${`${AWS_BUCKET_NAME}/_assets/assets/`}`;
  execSync(command, { stdio: 'inherit' });
};

const start = () => {
  fs.readdirSync(ASSETS_FOLDER_PATH).forEach((file) => {
    const filePath = `${ASSETS_FOLDER_PATH}/${file}`;
    uploadAssets(filePath);
  });

  console.log('assets uploaded');
};

start();
