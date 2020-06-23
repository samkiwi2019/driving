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
                '_a': resolve('resources/js/api'),
                '_c': resolve('resources/js/components'),
                '_v': resolve('resources/js/views'),
            }
        }
    })
    .js('resources/js/app.js', 'public/js').vuetify('vuetify-loader');
