/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

export default {
    common: {
        sources: {
            directory: '.',
            extensions: ['', '.ts', '.js', '.json'],
            entries: {
                directories: {
                    src: './components',
                    demo: './demo'
                },
                list: {
                    'ng2-fullpage': './index.ts',
                    'polyfills': '<%= common.sources.entries.directories.src %>/polyfills.browser.ts',
                    'vendor': '<%= common.sources.entries.directories.src %>/vendor.browser.ts',
                    'demo': '<%= common.sources.entries.directories.demo %>/app/main.browser.ts'
                },
                chunks: {
                    commons: {
                        list: ['vendor', 'polyfills']
                    }
                }
            },
            modules: {
                directories: [
                    'node_modules'
                ]
            }
        },
        build: {
            directory: './build',
            scripts: {
                directory: '<%= common.build.directory %>/bundles'
            },
            html: {
                src: '<%= common.sources.entries.directories.demo %>/index.html',
                dist: '<%= common.build.directory %>/index.html'
            }
        }
    },
    dev: {
        build: {
            bundles: {
                filename: '[name].bundle.js',
                sourceMap: {
                    filename: '[name].bundle.map'
                },
                chunk: {
                    filename: '[id].chunk.js'
                }
            }
        }
    },
    prod: {
        build: {
            bundles: {
                filename: '[name].bundle.min.js',
                sourceMap: {
                    filename: '[name].bundle.min.map'
                },
                chunk: {
                    filename: '[id].chunk.min.js'
                }
            }
        }
    },
    test: {
        directory: './test',
        spec: {
            bundle: {
                filename: '<%= test.directory %>/spec.bundle.js'
            }
        },
        e2e: {
            url: 'localhost:3000',
            directory: '<%= test.directory %>/e2e'
        },
        reports: {
            directory: 'build/reports',
            coverage: {
                directory: '<%= test.reports.directory %>/coverage'
            }
        }
    }
}
