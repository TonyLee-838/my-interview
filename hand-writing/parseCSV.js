function parse(csv) {
  const splitted = csv
    .split("\n")
    .slice(2, -1)
    .map((data) => data.split(","));
  const map = splitted
    .map(([name, age]) => createNewObject(name, age))
    .reduce((map, obj) => {
      map.set(obj.name, obj);

      return map;
    }, new Map());

  splitted.forEach(([name, , parent]) => {
    if (!parent) return;
    const parentObj = map.get(parent);
    const currentObj = map.get(name);

    parentObj.children.push(map.get(name));
    currentObj.parent = parentObj;
  });

  map;

  let result;

  map.forEach((person) => {
    if (!person.parent) result = person;
  });

  return result;

  function createNewObject(name, age) {
    return { name, age, children: [], parent: null };
  }
}

const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;

r = parse(csv);
r;
