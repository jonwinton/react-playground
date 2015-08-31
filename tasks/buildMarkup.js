/*jshint node:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        copy: {
            buildMarkup: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    src: [
                        'index.html'
                    ],
                    dest: '<%= env.DIR_DEST %>'
                }]
            }
        }
    });

    grunt.registerTask('buildMarkup', [
        'copy:buildMarkup',
    ]);
};
