/* 
 * Author: Samuel Bailey (sam@bailey.geek.nz)
 * License: MIT License
 * Created: July 2012
 * Description: Javascript Debugify
 */

var file, stringify, readSync, output, traces = [], tests = 0, passes = 0, addTrace, lines;

//load optimist
file = require('optimist').
  usage("Javascript Debugify\n\nUsage: $0 -f [file]").
  demand('f').
  describe('f', 'location of file eg. ./examples.js').
  argv.f;

//this is what node's console.dir() uses to stringify
stringify = require('util').inspect;

//read a utf-8 file synchronously and return a string
readSync = (function (f) { return function (x) { return f(x, 'utf-8'); }; })(require('fs').readFileSync);

//add a trace to the traces array
//this function should only be called from one of the functions below (global.trace .etc)
addTrace = function (s) {
	var line = (new Error).stack.split("\n")[3].split(':')[1] || 0;
	traces[line-1] = s;
};

//these functions should only be called from the file we're running
global.trace = function (object) {
	addTrace(' → ' + stringify(object));
};
global.assert = function (boolean) {
	if (boolean) {
		addTrace(' ✓ pass');
		passes++;
	}
	else addTrace(' ✗ fail');
	tests++;
};
global.assertEquals = function (objectA, objectB) {
	if (stringify(objectA) === stringify(objectB)) {
		addTrace(' ✓ pass');
		passes++;
	}
	else addTrace(' ✗ fail');
	tests++;
};
console.trace = function (object) {
	addTrace((new Error).stack);
};

//aliases for the functions above
output = console.log; //duck punch console.*
console.log = trace;
console.info = trace;
console.debug = trace;

//run the file
require(file);

//output the source code and the traces array
lines = readSync(file).split("\n");
for (i in lines) {
	output(lines[i]);
	if (traces[i] !== undefined) output(traces[i]);
}

//output totals
if (tests) output(passes+'/'+tests+' tests passed.');

