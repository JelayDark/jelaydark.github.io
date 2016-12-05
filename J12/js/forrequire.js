requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'
	},
	shin: {
		'jquery': {
			exports: 'jQuery'
		}
	}
	
});

require(
	[
		'Controller',
		'Model',
		'View',
		'jquery'
		
		
	],
	function(Controller, Model, View, $) {
		$(function() {
			var firstList = ['learn JS', 'Do LabWorks & HW', 'Many Cups of coffe'];
			var model = new Model(firstList);
			var view = new View(model);
			var controller = new Controller(model, view);	
});
		
	}
	
	
	
);