#!/usr/bin/env node
const speedtest = require('../');

// Parse arguments
const [,, ...args] = process.argv;

const isDebug = args.includes('--debug') || args.includes('-d') || args.includes('-D');
const containsHelp = args.includes('--help') || args.includes('-h') || args.includes('-H');

function displayHelp() {
  console.log(`Usage:
speedtest-cli run [--debug -d -D] [--help -h -H]
or
speedtest-cli help`);
  return;
}

if (args[0] === 'help' || containsHelp) {
  displayHelp();
  process.exit(0);
} else if (args[0] === 'run') {
  speedtest(isDebug);
} else {
  displayHelp();
  process.exit(1);
}