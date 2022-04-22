const isOnline = require('is-online');
const execute = require('./exec-command');

async function preChecks(isDebug) {
  // Internet Connectivity
  if (isDebug) console.log('Starting connectivity check...');
  
  const online = await isOnline();
  if (!online) {
    console.error('Connectivity check: Failed - Please check your internet connection.');
    process.exit(1);
  }

  if (isDebug) console.log('Connectivity check: Passed');
  // Version Check
  try { 
    if (isDebug) console.log('Starting speedtest CLI check...');
    await execute("speedtest -V");
    if (isDebug) console.log('Speedtest CLI check: Passed');
  } catch (error) {
    console.error(`Speedtest CLI check: Failed - Ensure that speedtest is installed. [https://www.speedtest.net/apps/cli]
    
Mac OS:
brew tap teamookla/speedtest 
brew update
brew install speedtest

Debian/Ubuntu:
sudo apt-get install curl
curl -s https://install.speedtest.net/app/cli/install.deb.sh | sudo bash
sudo apt-get install speedtest

Fedora/RedHat/CentOS:
curl -s https://install.speedtest.net/app/cli/install.rpm.sh | sudo bash
sudo yum install speedtest`);
    process.exit(1);
  }
}

module.exports = preChecks;