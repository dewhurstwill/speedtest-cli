const buildResult = require('./helpers/response-builder');
const preChecks = require('./helpers/precheck');
const execute = require('./helpers/exec-command');

async function main(isDebug) {
  await preChecks(isDebug);
  
  try {
    if (isDebug) console.log('Executing SpeedTest...');
    else console.log('Running...');
    const speedtestOutput = await execute("speedtest --progress=no");
    if (isDebug) console.log('SpeedTest Complete...');
    const splitOutput = speedtestOutput.split('\n');
    const result = buildResult(splitOutput, isDebug);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.toString());
    process.exit(1);
  }
}

module.exports = main;