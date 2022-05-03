const isHtml = (path) => {
  if (path.includes(".html")) {
    return true;
  }
  return false;
};

const path = "/users/download/index.html";

console.log(isHtml(path));