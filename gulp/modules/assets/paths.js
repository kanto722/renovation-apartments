const { distPath, srcPath } = {
  distPath: 'dist/',
  srcPath: 'src/'
};
module.exports = {
  distPath,
  srcPath,
  clean: distPath,
  deployFiles: distPath + '**/*',
  manifest: {
    css: distPath + 'manifests/css',
    js: distPath + 'manifests/js'
  },
  rev: {
    html: distPath + '*.html',
    css: distPath + 'css/*.css',
    js: distPath + 'js/*.js',
    manifest: distPath + 'manifests/**/*.json'
  },
  images: {
    src: srcPath + 'images/**/*.{jpg,png,svg}',
    dist: distPath + 'images',
    svg: srcPath + 'images/svg/**/*.svg',
    png: srcPath + 'images/**/*.png',
    jpeg: srcPath + 'images/**/*.{jpg,jpeg}',
    webp: distPath + 'images/webp'
  },
  dist: {
    html: distPath,
    css: distPath + 'css',
    js: distPath + 'js',
    images: distPath + 'images',
    manifest: distPath + 'manifests',
    assets: distPath + 'assets'
  },
  dev: {
    pug: srcPath + 'pug/*.pug',
    hbs: srcPath + 'handlebars/**/*.hbs',
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/*.js',
    ignores: [srcPath + 'images/favicon/**/*', srcPath + 'images/**/*.{svg,ico}'],
    assets: srcPath + 'assets/**/*',
    images: srcPath + 'images/**/*',
    scssDist: srcPath + 'scss'
  },
  watch: {
    pug: srcPath + 'pug/**/*.pug',
    hbs: srcPath + 'handlebars/**/*.hbs',
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/**/*.js',
    fonts: srcPath + 'fonts/**/*.{eot,ttf,woff,woff2,svg}',
    images: srcPath + 'images/**/*.{jpg,png,svg}',
    assets: srcPath + 'assets/**/*'
  }
};
