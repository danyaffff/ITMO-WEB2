window.onload = function () {
  const loadTime = getServerLoadingTime();
  const tag = document.createElement('p');
  const text = document.createTextNode(`Загрузка с сервера - ${loadTime} мс`);
  tag.appendChild(text);
  const element = document.getElementById('loading_container');
  element.appendChild(tag);
};

function getServerLoadingTime() {
  if (!document.cookie.includes('server-loading-time')) {
    return -1;
  }
  return parseInt(document.cookie.match(/server-loading-time=(.+?);*/)[1], 10);
}