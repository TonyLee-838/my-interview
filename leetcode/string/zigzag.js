function convert(input, numRows) {
  if (numRows <= 1) return input;
  const results = Array.from({ length: numRows }, () => []);

  let row = 0;
  let increasing = true;

  input.split("").forEach((char) => {
    results[row].push(char);

    if (increasing) {
      row++;
      if (row === numRows - 1) increasing = false;
    } else {
      row--;
      if (row === 0) increasing = true;
    }
  });

  return results.reduce((res, arr) => [...res, ...arr], []).join("");
}

const string = "AB";
r = convert(string, 1);
r;
