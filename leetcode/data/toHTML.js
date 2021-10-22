let menu = [
  { Id: 1, ParentId: null, Sort: 0, Name: "菜单1" },
  { Id: 2, ParentId: 1, Sort: 0, Name: "菜单1-1" },
  { Id: 3, ParentId: 1, Sort: 1, Name: "菜单1-2" },
  { Id: 4, ParentId: 2, Sort: 2, Name: "菜单1-1-2" },
  { Id: 5, ParentId: 2, Sort: 1, Name: "菜单1-1-1" },
  { Id: 6, ParentId: null, Sort: 1, Name: "菜单2" },
  { Id: 7, ParentId: 6, Sort: 0, Name: "菜单2-1" },
  { Id: 8, ParentId: 6, Sort: 1, Name: "菜单2-2" },
  { Id: 9, ParentId: 8, Sort: 2, Name: "菜单2-2-2" },
  { Id: 10, ParentId: 8, Sort: 1, Name: "菜单2-2-1" },
  { Id: 11, ParentId: 10, Sort: 0, Name: "菜单2-2-1-1" },
];

function getHTMLString(menu) {
  const map = new Map();

  menu.forEach((object) => {
    object.children = [];
    map.set(object.Id, object);
  });

  const roots = [];

  menu.forEach((object) => {
    const parent = map.get(object.ParentId);

    if (parent) {
      parent.children.push(object);
      parent.children.sort(({ Sort: sort1 }, { Sort: sort2 }) => sort1 - sort2);
    } else {
      roots.push(object);
    }
  });

  console.log(JSON.stringify(roots, null, 1));
}

getHTMLString(menu);
