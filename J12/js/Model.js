define (
'Model',
	['jquery'],
	function(data) {
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
		
		return {
			removeItem: function(item) {
			var index = data.indexOf(item);
			if (index === -1) {
				return;
			};
			self.data.splice(index, 1);
			return data;
		},
			addItem: function (item) {
			self.data.push(item);
			return data;
		},
			data:data
		};
		
		
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