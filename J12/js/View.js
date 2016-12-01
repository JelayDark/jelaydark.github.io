define (
'View',
	['Model', 'jquery'],
	function(model) {
		var self = this;
	
		function init() {
			var wrapper = tmpl($('#wrapper-template').html());
			$('body').append(wrapper);
			self.elements = {
				input: $('.item-value'),
				addBtn: $('.item-add'),
				ListContainer: $('.item-list')
			};
			self.renderList(model.data);
		};
		self.renderList = function (data) {
			var list = tmpl($('#list-template').html(), {data:data});
			self.elements.ListContainer.html(list);
		};

		init();
	
		return {
			renderList: function (data) {
			var list = tmpl($('#list-template').html(), {data:data});
			self.elements.ListContainer.html(list);
		},
			elements: {
				input: $('.item-value'),
				addBtn: $('.item-add'),
				ListContainer: $('.item-list')
			}
		};
	})

////////////////////////////OLD
//function View (model) {
//	var self = this;
//	
//	function init() {
//		var wrapper = tmpl($('#wrapper-template').html());
//		$('body').append(wrapper);
//		self.elements = {
//			input: $('.item-value'),
//			addBtn: $('.item-add'),
//			ListContainer: $('.item-list')
//		};
//		self.renderList(model.data);
//	};
//	
//	self.renderList = function (data) {
//		var list = tmpl($('#list-template').html(), {data:data});
//		self.elements.ListContainer.html(list);
//	};
//	
//	init();
//	
//}