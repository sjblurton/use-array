import { useState } from 'react';

function useArray<T>(
  defaultValue: T[]
): {
  array: T[];
  push: (value: T) => void;
  filter: (callback: (arg: T) => void) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
  set: (array: T[]) => void;
  reverse: () => void;
  sort: (compareFn?: ((a: T, b: T) => number) | undefined) => void;
} {
  const [array, setArray] = useState(defaultValue);

  const push = (value: T) => setArray(a => [...a, value]);

  const filter = (callback: (arg: T) => void) =>
    setArray(a => a.filter(callback));

  const update = (index: number, newElement: T) =>
    setArray(a => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);

  const remove = (index: number) =>
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1)]);

  const clear = () => setArray([]);

  const set = (array: T[]) => setArray(array);

  const reverse = () => setArray(array => array.reverse());

  const sort = (compareFn?: ((a: T, b: T) => number) | undefined) =>
    setArray(a => a.sort(compareFn));

  return { array, push, filter, update, remove, clear, set, reverse, sort };
}

export default useArray;
