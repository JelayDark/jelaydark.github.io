$(function () {
	function Human() {
	this.name = "Name";
	this.age = 32;
	this.height = 167;
	this.weight= 60;
};

console.log("Human", Human);

function Worker() {
	this.workplaces = [
		{type : 'company', wage: 2000},
		{type : 'freelance', wage: 500}
	];
	this.wage = 2500;
	this.Work = function () {
		alert ("I'm Workin'! Please! leave me alone!");
	}
}

function Student() {
	this.studyplaces = [
		{type: 'school', years: 12},
		{type: 'university', years: 4}
	];
	this.scholarship = 825;
	this.WasteTime = function () {
		alert ("W8, dude! I'm really busy!!");
	}
}


Worker.prototype = new Human();
Student.prototype = new Human();

var AlexPetrovich = new Worker();
console.log ("AlexPetrovich", AlexPetrovich);
console.log ("workplaces : ", AlexPetrovich.workplaces);
var MedVedik666 = new Student();
console.log ("MedVedik666", MedVedik666);
console.log ("Medvedik666 is seeing serials. His age : ", MedVedik666.age);

MedVedik666.age = 18;

console.log ("New age of Student : ", MedVedik666.age);
var button = document.createElement("button");
button.innerHTML = "Waste Time!"
$('body').append(button);
$('button').click(MedVedik666.WasteTime);


});