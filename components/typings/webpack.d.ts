interface WebpackRequire {
    context(file: string, flag?: boolean, exp?: RegExp): any;
}

interface ErrorStackTraceLimit {
    stackTraceLimit: number;
}

// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
