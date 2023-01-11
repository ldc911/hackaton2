function getCookie(name) {
  const cookies = document.cookie.split(";");
  const value = cookies
    .find((cookie) => cookie.startsWith(name))
    ?.split("=")[1];
  if (value === undefined) {
    return null;
  }
  return decodeURIComponent(value);
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie(
    `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}`
  );
}
setCookie("hello", "bonjour les gens", 2);

module.exports = {
  getCookie,
  setCookie,
};
