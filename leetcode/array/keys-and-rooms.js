r = keysAndRooms([[1], [2], [3], []]);
r;
function keysAndRooms(rooms) {
  const visitedRooms = Array.from({ length: rooms.length }).fill(false);
  const unvisitedKeys = [];

  visitedRooms[0] = true;
  unvisitedKeys.push(...rooms[0]);

  while (unvisitedKeys.length) {
    const currentKey = unvisitedKeys.pop();
    visitedRooms[currentKey] = true;

    for (const key of rooms[currentKey]) {
      if (!visitedRooms[key]) {
        unvisitedKeys.push(key);
      }
    }
  }

  return visitedRooms.filter((visited) => !visited).length === 0;
}
