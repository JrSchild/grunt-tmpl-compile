/*
 * grunt-tmpl-compile
 * https://github.com/JrSchild/grunt-tmpl-compile
 *
 * Copyright (c) 2013 JrSchild
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('tmpl_compile', 'Concat and pre-compile your underscore and lodash template files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      namespace: 'Templates',
      preCompile: true,
      subDirectories: false,
      library: 'lodash'
    });

    var _ = require(options.library);
    var fs = require('fs');

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var tmpl_data = {
        namespace: options.namespace,
        templates: [],
      };

      /*
       * Set the template data and compile the template
       * @return {Object}
       */
      var setTmpl = function(path) {
        // Read file source.
        var name = path.match(/[^\/]+$/)[0].split('.')[0];
        var file = grunt.file.read(path);

        return {
          name: name,
          templateString: file.replace(/(\r\n|\n|\r)/gm,"\\n"),
          template: _.template(file, false).source
        };
      };

      /**
       * Recursivly build a template-data object.
       * @return {Array}
       */
      var buildTmplData = function(array, basePath) {
        var tmpl_data = [];

        array.map(function(path) {
          path = (basePath || '') + path;

          try {
            var stats = fs.lstatSync(path);

            if (stats.isFile()) {
              tmpl_data.push(setTmpl(path));
              return;
            }
            if (stats.isDirectory() && options.subDirectories) {
              // loop through the directory and recursivly add the subfiles/folders to this tmpl data.
              tmpl_data.push({
                name: path.match(/[^\/]+$/)[0],
                templates: buildTmplData(fs.readdirSync(path), path + '/'),
              });
              return;
            }
          } catch(e) {
            grunt.log.warn('Source file or dir "' + path + '" not found.');
          }
        });

        return tmpl_data;
      };

      // Generate the template-data.
      tmpl_data.templates = buildTmplData(f.orig.src, __dirname + '/../../../');

      // Load the base file and the right format-template file.
      var base_tmpl = grunt.file.read(__dirname + '/../templates/base_tmpl');

      var formatName = options.preCompile ? 'compile_tmpl' : 'concat_tmpl';
      var formatTmpl = grunt.file.read(__dirname + '/../templates/' + formatName);

      // Parse the format template and set it on the data so it can be used recursivly.
      tmpl_data.formatTmpl = _.template(formatTmpl);

      // Render with correct compiler and write to the destination file.
      grunt.file.write(f.dest, _.template(base_tmpl, tmpl_data));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
