const gulp = require('gulp');
const paths = require('../assets/paths');
const rev = require('gulp-rev');

const updateRef = (revPath, destPath, manifestPath) => {
  return gulp
    .src([revPath])
    .pipe(rev())
    .pipe(gulp.dest(destPath))
    .pipe(rev.manifest())
    .pipe(gulp.dest(manifestPath));
};

const updateRefCss = () => {
  return updateRef(paths.rev.css, paths.dist.css, paths.manifest.css);
};

const updateRefJs = () => {
  return updateRef(paths.rev.js, paths.dist.js, paths.manifest.js);
};

module.exports = { updateRefCss, updateRefJs };
