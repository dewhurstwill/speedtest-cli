const childProcess = require("child_process");

function execute(command) {
  return new Promise(function(resolve, reject) {
    childProcess.exec(command, function(error, standardOutput, standardError) {
      if (error) reject(error);
      else if (standardError) reject(standardError);
      resolve(standardOutput);
    });
  });
}

module.exports = execute;