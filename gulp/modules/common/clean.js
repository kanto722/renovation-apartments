const paths = require('../assets/paths');
const del = require('del');
const cached = require('gulp-cached');

module.exports = function cleanTask(done) {
  cached.caches = {};
  return del([paths.clean]).then(() => {
    done();
  });
}
