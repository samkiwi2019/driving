const mix = require('laravel-mix')
require('vuetifyjs-mix-extension')
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);


mix
    .webpackConfig({
        output: {
            chunkFilename: mix.inProduction() ? 'js/[name].[contenthash].js' : 'js/[name].js',
        },
        resolve: {
            alias: {
                '_a': resolve('resources/js/axios')// 这样配置后 @ 可以指向 src 目录
            }
        }
    })
    .js('resources/js/app.js', 'public/js').vuetify('vuetify-loader');
