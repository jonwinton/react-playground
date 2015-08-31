'use strict';

module.exports = function(grunt) {

    // Lazy-load tasks
    require('jit-grunt')(grunt)({
        customTasksDir: 'tasks'
    });

    grunt.initConfig({

        env: require('./build-env'),

        // Automatically removes generated files and directories. Useful for
        // rebuilding the project with fresh copies of everything.
        clean: {
            options: {
                force: '<%= env.UNSAFE_MODE %>'
            },
            dest: ['<%= env.DIR_DEST %>'],
            tmp: ['<%= env.DIR_TMP %>']
        },

        // Watch Task
        watch: {
            watchMarkup: {
                files: [
                    '<%= env.DIR_SRC %>/**/*.html',
                    '<%= env.DIR_SRC %>/templates/**/*.html'
                ],
                tasks: ['buildMarkup']
            },
            watchStatic: {
                files: [
                    '<%= env.DIR_SRC %>/**/.htaccess',
                    '<%= env.DIR_SRC %>/**/*.{php,rb,py,jsp,asp,aspx,cshtml,txt}',
                    '<%= env.DIR_SRC %>/assets/media/**'
                ],
                tasks: ['buildStatic', 'clean:tmp']
            },
            watchStyles: {
                files: ['<%= env.DIR_SRC %>/assets/{scss,vendor}/**/*.{scss, css}'],
                tasks: ['buildStyles', 'clean:tmp']
            },
            watchScripts: {
                files: ['<%= env.DIR_SRC %>/assets/{scripts,vendor}/**/*.js'],
                tasks: ['buildScripts', 'clean:tmp']
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: 'web',
                    keepalive: true
                }
            }
        }
    });


    grunt.registerTask('default', 'Run default tasks for the target environment.', ['build']);

    grunt.registerTask('build', 'Compile source code and outputs to destination.', ['clean:dest', 'buildStatic', 'buildMarkup', 'buildStyles', 'buildScripts', 'clean:tmp']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
};
