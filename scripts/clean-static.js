const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
}

try {
  console.log('Cleaning public/_next folder before build...');
  const nextTargetDirParent = path.join(__dirname, '..', 'public', '_next');
  if (fs.existsSync(nextTargetDirParent)) {
    deleteFolderRecursive(nextTargetDirParent);
    console.log('Successfully cleaned public/_next.');
  } else {
    console.log('public/_next folder does not exist, nothing to clean.');
  }
} catch (error) {
  console.error('Error during static assets clean:', error);
  process.exit(1);
}
