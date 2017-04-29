var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglifyjs'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    autoprefixer    = require('gulp-autoprefixer'),
    eslint          = require('gulp-eslint'),
    babel           = require('gulp-babel'),
    rename          = require('gulp-rename'),
    inject          = require('gulp-inject-string'),
    mocha           = require('gulp-mocha');


gulp.task('default', ['watch']);

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('browser-sync', [ 'img' ], function() {
    browserSync({
            server: {
                    baseDir: 'app'
            },
            notify: false
    });
});

gulp.task('sass', function() {
    return gulp.src('app/**/*.sass')
            .pipe(sass())
            .pipe(cssnano())
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
            .pipe(gulp.dest('app/assets/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/assets/css/libs.css')
            .pipe(cssnano())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('app/assets/css'));
});

gulp.task('js-test',  function() {
    return gulp.src('app/index.html')
            .pipe(inject.before('</head>', 
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/2.1.0/mocha.js"></script><script>mocha.setup(\'bdd\');</script><script src="https://cdnjs.cloudflare.com/ajax/libs/chai/2.0.0/chai.js"></script><script>var assert = chai.assert;var expect = chai.expect;</script>'))
            .pipe(inject.after('<script type="text/javascript" src="js/main.js"></script>', 
                '<script src="js/Z_test.js"></script><div id="mocha"></div><script>mocha.run();</script>'))
            .pipe(rename('index_test.html'))
            .pipe(gulp.dest('app'));
});

gulp.task('scripts', ['js-concat'], function() {
    return gulp.src([
                'app/assets/libs/angular/angular.min.js',
                'app/assets/libs/jquery/dist/jquery.min.js',
                'app/assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
            ])
            .pipe(concat('libs.min.js'))
            .pipe(babel())
            .pipe(uglify())
            .pipe(gulp.dest('app/assets/js'));
});

gulp.task('js-clean', function() {
    return del.sync('app/assets/js/**/main.js');
});

gulp.task('js-concat', ['js-clean'], function() {
    return gulp.src(['app/**/*.js', '!app/**/test.js'])
            .pipe(concat('main.js'))
            .pipe(babel())
            .pipe(gulp.dest('app/assets/js'));
});

gulp.task('lint', function() {
    return gulp.src(['app/**/*.js', '!app/**/main.js','!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', ['js-concat'], browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/assets/img/**/*')
            .pipe(cache(imagemin({
                    interlaced: true,
                    progressive: true,
                    svgoPlugins: [{removeVieweBox: false}],
                    use: [pngquant()]
            })))
            .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
    //Build Css
    gulp.src([
                'app/assets/css/main.css',
                'app/assets/css/libs.min.css'
            ])
            .pipe(gulp.dest('dist/css'));

    //Build Fonts
    gulp.src('app/assets/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));

    //Build Js
    gulp.src('app/assets/js/**/main.js')
            .pipe(babel({
                    presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));

    //Build Htmls
    gulp.src('app/*html')
            .pipe(gulp.dest('dist'));

    //Build JSON
    gulp.src('app/assets/json/**/*.json')
            .pipe(gulp.dest('dist/json'));
});
