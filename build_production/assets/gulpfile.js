var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('allJs', function() {
    return gulp.src([
        './bower_components/angular.min/index.js',
        './bower_components/marked/marked.min.js',
        './bower_components/angular-marked/dist/angular-marked.min.js',
        './bower_components/angular-route.min/index.js',
        './bower_components/jquery-1.11.3/index.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js'
    ]).pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('coreJs', function() {
    return gulp.src([
        './assets/js/angular/modules.js',
        './assets/js/angular/controllers/index.js',
        './assets/js/angular/controllers/categorie.js',
        './assets/js/angular/controllers/post.js',
    ]).pipe(concat('core.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('webserver', function() {
    connect.server();
});

gulp.task('default', ['webserver', 'allJs', 'coreJs']);


gulp.watch('./assets/js//**/*.js', ['coreJs']);