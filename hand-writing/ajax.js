function turnDataToParamString(data) {
  if (typeof data !== "object") return "";

  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

function ajax(url, method = "GET", data = {}) {
  const xhr = new XMLHttpRequest();

  const dataString = turnDataToParamString(data);

  if (method === "GET") {
    const haveParams = typeof data === "object" && !!data;

    const needQuestionMark = url.includes("?");

    let actualURL = url;

    if (haveParams) {
      url += needQuestionMark ? "?" : "&" + dataString;
    }

    console.log(actualURL);

    xhr.open(method, actualURL);
    xhr.send();
  }

  if (method === "POST") {
    xhr.open(method, url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(dataString);
  }

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange(() => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      }
    });
  });
}
