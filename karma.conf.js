module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['chrome'],
        singleRun: true
    });
};
