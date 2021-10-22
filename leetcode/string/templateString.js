let stringB = "Hi ${name}, {{}} I'm ${otherName} ${age} years old!";

a = "1,3".matchAll(/\d{1}/g).next().value;

let stringA = `
Hi{}!{!!{{}} {{ name }}, I'm {{ otherName1     }} {{age     }} years old!
`;
const input = {
  name: "Tom",
  otherName1: "Ben",
  age: 12,
};

r1 = templateString2(stringA, input);
r1;

function templateString_doubleCurlyBraces(string, variables) {
  let result = string;
  let key;

  const bracesRegExp = /\{\{ *[\w|\d][\w|\d]* *\}\}/i;

  do {
    const variableName = result.match(bracesRegExp);

    if (variableName) {
      key = variableName[0].replace(/[\{\} ]/g, "");

      result = result.replace(bracesRegExp, variables[key]);
    } else key = "";
  } while (key);

  return result;
}

function templateString_$Sign(string, input) {
  let result = string;

  let key;

  do {
    variableName = result.match(/\$\{\w*\}/);

    if (variableName) {
      key = variableName[0].replace(/[(\$\{)|\} ]/g, "");

      result = result.replace(/\$\{\w*\}/, input[key]);
    } else {
      key = "";
    }
  } while (key);

  return result;
}

function templateString2(string, input) {
  const regexp = /\{\{\s*[\w_$][\w\d_$]*\s*\}\}/g;

  const result = string.replace(regexp, (key) => {
    return input[key.replace(/[\{\} ]/g, "")];
  });

  return result;
}
