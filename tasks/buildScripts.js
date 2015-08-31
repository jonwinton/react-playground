/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    var shouldMinify = !grunt.option('dev');

    // Help Grunt find the right plugins at runtime
    require('jit-grunt')(grunt, {
    });

    grunt.config.merge({
        // Copies static files for non-optimized builds
        copy: {
            buildScripts: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>/assets/',
                    dest: '<%= env.DIR_DEST %>/assets',
                    src: ['{scripts,vendor}/**/*.js']
                }]
            }
        },

        browserify: {
            dev: {
                src: '<%= env.DIR_SRC %>/assets/scripts/app.js',
                dest: '<%= env.DIR_DEST %>/assets/scripts/app.js'
            }
        }       
    });

    grunt.registerTask('buildScripts',
        'browserify:dev'
    );
};
