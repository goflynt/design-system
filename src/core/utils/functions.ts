/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 * @param {function} functions to chain
 * @returns {function|null}
 */
export function createChainedFunction<T extends any[]>(...funcs: ((...args: T) => void)[]): (...args: T) => void {
    return funcs.reduce(
        (acc, func) => {
            if (func == null) {
                return acc;
            }

            return function chainedFunction(...args: T) {
                acc.apply(this, args);
                func.apply(this, args);
            };
        },
        () => {
            // RAF
        }
    );
}
