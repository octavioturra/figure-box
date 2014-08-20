module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
			vulcanize: {
				default: {
					options: {
						csp: true,
						excludes: {
							imports: [
								"polymer.html"
							]
						}
					},
					files: {
						'dist/figure-box.html': 'src/figure-box.html'
					},
				},
			},
		})

    // These plugins provide necessary tasks
		grunt.loadNpmTasks('grunt-vulcanize');	
	
    // Default task
		grunt.registerTask('dist', ['vulcanize']);    
};


