// Karma configuration
// Generated on Thu Jul 12 2018 09:23:27 GMT+0800 (GMT+08:00)

let webpackConfig = require('./config/webpack.base.conf');
module.exports = function(config) {
    config.set({
        webpack: webpackConfig,
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/unit/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            'test/unit/**/*.spec.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}