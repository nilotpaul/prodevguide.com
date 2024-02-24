const dotenv = require('dotenv');
const path = require('path');
const { uploadAssets } = require('./helpers/uploadFiles');

dotenv.config({
  path: path.resolve(__dirname, '../', '.env.local'),
});

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const ASSETS_FOLDER_PATH = 'public/assets';

const start = () => {
  uploadAssets({
    localPath: ASSETS_FOLDER_PATH,
    filePath: '/_assets/assets/',
    bucketName: AWS_BUCKET_NAME,
  });
};

start();
