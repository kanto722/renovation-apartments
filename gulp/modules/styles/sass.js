const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cached = require('gulp-cached');
const dependents = require('gulp-dependents');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const paths = require('../assets/paths');
const scss = require('postcss-scss');
const stripInlineComments = require('postcss-strip-inline-comments');
const gulpStylelint = require('gulp-stylelint');
const { dest } = require('gulp');
const stylelintConfig = require('../../../stylelint.config');

const plugins = [
  autoprefixer({
    overrideBrowserslist: ['last 10 version']
  }),
  stripInlineComments
];

const styleDev = () => {
  return gulp
    .src(paths.dev.scss)
    .pipe(plumber())
    .pipe(cached('scss'))
    .pipe(dependents())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
};

const styleProd = () => {
  return gulp
    .src(paths.dev.scss)
    .pipe(gulpStylelint(stylelintConfig))
    .pipe(dest(paths.dev.scssDist))
    .pipe(
      postcss(plugins, {
        parser: scss
      })
    )
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: '*'
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest(paths.dist.css));
};

module.exports = { styleDev, styleProd };
