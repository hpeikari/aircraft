export default (baseStrings, ...expansions) =>
  baseStrings.reduce((acc, cur, index) => acc + cur + encodeURIComponent(expansions[index] || ''), '');
