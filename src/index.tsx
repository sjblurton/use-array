import { useState } from 'react';

const useArray = (defaultValue?: any[]) => {
  const [array, setArray] = useState(defaultValue || []);

  const push = (value: any) => {
    setArray(a => [...a, value]);
  };

  const filter = (callback: (arg: any) => void) => {
    setArray(a => a.filter(callback));
  };

  const update = (index: number, newElement: any) => {
    setArray(a => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  };

  const remove = (index: number) => {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  const set = (array: any[]) => {
    setArray(array);
  };

  return { array, push, filter, update, remove, clear, set };
};

export default useArray;
