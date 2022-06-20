const gulp = require('gulp');
const { watch, series } = gulp;
const pugHtml = require('../html/pugHtml');

const browserSync = require('browser-sync');
const ngrok = require('ngrok');
const chalk = require('chalk');
const opn = require('opn');
// *utils
const paths = require('../assets/paths');
// *tasks
const { styleDev } = require('../styles/sass');
const { scriptDev } = require('../js/scripts');
const { webp, copyImages, clearImages } = require('../images/images');
const copyFiles = require('../assets/files');

// *options
const options = {
  server: paths.distPath,
  notify: false,
  open: true,
  cors: true,
  port: 4000,
  stream: true,
  injectChanges: false,
};
// imagesTask
const imagesDev = series(clearImages, copyImages, webp);

const gulpWatch = (browserSync) => {
  // files
  watch(paths.dev.assets, copyFiles).on('change', browserSync.reload);
  // images
  watch(paths.watch.images, imagesDev).on('change', browserSync.reload);
  // scss
  watch(paths.watch.scss, styleDev);
  // js
  watch(paths.watch.js, scriptDev);
  // pug
  watch(paths.watch.pug, pugHtml);
  // html
  watch(paths.dist.html + '*.html').on('change', browserSync.reload);
};

const serve = (cb) => {
  browserSync(options);

  gulpWatch(browserSync);

  return cb();
};

const serveNgrok = async (cb) => {
  const url = await ngrok.connect(options.port);

  browserSync({ ...options, open: false }, async (err, bs) => {
    if (err) throw new Error(err);
    console.log(`------>\t${chalk.cyan(url)}`);
    opn(url);
  });

  gulpWatch(browserSync);

  return cb();
};

module.exports = { serve, serveNgrok };
