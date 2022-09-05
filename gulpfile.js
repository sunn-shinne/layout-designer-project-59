const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const svgSprite = require('gulp-svg-sprite');

const compileSass = () => src('src/app/scss/**/*.scss')
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(concat('style.css'))
  .pipe(dest('src/build'));

const compilePug = () => src('src/app/pug/**/*.pug')
  .pipe(pug())
  .pipe(concat('index.html'))
  .pipe(dest('src/build'));

const compileSvg = () => src('src/app/assets/**/*.svg')
  .pipe(svgSprite())
  .pipe(dest('src/build/assets'));

const watchers = () => {
  watch('app/scss', compileSass);
  watch('app/pug', compilePug);
  watch('app/assets', compileSvg);
};

exports.default = watchers;
exports.watchers = watchers;
exports.build = parallel(compileSass, compilePug, compileSvg);