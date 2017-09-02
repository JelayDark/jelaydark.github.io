module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js',],
        dest: 'js/dist/script.min.js'
      }
	},
	  uglify: {
		  dist: {
			  src: ['js/dist/script.min.js'],
			  dest: 'js/dist/script.min.js'
		  }
	  },
	  concat_css: {
			options: {
			  // Task-specific options go here. 
			},
			all: {
			  src: ["css/src/*.css"],
			  dest: "css/release/styles.css"
			},
		  },
	  cssmin: {
		  target: {
			files: [{
			  expand: true,
			  cwd: 'css/release',
			  src: ['*.css', '!*.min.css'],
			  dest: 'css/release',
			  ext: '.min.css'
			}]
		  }
		}

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};