module.exports = function(grunt) {
	grunt.initConfig({
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'nested'
				},
				files: {                         // Dictionary of files
					'responsive.css': 'responsive.scss'      // 'destination': 'source'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['*.scss'],
				tasks: ['sass']
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
}