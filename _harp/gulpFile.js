var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower-extract', function(){

    return gulp.src(mainBowerFiles(({ paths: { bowerDirectory: 'lib' } })))
        .pipe(gulp.dest('public/lib'));

});

gulp.task('minify', function(){

    gulp.src('public/assets/js/main.js')
        .pipe(uglify())
        .pipe(rename({ basename: 'main.min' }))
        .pipe(gulp.dest('public/assets/js'))

    return gulp.src(['public/lib/bootstrap.js', 'public/lib/jquery.js', 'public/lib/mediaCheck.js'])
        .pipe(uglify())
        .pipe(rename(function(path){ path.basename += '.min' }))
        .pipe(gulp.dest('public/lib'));

});