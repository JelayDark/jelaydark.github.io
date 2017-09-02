module.exports = function (grunt) {
		grunt.initConfig({
			concat: {
				options: {
					separator: ';'
				},
				dist: {
					src: ['js/src/*.js', ],
					dest: 'js/release/script.min.js'
				}
			},
			uglify: {
				dist: {
					src: ['js/release/script.min.js'],
					dest: 'js/release/script.min.js'
				}
			},
			concat_css: {
				options: {
					// Task-specific options go here. 
				},
				all: {
					src: ["styles/src/*.css"],
					dest: "styles/dist/styles.css"
				}
			},
			cssmin: {
				target: {
					files: [{
						expand: true,
						cwd: 'styles/dist',
						src: ['*.css', '!*.min.css'],
						dest: 'styles/dist',
						ext: '.min.css'
					}]
				}
			},
			sass: {
				dist: {
					files: [{
						expand: true,
						cwd: 'styles/src',
						src: ['*.scss'],
						dest: 'styles/src',
						ext: '.main.css'
		  			}]
				}
			},
			watch: {
				sass: {
					// We watch and compile sass files as normal but don't live reload here
					files: ['styles/src/*.scss'],
					tasks: ['sass'],
				}
			}
		});

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'concat_css', 'cssmin']);

};