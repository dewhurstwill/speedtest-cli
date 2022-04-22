function parseServer(input) {
  // Input: Exascale - Manchester (id = 17629)
  const org = input.split('-')[0].trim(); // Exascale
  const location = input.split('-')[1].split('(')[0].trim(); // Manchester
  const id = input.split('=')[1].replace(/\)/g, '').trim(); // 17629
  return { org, location, id }; // { org: 'Exascale', location: 'Manchester', id: '17629' }
}

module.exports = parseServer;