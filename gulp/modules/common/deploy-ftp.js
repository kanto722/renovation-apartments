const gulp = require('gulp');
const gutil = require('gutil');
const ftp = require('vinyl-ftp');
const paths = require('../assets/paths');

require('dotenv').config();

const user = process.env.FTP_USER;
const password = process.env.FTP_PASSWORD;
const host = process.env.FTP_HOST;

const localFiles = [paths.deployFiles];

function getFtpConnection() {
  return ftp.create({
    host: host,
    port: 21,
    user: user,
    password: password,
    log: gutil.log,
  });
}
const remoteLocation = '/public_html';
const globs = [
  './dist/fonts/**/*',
  './dist/images/**/*',
  './dist/css/**/*',
  './dist/js/**/*',
  './dist/libs/**/*',
  './dist/*.html',
  './dist/*.php',
  './dist/.htaccess',
];
const deploy = function () {
  const conn = getFtpConnection();
  return (
    gulp
      .src(globs, { base: './dist' })
      // .pipe(conn.newer(remoteLocation))
      .pipe(conn.dest(remoteLocation))
  );
};

module.exports = deploy;
