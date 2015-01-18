module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        src: {
            js: ['src/**/*.js'],
            html: ['src/index.html']
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        clean: ['<%= distdir %>/*'],
        concat: {
            dist: {
                options: {
                    banner: "<%= banner %>"
                },
                src: ['<%= src.js %>'],
                dest: '<%= distdir %>/<%= pkg.name %>.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['clean','concat']);

};