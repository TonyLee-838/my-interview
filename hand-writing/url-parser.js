function getURLParams(url) {
  const decoded = decodeURIComponent(url);

  const matched = decoded.match(/[\?\&][\w\-\%\+]+\=[\w\-\%\+]+/g);
  if (!matched) return;

  return matched
    .map((str) => {
      return str.substr(1).split("=");
    })
    .reduce((result, [key, value]) => {
      result[key] = value.includes("+") ? value.split("+") : value;
      return result;
    }, {});
}

s1 = "http://test.com:8080?q=aA1+ab&password=a112#page1";

parsed = getURLParams(s1);
parsed;
