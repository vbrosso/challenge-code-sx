module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      js : {
        files : {
          'js/main.min.js' : [ 'js/main.js' ]
        }
      }
    }, // uglify
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'stylesheets/style.min.css': ['stylesheets/style.css']
        }
      }
    }, //cssmin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index_prod.html': 'index.html'
        }
      }
    } //htmlmin
  });

    // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'cssmin', 'htmlmin' ] );

};