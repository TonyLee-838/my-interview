let stringA = `
Hi{}!{!! {{ name }}, I'm {{ otherName     }} {{age     }} years old!
`;

let stringB = "Hi ${name}, I'm ${otherName} ${age} years old!";

const input = {
  name: "Tom",
  otherName: "Ben",
  age: 12,
};

a = "1,3".matchAll(/\d{1}/g).next().value;
a;

r = templateString_doubleCurlyBraces(stringA, input);
r;
r2 = templateString_$Sign(stringB, input);
r2;

function templateString_doubleCurlyBraces(string, variables) {
  let result = string;
  let key;

  do {
    variableName = result.match(/\{\{ *\w* *\}\}/);

    if (variableName) {
      key = variableName[0].replace(/[\{\}]/g, "").trim();

      result = result.replace(/\{\{ *\w* *\}\}/, variables[key]);
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
      key = variableName[0].replace(/[(\$\{)|\}]/g, "").trim();

      result = result.replace(/\$\{\w*\}/, input[key]);
    } else {
      key = "";
    }
  } while (key);

  return result;
}
