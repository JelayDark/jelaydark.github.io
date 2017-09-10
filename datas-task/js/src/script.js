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
            console.log("oRequest:", oRequest);
            console.log("oRequest.responseText",oRequest.responseText);

            return oRequest;
        };
        button.addEventListener('click', () => {
            loadURL("/datas-task/items.json");
            console.log("the last: ", loadURL("/datas-task/items.json").responseText);
            // console.log(loadURL("/datas-task/items.json"));
        });




    }
);