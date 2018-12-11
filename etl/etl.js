function transform(data) {
  const newData = {};
  const keys = Object.keys(data);
  const values = Object.values(data);

  for (let i = 0; i < values.length; i += 1) {
    for (let y = 0; y < values[i].length; y += 1) {
      newData[values[i][y].toLowerCase()] = parseInt(keys[i], 10);
    }
  }
  return newData;
}

export default transform;
