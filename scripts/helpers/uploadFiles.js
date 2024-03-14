const { execSync } = require('child_process');
const fs = require('fs');

const upload = ({ localPath, filePath, bucketName }) => {
  const command = `aws s3 cp ${localPath} s3://${`${bucketName}${filePath}`}`;
  execSync(command, { stdio: 'inherit' });
};

const uploadAssets = ({ localPath, filePath, bucketName }) => {
  const stat = fs.statSync(localPath);

  if (stat.isFile()) {
    upload({
      localPath,
      filePath,
      bucketName,
    });
  } else if (stat.isDirectory()) {
    fs.readdirSync(localPath).forEach((file) => {
      const path = `${localPath}/${file}`;
      upload({
        localPath: path,
        filePath,
        bucketName,
      });
    });
  } else {
    throw new Error('Invalid file type');
  }

  console.log('assets uploaded');
};

module.exports = {
  uploadAssets,
};
