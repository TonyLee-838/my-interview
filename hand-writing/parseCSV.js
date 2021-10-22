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
    }, new WeakMap());

  let root;

  splitted.forEach(([name, , parent]) => {
    if (!parent) {
      root = person;
      return;
    }
    const parentObj = map.get(parent);
    const currentObj = map.get(name);

    parentObj.children.push(currentObj);
    currentObj.parent = parentObj;
  });

  return root;

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
console.log(JSON.stringify(r, null, 2));
