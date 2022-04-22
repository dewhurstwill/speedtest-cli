# Speedtest Service
---

## Module
---

### Install with NPM
```bash
npm install --save speedtest-service
```

### Install with Yarn
```bash
yarn add speedtest-service
```

### Example usage
```javascript
const speedtest = require('speedtest-service');

const result = speedtest();

console.log(result);
```

### Example output
```json
{
  server: { 
    org: 'YouFibre', 
    location: 'Manchester', 
    id: '48475' 
  },
  isp: 'Hyperoptic Ltd',
  latency: '2.05 ms',
  download: '195.15 Mbps',
  upload: '368.53 Mbps',
  packetLoss: 'Not available.',
  resultUrl: 'https://www.speedtest.net/result/c/2b753g91-24h5-67aa-111g-7g999a9a99aa'
}
```

<br/>

## CLI
---

### Install the CLI
```bash
$ git clone git@github.com:dewhurstwill/speedtest-service.git
$ cd speedtest-service
$ npm run install-cli
```

### Uninstall the CLI
```bash
$ git clone git@github.com:dewhurstwill/speedtest-service.git
$ cd speedtest-service
$ npm run uninstall-cli
```

### Using the CLI
```bash
$ speedtest-cli --help
Usage:
speedtest-cli run [--debug -d -D] [--help -h -H]
or
speedtest-cli help

$ speedtest-cli run
```