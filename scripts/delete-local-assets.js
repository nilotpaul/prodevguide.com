const fs = require('fs');

const deleteFiles = (folderPath) => {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    fs.unlinkSync(filePath);
  });
  console.log(`deleted assets`);
};

deleteFiles(ASSETS_FOLDER_PATH);
