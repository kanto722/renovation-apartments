const gulp = require('gulp');
const revCollector = require('gulp-rev-collector');

const paths = require('../assets/paths');

const rev = () => {
  return gulp
    .src([paths.rev.manifest, paths.rev.html])
    .pipe(
      revCollector({
        replaceReved: true,
      })
    )
    .pipe(gulp.dest(paths.dist.html));
};

module.exports = rev;
