const reducer =
  (prev: Record<any, any>, [key, value]: [string, any]) =>
  (keys: string[], include = true) => {
    if (include ? keys.includes(key) : !keys.includes(key)) {
      prev[key] = value;
    }
    return prev;
  };

/**
 * Takes an Object and returns a new Object which excludes the given keys
 */
export const omit = <T, K extends keyof T>(
  original: T,
  ...keys: K[]
): Omit<T, K> =>
  Object.entries(original).reduce<Record<any, any>>(
    (prev, prop) => reducer(prev, prop)(keys as string[], false),
    {}
  ) as Omit<T, K>;

/**
 * Takes an Object and returns a new Object which only includes the given keys
 */
export const pick = <T, K extends keyof T>(
  original: T,
  ...keys: K[]
): Pick<T, K> =>
  Object.entries(original).reduce<Record<any, any>>(
    (prev, prop) => reducer(prev, prop)(keys as string[], true),
    {}
  ) as Pick<T, K>;

/**
 * Takes an Object and returns a tuple containing the original Object, a new Object containing only the given keys, and a new Object
 * containing the remaining keys
 */
export const split = <T, K extends keyof T>(original: T, ...keys: K[]) => ({
  original,
  extracted: pick(original, ...keys),
  excluded: omit(original, ...keys)
});
