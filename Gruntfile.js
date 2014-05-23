/**
 * http://gruntjs.com/configuring-tasks
 */
module.exports = function (grunt) {
    var path = require('path');

    var DEFAULT_WORKSPACE = 'workspace';
    var DEFAULT_SRC = DEFAULT_WORKSPACE + '/src';
    var DEFAULT_DST = DEFAULT_WORKSPACE + '/dst';
    var DEFAULT_CONFIG_PATH = 'conf.json';

    // demo purpose only
    var DEMO_PATH = 'demo/dist';
    var DEMO_SAMPLE_PATH = 'demo/sample';

    // variables for cmd options with default if not provide.
    var srcPath = DEFAULT_SRC; 				// --src
    var dstPath = DEFAULT_DST; 				// --dst
    var configPath = DEFAULT_CONFIG_PATH; 	// --config

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            options: {
                hostname: '*'
            },
            demo: {
                options: {
                    port: 8000,
                    base: DEMO_PATH,
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),
                            connect.static(path.resolve(options.base))
                        ];
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },

            lesscopy: {
                files: ['static/styles/jaguar.css'],
                tasks: ['copy:css']
            },

            jscopy: {
                files: ['static/scripts/main.js'],
                tasks: ['copy:js']
            },

            jsdoc: {
                files: ['**/*.tmpl', '*.js'],
                tasks: ['jsdoc']
            }
        },

        clean: {
            demo: {
                src: DEMO_PATH
            },
            build: {
                src: dstPath
            }
        },

        jsdoc: {
            options: {
                verbose: true,
                configure: 'conf.json',
                template: './',
                'private': false
            },
            demo: {
                src: [
                    DEMO_SAMPLE_PATH + '/**/*.js',

                    // You can add README.md file for index page at documentations.
                    'README.md'
                ],
                options: {
                    destination: DEMO_PATH,
                }
            },
            build: {
                src: [
                    srcPath + '/**/*.js',
                    'README.md'
                ],
                options: {
                    destination: dstPath,
                }
            }
        },

        less: {
            dist: {
                src: 'less/**/jaguar.less',
                dest: 'static/styles/jaguar.css'
            }
        },

        copy: {
            css: {
                src: 'static/styles/jaguar.css',
                dest: DEMO_PATH + '/styles/jaguar.css'
            },

            js: {
                src: 'static/scripts/main.js',
                dest: DEMO_PATH + '/scripts/main.js'
            }
        }
    });

    // Load task libraries
    [
        'grunt-contrib-connect',
        'grunt-contrib-watch',
        'grunt-contrib-copy',
        'grunt-contrib-clean',
        'grunt-contrib-less',
        'grunt-jsdoc',
    ].forEach(function (taskName) {
        grunt.loadNpmTasks(taskName);
    });

    // Definitions of tasks
    grunt.registerTask('default', 'Watch project files', [
        'demo',
        'connect:demo',
        'watch'
    ]);

    grunt.registerTask('build', 'Create documentations', function () {
        var src = grunt.option('src');
        var dst = grunt.option('dst');
        var config = grunt.option('config');

        srcPath = src;
        dstPath = dst;
        configPath = config;

        grunt.log.writeln('Sources Path: ' + srcPath);
        grunt.log.writeln('Destination Path: ' + dstPath);
        grunt.log.writeln('Config Path: ' + configPath);

        grunt.task.run(['less', 'clean:build', 'jsdoc:build']);
    });

    grunt.registerTask('demo', 'Create documentations for demo', [
        'less',
        'clean:demo',
        'jsdoc:demo'
    ]);
};