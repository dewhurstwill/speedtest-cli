function search(input, query) {
  const found = input.filter(line => line.includes(query));
  if (found.length === 0) return undefined;
  return found[0];
}

module.exports = search;