/*
 * grunt-tmpl-compile
 * https://github.com/JrSchild/grunt-tmpl-compile
 *
 * Copyright (c) 2013 JrSchild
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var _ = require('underscore');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('tmpl_compile', 'Concat and pre-compile your underscore and lodash template files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      namespace: 'Templates',
      preCompile: true,
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var template_tmpl = "(function(namespace) {\n\n<% for(var i=0,l=templates.length; i<l; i++) { %>namespace.<%= templates[i].name %> = function(obj) {\nvar template='<%= templates[i].templateString %>';\nreturn (this.<%= templates[i].name %> = _.template(template))(obj);\n};\n\n<% } %>})(window.<%= namespace %> = window.<%= namespace %> || {});";
      var template_tmpl_preCompile = "(function(namespace) {\n\n<% for(var i=0,l=templates.length; i<l; i++) { %>namespace.<%= templates[i].name %> = <%= templates[i].template %>;\n\n<% } %>})(window.<%= namespace %> = window.<%= namespace %> || {});";
      var tmpl_data = {
        namespace: options.namespace,
        templates: [],
      };

      // Concat specified files.
      var ok = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var name = filepath.match(/[^\/]+$/)[0].split('.')[0];
        var file = grunt.file.read(filepath);

        tmpl_data.templates.push({
          name: name,
          templateString: file.replace(/(\r\n|\n|\r)/gm,"\\n"),
          template: _.template(file, false).source
        });
      });

      // Render and write the destination file.
      grunt.file.write(f.dest, _.template(options.preCompile ? template_tmpl_preCompile : template_tmpl, tmpl_data));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
