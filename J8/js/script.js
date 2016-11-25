$(function () {
	
	$('button').click(StartSearch);
	
	
	function StartSearch() {
		
		
		var $request = $('input').val();
		
		if($request){
			
			$('#search_res').remove();
		
			$.ajax({
				url: 
				"https://pixabay.com/api/?key=3844453-bf490be8948283d86a7e93444&q="+ $request +"&image_type=photo", 
				method: "GET",
				dataType: "jsonp",
				success: function (data) {
					var res = document.createElement("ul");
					if (parseInt(data.totalHits) > 0) {
						$.each(data.hits, function(i, hit){
							console.log(i); 
							var li = document.createElement("li");
							li.classList.add("result_el");
							li.innerHTML = '<a href="' + hit.pageURL + '" target="_blank">' + '<img src="' + hit.previewURL + '">' + "</a>";
							res.appendChild(li);
						});

						res.classList.add("result_list");
						res.classList.add("clearfix");

					} else {
						var res = document.createElement("h2");
						res.innerHTML = "Sorry. No resoults found";
					}
					
					$('input').attr('placeholder','Search');
					$('input').removeClass('false_input');
					$('body').append(res);
					res.setAttribute('id', 'search_res');
					$('.searchform').animate({
						left: 20,
						top: 10,
						width: 400,
						margin: 0,
					})
				},
				error: function () {
					var res = document.createElement("h2");
					res.innerHTML = "Something gonna wrong! Try to find another picture.";
					$('body').append(res);
					res.setAttribute('id', 'search_res');
				}
			});
		} else {
			$('input').attr('placeholder','Write something!!');			
			$('input').addClass('false_input');			
		}
		
	};
})
