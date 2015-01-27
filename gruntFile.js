module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        src: {
            js: ['src/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            html: ['src/index.html'],
            bootstrap: {
                css: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css']
            },
            tpl: {
                app: ['src/app/**/*.tpl.html']
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['<%= src.html %>'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        clean: ['<%= distdir %>/*'],
        concat: {
            dist: {
                options: {
                    banner: "<%= banner %>"
                },
                src:['<%= src.js %>', '<%= src.jsTpl %>'],
                dest: '<%= distdir %>/<%= pkg.name %>.js'
            },
            index: {
                src: ['<%= src.html %>'],
                dest: '<%= distdir %>/index.html',
                options: {
                    process: true
                }
            },
            bootstrap: {
                src: ['<%= src.bootstrap.css %>'],
                dest: '<%= distdir %>/css/bootstrap.css'
            }
        },
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task(s).
    grunt.registerTask('default', ['clean','html2js', 'concat']);
    grunt.registerTask('release', ['clean','html2js', 'concat:index', 'concat:bootstrap', 'uglify']);

};