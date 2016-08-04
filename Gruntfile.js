var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-s3');

grunt.initConfig({
  aws_s3: {
    options: {
      region: 'eu-central-1',
      uploadConcurrency: 5, // 5 simultaneous uploads
      downloadConcurrency: 5, // 5 simultaneous downloads
    },
    staging: {
      options: {
        bucket: 'together-pact',
        differential: true, // Only uploads the files that have changed
      },
      files: [
        {expand: true, dest: 'pacts/', cwd: 'pacts/', src: ['*.json'], action: 'upload'},
      ]
    }
  },
});
