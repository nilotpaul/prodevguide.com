const { makeZip } = require('./helpers/archive');
const { uploadAssets } = require('./helpers/uploadFiles');

const AWS_BUCKET_NAME = 'prodevguide.com';
const ASSETS_FOLDER_PATH = 'public/assets';

const start = async () => {
  await makeZip({
    localZipPath: 'out',
    zipOutPath: 'out.zip',
  });

  setTimeout(() => {
    uploadAssets({
      localPath: ASSETS_FOLDER_PATH,
      filePath: '/assets/',
      bucketName: AWS_BUCKET_NAME,
    });

    uploadAssets({
      localPath: './out.zip',
      filePath: '/out.zip',
      bucketName: AWS_BUCKET_NAME,
    });
  }, 0);
};

start();
