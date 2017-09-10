module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'small',
						width: '30%',
						suffix: '_small',
						quality: 20
					}, {
						name: 'large',
						width: '50%',
						suffix: '_large',
						quality: 40
					}, {
						width: 1600,
						suffix: '_large_2x',
						quality: 30
					}, {
						width: 800,
						suffix: '_large_1x',
						quality: 50
					}]
				},
					files: [{
						expand: true,
						src: ['*.{gif,jpg,png,JPG}'],
						cwd: 'img/',
						dest: 'img/'
					}]
				}
			},
	  });

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};