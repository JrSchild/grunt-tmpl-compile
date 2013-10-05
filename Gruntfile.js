/*
 * grunt-tmpl-compile
 * https://github.com/JrSchild/grunt-tmpl-compile
 *
 * Copyright (c) 2013 JrSchild
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    tmpl_compile: {
      pre_compiled: {
        options: {
          namespace: 'Templates',
          preCompile: true,
        },
        files: {
          'tmp/pre_compiled.js': ['test/fixtures/template_1.tmpl.html', 'test/fixtures/template_2.tmpl.html'],
        },
      },
      compiled: {
        options: {
          namespace: 'CustomNamespace',
          preCompile: false,
        },
        files: {
          'tmp/compiled.js': ['test/fixtures/template_1.tmpl.html', 'test/fixtures/template_2.tmpl.html'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'tmpl_compile', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
