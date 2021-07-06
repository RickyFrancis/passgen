const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const { format } = require('date-fns');

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, '../', 'generated_passwords.txt'),
    'a',
    666,
    (e, id) => {
      fs.write(
        id,
        'Password: ' +
          password +
          ' | Generated at: ' +
          format(Date.now(), 'PPpp') +
          os.EOL,
        null,
        'utf-8',
        () => {
          fs.close(id, () => {
            console.log(chalk.green('Password saved to passwords.txt'));
          });
        }
      );
    }
  );
};

module.exports = savePassword;
