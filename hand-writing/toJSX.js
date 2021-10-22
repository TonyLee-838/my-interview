const jsx = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

function parse(jsx) {
  return run(jsx);

  function run(jsx) {
    const { tag, attrs, children } = jsx;

    const openTag = generateOpenTag(tag, attrs);

    let childrenString = "";
    if (children.length) {
      children.forEach((child) => {
        childrenString += run(child);
      });
    }

    const closeTag = generateCloseTag(tag);

    return openTag + childrenString + closeTag;
  }

  function generateOpenTag(tag, attrs) {
    const attrString = attrs
      ? Object.entries(attrs).reduce((result, [key, value]) => {
          return `${result} ${key}="${value}"`;
        }, "")
      : "";
    return `<${tag.toLowerCase()}${attrString ? " " + attrString : ""}>`;
  }

  function generateCloseTag(tag) {
    return `</${tag.toLowerCase()}>`;
  }
}

r = parse(jsx);
console.log(r);
