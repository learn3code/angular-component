const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const replaceblocks = require('gulp-replace-build-block');

const DIST_JS = 'public/js'
const DIST = 'public'
const VENDOR_JS_FILES = [
    'src/**/angular.js',
    'src/**/angular-resource.js',
    'src/**/angular_1_router.js'
];

const VENDOR_CSS_FILES = [
    'src/**/normalize.min.css',
    'src/**/foundation.min.css',
    'src/**/angular-csp.css'
];

gulp.task('default', ['copy']);

gulp.task('clean', function(callback) {
    return del([DIST + '/**/*', DIST]);
});

gulp.task('copy', ['vendor']);

gulp.task('vendor', ['css-min'], function(callback) {
    var strm = gulp.src(VENDOR_JS_FILES)
        .pipe(concat({
            path: 'vendor.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(DIST))
        .on('vendor', callback);
    return strm;
});

gulp.task('css-min', ['js-min'], function(callback) {
    var strm = gulp.src(VENDOR_CSS_FILES)
        .pipe(concat('app.css'))
        .pipe(replaceblocks())
        .pipe(gulp.dest(DIST))
        .on('css-min', callback);
    return strm;
});

gulp.task('js-min', ['js'], function(callback) {
    var strm = gulp.src(DIST + '/app.js')
        .pipe(uglify())
        .pipe(gulp.dest(DIST))
        .on('js-min', callback);
        return strm;
    // pump([
    //         gulp.src(DIST + '/app.js'),
    //         gulp.dest(DIST)
    //     ],
    //     callback
    // );
});

gulp.task('js', ['json'], function(callback) {
    var strm = gulp.src(['src/init.js', 'src/js/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat({
            path: 'app.js',
            newLine: ';'
        }))
        .pipe(gulp.dest(DIST))
        .on('js', callback);
    return strm;
});

gulp.task('json', ['html'], function(callback) {
    var strm = gulp.src('src/data/*.json')
        .pipe(gulp.dest(DIST + '/data'))
        .on('json', callback);
    return strm;
});

gulp.task('html', ['clean'], function(callback) {
    var strm = gulp.src('src/*.html')
        .pipe(replaceblocks())
        .pipe(gulp.dest(DIST))
        .on('html', callback);
    return strm;
});
