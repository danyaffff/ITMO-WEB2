window.onload = function () {
  const loadTime = getServerLoadingTime();
  const tag = document.createElement('h3');
  const text = document.createTextNode(`Скорость загрузки - ${loadTime} мс`);
  tag.appendChild(text);
  const element = document.getElementById('loading_container');
  element.appendChild(tag);
};

function getServerLoadingTime() {
  if (!document.cookie.includes('server-loading-time')) return -1;
  return parseInt(document.cookie.match(/server-loading-time=(.+?);*/)[1], 10);
}
