var gulp = require('gulp');
var nodemon = require('nodemon');
var browserSync = require('browser-sync');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscConfig = require('./tsconfig.json');
var jsFiles = ['*.js', 'src/**/*.js'];

var appSrc = 'builds/',
    tsSrc = 'development/';


gulp.task('browser-sync', function () {
    browserSync({
        port: 7000,
        proxy: "http://localhost:4002",
        files: ["builds/**"]
    });
});

gulp.task('nodemon', function (cb) {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 4002
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Hey restarting ....');
        });
});

gulp.task('watch', function () {
    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
});

gulp.task('typescript', function () {
    return gulp
        .src(tsSrc + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appSrc + 'app/'));
});

gulp.task('default', ['nodemon', 'browser-sync', 'watch', 'typescript'], function () {
    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
});