const url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

function parse(url) {
  const result = {};

  const matched = url.split("?");

  matched.shift();
  const paramString = matched[0];

  const pairs = paramString.split("&");

  pairs.forEach((pair) => {
    let [key, value] = pair.split("=");
    value = decodeURIComponent(value);
    if (value === undefined) value = true;

    if (result[key] === undefined) {
      result[key] = value;
    } else {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    }
  });

  return result;
}

r = parse(url);
r;
