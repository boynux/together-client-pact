var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws');

grunt.initConfig({
  s3: {
    options: {
      bucket: 'together-pact',
			region: "eu-central-1",
      access: 'public-read',
    },
		uploadPact: {
			cwd: 'pacts/',
			src: '**',
			dest: 'pacts/',
		}
	}
});
