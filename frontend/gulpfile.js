const gulp = require('gulp');
const liquidate = require('gulp-liquidate');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber =require('gulp-plumber');
var browserSync = require('browser-sync').create();




gulp.task("default", function(){
;
});

gulp.task("style", function () {
        gulp.src("app/style/**/*.scss")
        .pipe(plumber())
        .pipe(sass({"bundleExec": true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"));
    });


gulp.task("html", function () {
        gulp.src("app/html/**/*.html")
        .pipe(plumber())
        .pipe(gulp.dest("dist/"));
    });



gulp.task("js", function () {
        gulp.src("app/js/**/*.js")
        .pipe(plumber())
        .pipe(gulp.dest("dist/js"));
    });


gulp.task('serve', ['html', 'style', 'js' ], function() {

  	gulp.watch("app/**/*.scss", ['style']).on('change', browserSync.reload);
    gulp.watch("app/**/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("app/**/*.html", ['html']).on('change', browserSync.reload);

    browserSync.init({
        server: "./dist"
    });

  
});