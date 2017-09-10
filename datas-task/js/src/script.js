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
              console.log("RESPONSETEXT", oRequest.responseText);
              console.log("PARSED", JSON.parse(oRequest.responseText));
              return JSON.parse(oRequest.responseText);
            }
        };
        button.addEventListener('click', () => {
            const items = loadURL("/datas-task/items.json");
            console.log("items: ",items);
        });

        
        fetch('/datas-task/items.json')
          	.then(  
				function(response) {  
				if (response.status !== 200) {  
					console.log('Looks like there was a problem. Status Code: ' +  
					response.status);  
					return;  
				}

				// Examine the text in the response  
				response.json().then(function(data) {  
					console.log(data);  
				});  
				}  
			)  
			.catch(function(err) {  
				console.log('Fetch Error :-S', err);  
			});




    }
);