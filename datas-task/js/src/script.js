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
        button.addEventListener('click', () => {
			let items; //value of our items, plased in items.json file
			let listItems;
			fetch('/datas-task/items.json')
				.then(  
					function(response) {  
						if (response.status !== 200) {  
							console.log('Looks like there was a problem. Status Code: ' +  
							response.status);  
							return;  
						}
						response.json().then(function(data) {  
							// console.log(data);  
							items = data;
							console.log("items:", items);
							listItems = items.map(item => {
								return `
										<li class="row-item">
											<figure>
												<img src="../../img/${item.image}.jpg" alt="image">
												<div class="stars">
													<div class="star blackstar"></div>
													<div class="star blackstar"></div>
													<div class="star blackstar"></div>
													<div class="star graystar"></div>
													<div class="star graystar"></div>
												</div>
												<figcaption>
													<h2>
														${item.title}
													</h2>
													<p>
														${item.paragraph}
													</p>
												</figcaption>
											</figure>
										</li>`
							});
							console.log(" new items: ", items);		
						});  
					}  
				)
				// .then( () => {

				// 	}
				// )  
				.catch(function(err) {  
					console.log('Fetch Error :-S', err);  
				});


		});



        




    }
);