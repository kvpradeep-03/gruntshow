// Gruntfile.js is a node module so it can access all the node modules
module.exports = function(grunt){ 

    // Display the current date and time
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    // Project configuration.
    grunt.initConfig({
        
        concat: {
        
            options: {
            //Defines the string or character that will be inserted between concatenated files.
            separator: '\n', 
            //The source map contains a mapping reference that helps developer tools trace errors or debug the original files.    
            sourceMap: true,   
            //banner This option is used to add a string or a comment at the beginning of the output file.
            banner: "/*Processed by SNA labs on "+datetime+"*/\n" 
            },
        
            css: {
                src: [
                    '../css/**/*.css',
                ],

                dest: '../../htdocs/css/style.css', 
            },
            
            js: {
                src: [
                    //grunt is a root directory
                    'bower_components/jquery/dist/jquery.js',
                    '../js/**/*.js',
                ],
                    
                dest: '../../htdocs/js/app.js' 
            },

        },
    
    //till now concat is over, continue on wat
        watch: {
            css: {
            // `/**/` matches any subdirectories inside css.  `*.css` matches all `.css` files in the css directory and its subdirectories.
              files: [
                '../css/**/*.css',
                
            ],
              tasks: ['concat:css'],
              options: {
                spawn: false,
              },
            },

            js: {
                files: [
                '../js/**/*.js'       
                
                ],
                tasks: ['concat:js'],
                options: {
                spawn: false,
                },
            },
          },
    });

    // Custom tasks
    grunt.registerTask('hello',function(){
        console.log('Hello World');
    })

    grunt.registerTask('task1',function(){
        console.log('Task 1 is running ...');
    })

    grunt.registerTask('task2',function(){
        console.log('Task 2 is running ...');
    })

    // Load the plugin cssmin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default',['task1','task2','concat','watch']);
};