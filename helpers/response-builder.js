const parseServer = require('./parser');
const clean = require('./clean');
const search = require('./search');

function buildResult(input, isDebug) {
  if (isDebug) console.log('Parsing Input and Building Output...');
  return {
    server: parseServer(clean(search(input, 'Server:'))),
    isp: clean(search(input, 'ISP:')),
    latency: clean(search(input, 'Latency:')),
    download: clean(search(input, 'Download:')),
    upload: clean(search(input, 'Upload:')),
    packetLoss: clean(search(input, 'Packet Loss:')),
    resultUrl: clean(search(input, 'Result URL:'))
  }
}

module.exports = buildResult;