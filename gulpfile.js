const gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	reactEasy = require('gulp-react-easy');

gulp.task('default', ['js','w']);

gulp.task('w', () => {
	gulp.watch('./src/js/**/*', ['js']);
});

gulp.task('js', () => {
	return reactEasy({
		file: './src/js/app.jsx',
		degub: true
	})
	.to('app.js')
	.pipe(gulp.dest('./dist/js/'));
});