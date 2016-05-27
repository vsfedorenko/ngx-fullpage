// We need this here since there is a problem with Zone.js typings
interface Thenable<T> {
    then<U>(
        onFulfilled?: (value: T) => U | Thenable<U>,
        onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(
        onFulfilled?: (value: T) => U | Thenable<U>,
        onRejected?: (error: any) => void): Thenable<U>;
    catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}
