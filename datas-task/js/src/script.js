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
            oRequest.open('GET', url, false);
            // oRequest.setRequestHeader("User-Agent", navigator.userAgent);
            oRequest.send(null);
            console.log(oRequest.responseText);
            return oRequest.responseText;
        };
        button.addEventListener('click', () => {
            loadURL("/../../items.json");
            conole.log(loadURL("../../items.json"));
        });




    }
);