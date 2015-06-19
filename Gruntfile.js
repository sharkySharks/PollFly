module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'Server/**/*.js', 'Client/**/*.js', '!Server/spec/spec.js']
    },
    karma: {
      unit:{
        configFile: 'karma.conf.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma', 'jshint']);

};
