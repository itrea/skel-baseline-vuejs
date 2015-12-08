module.exports = function ( grunt )
{
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'public/js/app.js': ['app/coffee/app.coffee']
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap : 'none',
          noCache   : true
        },
        files: {
          'public/css/app.css' : 'app/sass/app.sass',
        }
      }
    },
    jade: {
      dist: {
        files: {
          'public/index.html' : 'app/jade/index.jade'
        }
      }
    },
    copy: {
      assets: {
        expand: true,
        cwd: 'app/assets/',
        src: '**',
        dest: 'public/assets/',
      },
      root: {
        dot: true,
        expand: true,
        cwd: 'app/root/',
        src: '**',
        dest: 'public/',
      }
    },
    rename: {
      main: {
        files: [
  		  {src: ['bower_components/baseline/assets/css/font-awesome.min.css'], dest: 'public/css/font-awesome.min.css'},
		]
      }
    },
    watch: {
      coffee: {
        files: ['app/coffee/**/*.coffee'],
        tasks: ['coffee']
      },
      sass: {
        files: ['app/sass/**/*.sass'],
        tasks: ['sass']
      },
      jade: {
        files: ['app/jade/**/*.jade'],
        tasks: ['jade']
      },
      copy: {
        files: [
          'app/assets/**',
          'app/root/**'
          ],
        tasks: [
          'copy:assets',
          'copy:root'
          ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');

  grunt.registerTask('default', ['coffee', 'sass', 'jade', 'rename', 'watch']);
}
