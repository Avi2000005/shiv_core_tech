const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', '.next', 'static');
const targetDir = path.join(__dirname, '..', 'public', '_next', 'static');

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

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      const curTarget = path.join(target, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

try {
  console.log('Cleaning existing public/_next folder...');
  const nextTargetDirParent = path.join(__dirname, '..', 'public', '_next');
  if (fs.existsSync(nextTargetDirParent)) {
    deleteFolderRecursive(nextTargetDirParent);
  }
  
  if (fs.existsSync(sourceDir)) {
    console.log(`Copying static files from ${sourceDir} to ${targetDir}...`);
    copyFolderRecursiveSync(sourceDir, targetDir);
    console.log('Static files copied successfully!');
  } else {
    console.error('Source directory .next/static does not exist. Please run next build first.');
  }
} catch (error) {
  console.error('Error during static assets copy:', error);
  process.exit(1);
}
