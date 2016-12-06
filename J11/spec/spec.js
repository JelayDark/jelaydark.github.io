var locStor = require('../js/locStor.js');
	

describe("loclStor.js file:", function() {
  it("Should: right answer checker must b in diapason of 1 to 3", function() {
	  //prepare
	  var result;
	  var flag =0;
	  //act
	  
	  for (var i=0; i<locStor.length; i++) {
		  if(locStor[i].check>3 || locStor[i].check<1) flag=1;
	  }
	  //отключить localStorage перед прогоном
	  result = flag;
	  
	  //assert
    expect(result).toEqual(0);
  });
  
  it("Should: answers count should b equal to three", function() {
	  
	  var result;
	  var flag = 0;
	  //act
	  
	  for (var i=0; i<locStor.length; i++) {
		  if(locStor[i].answers.length!=3) flag=1;
	  }
	  //отключить localStorage перед прогоном
	  result = flag;
	  
	  //assert
    expect(result).toEqual(0);
	  
  });
	
	it("Should: answers lengs of symbols should b bigger then 10", function() {
	  
	  var result;
	  var flag = 0;
	  //act
	  
	  for (var i=0; i<locStor.length; i++) {
		  if(locStor[i].title.length<10) flag=1;
	  }
	  //отключить localStorage перед прогоном
	  result = flag;
	  
	  //assert
    expect(result).toEqual(0);
	  
  })
  
  
});

xdescribe("PROVERKA", function() {
	var elem;
	
	beforeEach(function() {
		elem = $('<div id="container"><p>Hello world</p></div>');
	});
	
  xit("SHOULD B", function() {
	  //prepare

	  
	  //assert
    expect(elem).toBe('#container');
    expect(elem).toContain('p');
  })
});


