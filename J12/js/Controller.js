define (
'Controller',
	['Model', 'View', 'jquery'],
	function(model, view) {
		var self = this;
	
			view.elements.addBtn.on('click', addItem);
			view.elements.ListContainer.on('click', '.item-delete', removeItem);
			view.elements.ListContainer.on('click', '.item-edit', EditItem);
		//	view.elements.ListContainer.on('click', 'label', EditItem);

			function addItem() {
				if($('.item-value').val()) {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');

				}
			};

			function removeItem() {
				var item = $(this).attr('data-value');

				model.removeItem(item);
				view.renderList(model.data);
			};



			function EditItem() {
				console.log ("Item Editing");

				var itemVal = $(this).attr('data-value');

				var editor = $(this).siblings('input');
				console.log('siblings :', editor);
				var item = $(this).siblings('label');
				console.log('siblings :', item);


				if(item.is(':visible')) {
					item.css('display', 'none');
					editor.css('display', 'inline-block');
					editor.val(item.text());
					$(this).html('<i class="tiny material-icons">done</i>');
				} else {
						editor.css('display', 'none');
						item.css('display', 'inline-block');
						if(editor.val()) item.text(editor.val());
						$(this).html('<i class="tiny material-icons">mode_edit</i>');
				}


			};
				return 123;


			}
)


////////////////////////OLD VERS/////////////////////////
//function Controller(model, view) {
//	var self = this;
//	
//	view.elements.addBtn.on('click', addItem);
//	view.elements.ListContainer.on('click', '.item-delete', removeItem);
//	view.elements.ListContainer.on('click', '.item-edit', EditItem);
////	view.elements.ListContainer.on('click', 'label', EditItem);
//	
//	function addItem() {
//		if($('.item-value').val()) {
//		var newItem = view.elements.input.val();
//		model.addItem(newItem);
//		view.renderList(model.data);
//		view.elements.input.val('');
//			
//		}
//	};
//	
//	function removeItem() {
//		var item = $(this).attr('data-value');
//		
//		model.removeItem(item);
//		view.renderList(model.data);
//	};
//	
//	
//	
//	function EditItem() {
//		console.log ("Item Editing");
//		
//		var itemVal = $(this).attr('data-value');
//		
//		var editor = $(this).siblings('input');
//		console.log('siblings :', editor);
//		var item = $(this).siblings('label');
//		console.log('siblings :', item);
//		
//		
//		if(item.is(':visible')) {
//			item.css('display', 'none');
//			editor.css('display', 'inline-block');
//			editor.val(item.text());
//			$(this).html('<i class="tiny material-icons">done</i>');
//		} else {
//				editor.css('display', 'none');
//				item.css('display', 'inline-block');
//				if(editor.val()) item.text(editor.val());
//				$(this).html('<i class="tiny material-icons">mode_edit</i>');
//		}
//		
//		
//	}
//	
//	
//}