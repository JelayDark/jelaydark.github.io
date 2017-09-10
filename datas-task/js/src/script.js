"use strict"

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(
   () => {
        const button = document.querySelector('button');
        const loadURL = (url) => {
            let oRequest = new XMLHttpRequest();
            oRequest.open('GET', url, true);
            // oRequest.setRequestHeader("User-Agent", navigator.userAgent);
            oRequest.send();
            oRequest.onreadystatechange = () => {
              return oRequest.responseText;
            }
        };
        button.addEventListener('click', () => {
            const items = JSON.parse(loadURL("/datas-task/items.json"));
            console.log("items: ",items);
        });




    }
);