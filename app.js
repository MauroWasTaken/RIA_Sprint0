const removeSNames = (names) => {
  return names.filter(element=> element.toLowerCase().charAt(0)!=='s');
};
module.exports = removeSNames;
