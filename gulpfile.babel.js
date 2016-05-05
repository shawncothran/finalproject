const gulp = require('gulp'); // Base gulp package
const del = require('del'); // Delete specified files & folders
const eslint = require('gulp-eslint'); // Lint Javascript
const browserify = require('browserify'); // Provide 'require' support, CommonJS
const watchify = require('watchify'); // Watch for source changes
const babelify = require('babelify'); // Convert ES6 & JSX to ES5
const source = require('vinyl-source-stream'); // Vinyl stream support
const buffer = require('vinyl-buffer'); // Vinyl buffer support
const merge = require('utils-merge'); // Object merge tool
const uglify = require('gulp-uglify'); // Minify js output
const cleanCSS = require('gulp-clean-css'); // Minify css output
const sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
const notify = require('gulp-notify'); // Provide notifications to the console and Growl
const duration = require('gulp-duration'); // Time aspects of your gulp process
const sass = require('gulp-sass'); // Preprocess SCSS to CSS
const autoprefixer = require('gulp-autoprefixer'); // Postprocess CSS to include vendor prefixes
const gutil = require('gulp-util'); // Provide gulp utilities, including logging and beep
const chalk = require('chalk'); // Colorize gulp logging
const ghPages = require('gulp-gh-pages'); // Deploy to gh-pages

function mapError(err) {
  if (err.fileName) {
    gutil.log(`${
      chalk.red(err.name)}: ${
      chalk.yellow(err.fileName.replace(`${__dirname}/src/jsx/`, ''))}: Line ${
      chalk.magenta(err.lineNumber)} & Column ${chalk.magenta(err.columnNumber || err.column)}: ${
      chalk.blue(err.description)}`);
  } else {
    gutil.log(`${chalk.red(err.name)}: ${chalk.yellow(err.message)}`);
  }

  this.emit('end');
}

gulp.task('lint', () => {
  gulp.src('./src/**/*.jsx')
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('apply-prod-environment', () => {
  process.env.NODE_ENV = 'production';
});

gulp.task('clean', () => del.sync([
  './dist',
]));

gulp.task('sass', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-sass', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(cleanCSS({ compatibility: '' }))
    .pipe(gulp.dest('./dist'));
});

function bundle(bundler) {
  return bundler
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source('bundle.jsx')) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(sourcemaps.init({ loadMaps: true })) // Extract the inline sourcemaps from transforms
    .pipe(sourcemaps.write('.')) // Set folder for sourcemaps to output to
    .pipe(gulp.dest('./dist')) // Set the output folder for minified bundle
    .pipe(notify({ message: 'Generated file: <%= file.relative %>' })) // Output the file created
    .pipe(duration('Javascript bundle time')); // Output timing of the file creation
}

gulp.task('watchify', () => {
  const args = merge(watchify.args, { extensions: ['.js', '.jsx'], debug: true });
  const bundler = browserify('./src/jsx/index.jsx', args)
    .plugin(watchify, { ignoreWatch: ['**/node_modules/**', '**/bower_components/**'] })
    .transform(babelify, { presets: ['es2015', 'react'] });

  bundle(bundler);

  bundler.on('update', () => bundle(bundler));
});

gulp.task('browserify', () => {
  const bundler = browserify(
    './src/jsx/index.jsx',
    { extensions: ['.js', '.jsx'], debug: true }
  )
    .transform(babelify, { presets: ['es2015', 'react'] });

  return bundle(bundler);
});

gulp.task('browserify-production', () => {
  const bundler = browserify(
    './src/jsx/index.jsx',
    { extensions: ['.js', '.jsx'], debug: true }
  )
    .transform(babelify, { presets: ['es2015', 'react'] });

  return bundler.bundle()
    .on('error', mapError)
    .pipe(source('bundle.jsx'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.jsx'], ['lint']);
  gulp.watch(['./src/scss/*.scss'], ['sass']);
  gulp.watch(['./src/index.html'], ['copy']);
  gulp.watch(['./src/assets/**/*.*'], ['copy']);
});

gulp.task('copy', () => {
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/assets/'));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));

  gulp.src('./src/CNAME')
    .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', () => gulp.src('./dist/**/*')
    .pipe(ghPages())
);

gulp.task('default', [
  'watch',
  'lint',
  'watchify',
  'sass',
  'copy',
]);

gulp.task('production', [
  'apply-prod-environment',
  'clean',
  'browserify-production',
  'minify-sass',
  'copy',
]);
