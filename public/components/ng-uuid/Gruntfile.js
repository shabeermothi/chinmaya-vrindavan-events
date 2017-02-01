module.exports = function (grunt) {

	var files = [
		'src/**/*.js'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			all: {
				options: {
					mangle: false,
					beautify: false
				},
				files: {
					'build/<%= pkg.name %>.min.js': files
				}
			}
		},
		jshint: {
			default: {
				options: {
					jshintrc: '.jshintrc',
					force: true
				},
				files: {
					src: [
						'src/**/*.js'
					]
				}
			}
		},
		watch: {
			options: {
				livereload: 4010
			},
			dev: {
				files: ['src/**/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'uglify', 'watch']);

	grunt.event.on('watch', function (action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

};