// 引入 gulp 模块
const gulp = require('gulp');
// 引入 html 文件压缩插件
const htmlmin = require('gulp-htmlmin');
// 引入 html 公共文件导出插件
const fileinclude = require('gulp-file-include');
// 引入 less 语法转换插件
const less = require('gulp-less');
// 引入 js es6语法转换插件
const babel = require('gulp-babel');
// 引入 css 文件压缩插件
const csso = require('gulp-csso');
// 引入 js 压缩插件
var uglify = require('gulp-uglify');

// 使用 gulp.task() 方法建立任务
// 1.任务的名称
// 2.任务的回调函数
gulp.task('first', () => {
    console.log('执行gulp任务');
    // 获取要处理的文件
    gulp.src('./src/css/base.css')
        // 将处理后的文件输出到 dist 目录
        .pipe(gulp.dest('./dist/css'));
});

// html 任务
// 1.html文件中代码的压缩操作
// 2.抽取html文件中的公共代码
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        // 抽取公共代码
        .pipe(fileinclude())
        // 压缩 html 文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

// css 任务
// 1.less 语法转换
// 2.css 代码压缩
gulp.task('cssmin', () => {
    // less 语法转换
    // 选择css目录下的所有less文件以及css文件
    gulp.src('./src/css/*.less', './src/css/*.css')
        // 将less语法转换为css语法
        .pipe(less())
        // 将css代码进行压缩
        .pipe(csso())
        // 将处理的结果进行输出
        .pipe(gulp.dest('dist/css'));
});

// js 任务
// 1.es6 代码转换
// 2.代码压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            // 它可以判断当前代码的运行环境 将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// 复制文件夹
gulp.task('copy', () => {

    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));

    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dest/lib'))

});

// 构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);