import gulp from 'gulp';
import clean from 'gulp-clean';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import fs from 'fs';
import path from 'path';
import merge from 'merge-stream';
import importCss from 'gulp-import-css';

// Clean the dist folder
gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
});

// use encoding: false to prevent image corruption
gulp.task('images', function () {
  return gulp.src('images/**/*', { encoding: false })
    .pipe(gulp.dest('dist/images/'))
    .pipe(browserSync.stream()); 
});

gulp.task('css', function () {
  return gulp.src('css/bk-global.css')
    .pipe(importCss())
    .pipe(gulp.dest('dist/css')) // Destination folder
    .pipe(browserSync.stream()); // Stream changes to BrowserSync
});

function getEntryFiles(directory) {
  const entryFiles = [];

  // Recursively search for JavaScript files within each subdirectory
  function search(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        search(filePath); // Recursive call for subdirectories
      } else if (stats.isFile() && path.extname(file) === '.js') {
        entryFiles.push(filePath); // Add JavaScript files to the list
      }
    });
  }

  search(directory);
  return entryFiles;
}

gulp.task('js', function () {
  // Directory containing entry files and subdirectories
  const entryDirectory = 'js';

  // Get list of entry files dynamically from the directory and its subdirectories
  const entryFiles = getEntryFiles(entryDirectory);

  // Loop through each entry file and create a Browserify instance for it
  const tasks = entryFiles.map(entry => {
    if (entry.startsWith('js/build/')) {
      return browserify({
        entries: entry,
        debug: false // Enable source maps
      })
      .transform(babelify, {
        presets: ['@babel/preset-env']
      })
      .bundle()
      .pipe(source(path.relative(entryDirectory, entry))) // Specify the name of the output file
      .pipe(buffer())
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream()); // Stream changes to BrowserSync
    } else {
      return gulp.src(entry)
        .pipe(gulp.dest((file) => {
          // Use path.dirname to get only the directory portion of the path
          return path.join('dist/js/', path.dirname(path.relative(entryDirectory, file.path)));
        }))
        .pipe(browserSync.stream());
    }
  });

  // Return a merged stream of all tasks
  return merge(tasks);
});

// Task to replace references in HTML files with hashed versions
gulp.task('html', function () {
  return gulp.src('html/*.html')
    .pipe(gulp.dest('dist/html'))
    .pipe(browserSync.stream()); // Stream changes to BrowserSync
});

// Task to start BrowserSync server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist/html', // Serve HTML files from the dist/html directory
      routes: {
        '/images': 'dist/images', // Serve images from the dist/images directory
        '/css': 'dist/css', // Serve CSS from the dist/css directory
        '/js': 'dist/js'
      }
    }
  });

  // Watch for changes in files
  gulp.watch('css/*.css', gulp.series('css', reload)); // Watch CSS files
  gulp.watch('js/**/*.js', gulp.series('js', reload)); // Watch JS files
  gulp.watch('images/**/*', gulp.series('images', reload)); // Watch image files
  gulp.watch('html/*.html', gulp.series('html', reload)); // Watch HTML files
});

function reload(done) {
  browserSync.reload(); // Reload BrowserSync
  done();
}

// Task to run all tasks in sequence
gulp.task('build', gulp.series('clean', gulp.parallel('images', 'js', 'css'), 'html'));

// Default task
gulp.task('default', gulp.series('build', 'serve'));