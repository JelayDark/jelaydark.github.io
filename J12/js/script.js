$(function() {
	var firstToDoList = ['learn JS', 'Do LabWorks & HW', 'Many Cups of coffe'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);	
});