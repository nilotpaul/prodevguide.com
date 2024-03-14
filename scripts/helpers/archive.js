const fs = require('fs');
const archiver = require('archiver');

const makeZip = async ({ localZipPath, zipOutPath }) => {
  const output = fs.createWriteStream(zipOutPath);

  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', () => {
    console.log(`success, ${archive.pointer()} total bytes`);
  });

  archive.on('error', (err) => {
    console.error(err.stack);
  });

  archive.pipe(output);

  archive.directory(localZipPath, false);

  await archive.finalize();
};

module.exports = {
  makeZip,
};
