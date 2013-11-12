'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tmpl_compile = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  pre_compiled: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/pre_compiled.js');
    var expected = grunt.file.read('test/expected/pre_compiled.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  concat: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/concatted.js');
    var expected = grunt.file.read('test/expected/concatted.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  inclsubdirs: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/inclsubdirs.js');
    var expected = grunt.file.read('test/expected/inclsubdirs.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  inclsubdirsconcat: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/inclsubdirsconcat.js');
    var expected = grunt.file.read('test/expected/inclsubdirsconcat.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  one_subdir: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/one_subdir.js');
    var expected = grunt.file.read('test/expected/one_subdir.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  one_subdirconcat: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/one_subdirconcat.js');
    var expected = grunt.file.read('test/expected/one_subdirconcat.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  }
};
