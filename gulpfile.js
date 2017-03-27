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
    babel           = require('gulp-babel');


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
    return gulp.src('app/sass/**/*.sass')
            .pipe(sass())
            .pipe(cssnano())
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
            .pipe(cssnano())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', ['js-concat'], function() {
    return gulp.src([
                'app/libs/jquery/dist/jquery.min.js',
                'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
            ])
            .pipe(concat('libs.min.js'))
            .pipe(babel({
                    presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'));
});

gulp.task('js-clean', function() {
    return del.sync('app/js/**/main.js');
});

gulp.task('js-concat', ['js-clean'], function() {
    return gulp.src('app/js/**/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('app/js'));
});

gulp.task('lint', function() {
    return gulp.src(['app/**/*.js', '!app/**/main.js','!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
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
                'app/css/main.css',
                'app/css/libs.min.css'
            ])
            .pipe(gulp.dest('dist/css'));

    //Build Fonts
    gulp.src('app/fonts/**/*')
            .pipe(gulp.dest('dist/fonts'));

    //Build Js
    gulp.src('app/js/**/main.js')
            .pipe(babel({
                    presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));

    //Build Htmls
    gulp.src('app/*html')
            .pipe(gulp.dest('dist'));
});