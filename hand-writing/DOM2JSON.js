function domToJson(string) {
  const stack = [];
  let head = null;

  string.replace(/<\/?\w+>/g, (value) => {
    if (value[1] !== "/") {
      const newObject = createObject(value.replace(/[<>]/g, ""));
      if (stack.length) {
        const lastObject = stack[stack.length - 1];
        lastObject.children.push(newObject);
      } else {
        head = newObject;
      }

      stack.push(newObject);
    } else {
      stack.pop();
    }
  });

  return head;

  function createObject(tagName) {
    return { tag: tagName, children: [] };
  }
}

const result = domToJson(`
<div>
<span>
  <a></a>
</span>
<span>
  <a></a>
  <a></a>
</span>
</div>`);

console.log(JSON.stringify(result, null, 1));

/**
 * {
 *   name:"div",
 *   children:[
 *       {name:"span",children:[
 *          ......
 *      ]}
 *   ]
 * }
 */
