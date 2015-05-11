module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                src: 'inbox.js',
                dest: 'inbox.min.js'
            }
        },
        sass: {
            dist: {
                src: 'inbox.scss',
                dest: 'inbox.css',
                options: {
                    style: 'compressed'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['uglify', 'sass']);
};
