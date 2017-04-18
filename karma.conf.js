// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (karmaConf) {
    const configuration = {
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            {pattern: './sources/test.ts', watched: false}
        ],
        preprocessors: {
            './sources/test.ts': ['@angular/cli']
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        angularCli: {
            environment: 'dev'
        },
        reporters: karmaConf.angularCli && karmaConf.angularCli.codeCoverage
            ? ['progress', 'coverage-istanbul']
            : ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: karmaConf.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_Travis_CI: {
                base: 'Chrome', flags: ['--no-sandbox']
            }
        },
        singleRun: false
    };

    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_Travis_CI'];
    }

    karmaConf.set(configuration);
};
