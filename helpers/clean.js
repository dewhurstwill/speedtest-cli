function clean(input) {
  let [, ...text] = input.split(':');
  if (!text) return undefined;
  text = text.join(':');
  if (text.includes('(data used')) {
    text = text.split('(data used')[0];
  }
  if (text.includes('jitter')) {
    text = text.split('(')[0];
  }
  return text.trim();
}

module.exports = clean;