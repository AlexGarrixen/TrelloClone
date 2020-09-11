const capitalize = (string) => {
  if (!string && typeof string !== 'string') throw 'a string was expected';
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export default capitalize;
