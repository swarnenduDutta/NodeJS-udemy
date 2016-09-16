var greet = require('./greet');

greet.english();
greet.spanish();

function test() {
	this.greeting = 'hello world';
	this.greet = function() {
		console.log(this.greeting);
	}
}

var test1 = new test();
var test2 = test1.greet();


//console.log(test2);