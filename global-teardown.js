const fs = require('fs');

module.exports = async () => {
  console.log('Tearing down global resources...');

  // Example: delete the auth file
  if (fs.existsSync('auth.json')) {
    fs.unlinkSync('auth.json');
    console.log('Deleted auth.json');
  }
};