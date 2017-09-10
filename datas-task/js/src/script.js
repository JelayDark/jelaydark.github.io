"use strict"

const ready = fn => {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
	const button = document.querySelector('button');
	const addBlocks = () => { // function of adding blocks on page
		fetch('/datas-task/items.json') //request to our items.json
			.then(  
				response => {  
					if (response.status !== 200) {  
						console.log('Looks like there was a problem. Status Code: ' + response.status);  
						return;  
					}
					response.json().then(data => {  
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
						const ul = document.createElement('ul');
						ul.classList.add('row');
						listItems.forEach(el => {ul.innerHTML += el});
						const wrapper = document.querySelector('.wrapper');
						wrapper.appendChild(ul);
					});  
				}  
			)
			.catch(err => {  
				console.log('Fetch Error:', err);  
			});

	}
	button.addEventListener('click', addBlocks);

	const switcher = document.querySelector('input[type=checkbox]');
	switcher.addEventListener("change", () => {
		if (!switcher.checked) {window.onscroll = null;}
		else {
			window.onscroll = () => {
				if(document.documentElement.scrollHeight - (window.pageYOffset + document.documentElement.clientHeight) <= 300) { // 300 = padding-bottom of page
					addBlocks();
				}
			}
		}
	});
});