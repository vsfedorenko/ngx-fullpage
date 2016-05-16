/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

export default {
    all: {
        sources: {
            extensions: [
                '', '.ts', '.js'
            ],
            entries: {
                directories: {
                    src: 'components',
                    demo: 'demo'
                },
                list: {
                    'ng2-fullpage': './index.ts',
                    'polyfills': './<%= all.sources.entries.directories.src %>/polyfills.ts',
                    'vendor': './<%= all.sources.entries.directories.src %>/vendor.ts',
                    'samples.basic': './<%= all.sources.entries.directories.demo %>/app/main.ts'
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
            },
            alias: {
                '@fullpage': './components'
            }
        },
        dist: {
            directory: 'build',
            scripts: {
                directory: '<%= all.dist.directory %>'
            }
        }
    },
    dev: {
        dist: {
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
        dist: {
            bundles: {
                filename: '[name].[chunkhash].bundle.js',
                sourceMap: {
                    filename: '[name].[chunkhash].bundle.map'
                },
                chunk: {
                    filename: '[id].[chunkhash].chunk.js'
                }
            }
        }
    },
    test: {
        directory: 'test',
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
