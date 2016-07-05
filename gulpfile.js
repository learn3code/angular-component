var del = require('del');
var gulp = require('gulp');

const DIST_JS = 'public/js'
const DIST = 'public'
const VENDOR_FILES = [
    'src/**/normalize.css',
    'src/**/foundation.css',
    'src/**/angular-csp.css',
    'src/**/angular.js',
    'src/**/angular-resource.js',
    'src/**/angular_1_router.js'
    ];


gulp.task('default', ['copy']);

gulp.task('clean', function(callback) {
    return del([DIST + '/**/*', DIST]);
});

gulp.task('copy', ['vendor']);

gulp.task('vendor', ['js'], function(callback) {
    var strm = gulp.src(VENDOR_FILES)
        .pipe(gulp.dest(DIST));
    return strm;
});

gulp.task('js', ['json'], function(callback) {
    var strm = gulp.src('src/js/**/*.js')
        .pipe(gulp.dest(DIST_JS));
    return strm;
});

gulp.task('json', ['html'], function(callback) {
    var strm = gulp.src('src/data/*.json')
        .pipe(gulp.dest(DIST + '/data'));
    return strm;
});

gulp.task('html', ['clean'], function(callback) {
    var strm = gulp.src('src/*.html')
        .pipe(gulp.dest(DIST));
    return strm;
});
