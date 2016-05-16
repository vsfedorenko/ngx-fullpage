import WebpackTest from './webpack.test.babel';

import Config from './helpers/config';

const SPEC_BUNDLE_PATH = Config('test.spec.bundle.filename');

export default config => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [{pattern: SPEC_BUNDLE_PATH, watched: false}],
        preprocessors: (() => {
            var result = {};
            result[SPEC_BUNDLE_PATH] = ['webpack', 'sourcemap'];
            return result;
        })(),
        webpack: WebpackTest,
        coverageReporter: {
            dir: Config('test.reports.coverage.directory'),
            reporters: [
                {type: 'text-summary', subdir: '../summary-report'},
                {type: 'json', subdir: '../json-report'},
                {type: 'html', subdir: '../html-report'},
                {type: 'lcov', subdir: '../lcov-report'}
            ]
        },
        webpackServer: {
            noInfo: true
        },
        logLevel: config.LOG_INFO,
        colors: true,
        reporters: ['progress', 'mocha', 'coverage'],
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
