export const isFn = (value) => typeof value === 'function';
export const isArray = (value) => Array.isArray(value);
export const isString = (value) => typeof value === 'string';
export const isObject = (value) => value === Object(value);
