const gulp = require('gulp');
const shell = require('gulp-shell');
const { resolve } = require('path');

gulp.task('clone', (() => {

  return shell.task(['cp -r <%=f%> <%=t%>'], {
    templateData: {
      f: resolve(__dirname, `./templates/${gulp.env.tar}`),
      t: resolve(__dirname, `./src/${gulp.env.name}`)
    }
  })
})());

gulp.task('new', (() => {
  console.log(gulp.env._[0]);

  return shell.task([
      'cd ./src & mkdir <%=dir%>'
    ], {
    templateData: {
      dir: gulp.env.name
    }
  })
})()) 