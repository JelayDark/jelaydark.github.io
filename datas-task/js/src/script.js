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
			// let items; //value of our items, plased in items.json file
			// let listItems;
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
							// items = data;
							// console.log("items:", items);
							const listItems = data.map(item => {
								return `
										<li class="row-item">
											<figure>
												<img src="img/${item.image}.jpg" alt="image">
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
							console.log(" new items: ", listItems);		

							const ul = document.createElement('ul');
							ul.classList.add('row');
							listItems.forEach(el => {ul.innerHTML += el});
							const wrapper = document.querySelector('.wrapper');
							wrapper.appendChild(ul);
							


						});  
					}  
				)
				.catch(function(err) {  
					console.log('Fetch Error :', err);  
				});


		});

		const switcher = document.querySelector('input[type=checkbox]');
		// console.log(switcher.checked ? "CHECKED" : "NOT");
		switcher.addEventListener("change", () => {
			console.log(switcher.checked ? "CHECKED" : "NOT");
			const FLAG = switcher.checked ? "CHECKED" : "NOT";
			if (FLAG === "NOT") {window.onscroll = () => {console.log('HAA')}}
			 else if(FLAG === "CHECKED") {
				 console.log("nagaaa");
				window.onscroll = () => {
					let scrollHeight=document.documentElement.scrollHeight;
    				let clientHeight=document.documentElement.clientHeight;
					// let height=scrollHeight+clientHeight;
					// console.log('scrollHeight:', scrollHeight, "clientHeight :",clientHeight, "height: ",  height);
					let scrollTopA = window.pageYOffset;
					// let scrollTopB = document.documentElement.scrollTop;
					// let scrollTopC = document.body.scrollTop;
					// console.log("scrollTopA",scrollTopA , "scrollTopB", scrollTopB, "scrollTopC", scrollTopC);

					if(window.pageYOffset+document.documentElement.clientHeight === document.documentElement.scrollHeight) {
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
									// items = data;
									// console.log("items:", items);
									const listItems = data.map(item => {
										return `
												<li class="row-item">
													<figure>
														<img src="img/${item.image}.jpg" alt="image">
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
									// console.log(" new items: ", listItems);		

									const ul = document.createElement('ul');
									ul.classList.add('row');
									listItems.forEach(el => {ul.innerHTML += el});
									const wrapper = document.querySelector('.wrapper');
									wrapper.appendChild(ul);
									


								});  
							}  
						)
						.catch(function(err) {  
							console.log('Fetch Error :', err);  
						});
					}
				}
			}
		});



        




    }
);