export type Procedure = (...args: any[]) => void;

type Debounced<F> = (
  this: ThisParameterType<F>,
  ...args: Parameters<Procedure>
) => void;

export interface Options {
  isImmediate: boolean;
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  }
): Debounced<F> & { clear(): void } {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  function debounced(
    this: ThisParameterType<F>,
    ...args: Parameters<Procedure>
  ): void {
    const doLater = (): void => {
      // eslint-disable-next-line no-undefined
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(this, args);
      }
    };

    // eslint-disable-next-line no-undefined
    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    // eslint-disable-next-line no-undefined
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  }

  debounced.clear = (): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debounced;
}
