/* 
 * Author: Samuel Bailey (sam@bailey.geek.nz)
 * License: MIT License
 * Created: July 2012
 * Description: Javascript Debugify
 */

var argv = require('optimist').
  usage("Javascript Debugify\n\nUsage: $0 -f [file]").
  demand('f').
  describe('f', 'location of file eg. ./examples.js').
  argv;

var stringify = require('util').inspect; //this is what node's console.dir() uses to stringify
var readSync = (function (f) { return function (x) { return f(x, 'utf-8'); }; })(require('fs').readFileSync);

var traces = [], tests = 0, passes = 0;

var addTrace = function (s) {
	var line = (new Error).stack.split("\n")[3].split(':')[1] || 0;
	traces[line-1] = s;
};
global.trace = function (o) {
	addTrace(' → ' + stringify(o));
};
global.assert = function (b) {
	if (b) {
		addTrace(' ✓ pass');
		passes++;
	}
	else addTrace(' ✗ fail');
	tests++;
};
global.assertEquals = function (a,b) {
	if (stringify(a) === stringify(b)) {
		addTrace(' ✓ pass');
		passes++;
	}
	else addTrace(' ✗ fail');
	tests++;
};
var output = console.log;
global.console.log = global.trace;
global.console.info = global.trace;
global.console.debug = global.trace;

var run = function (file) {
	var lines = readSync(file).split("\n");
	
	require(file);
	
	for (i in lines) {
		if (traces[i] !== undefined) {
			output(lines[i]);
			output(traces[i]);
		}
		else output(lines[i]);
	}
	
	if (tests) output(passes+'/'+tests+' tests passed.');
}

run(argv.f);

