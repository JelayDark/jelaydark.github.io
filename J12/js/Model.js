define (
'Model',
	['jquery'],
	function (data, $) {
		
		function Model (data) {
		
		var self = this;
		self.data = data;
		
		self.addItem = function (item) {
			self.data.push(item);
			return self.data;
		};
		self.removeItem = function (item) {
			var index = self.data.indexOf(item);
			if (index === -1) {
				return;
			};
			self.data.splice(index, 1);
			return self.data;
		};
		
		return self;}
		
		return Model;
		
//		return {
//			removeItem: self.removeItem,
//			addItem: self.addItem,
//			data:self.data,
//		};
		
		
	})



//////////////////////////OLD
//function Model (data) {
//	var self = this;
//	
//	self.data = data;
//	self.addItem = function (item) {
//		self.data.push(item);
//		
//		return self.data;
//	};
//	
//	self.removeItem = function (item) {
//		var index = self.data.indexOf(item);
//		
//		if(index === -1) {
//			return;
//		};
//		
//		self.data.splice(index,1);
//		
//		return self.data;
//	};
//};