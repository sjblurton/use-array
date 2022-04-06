import useArray from '../src';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useArray testing', () => {
  it('should init an array with a default empty array.', () => {
    const { result } = renderHook(() => useArray());
    expect(result.current.array).toHaveLength(0);
  });

  it('should init an array with a input default array.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    expect(result.current.array).toHaveLength(6);
  });

  it("should update position 2 in the array with 'hello'.", () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.update(1, 'hello');
    });
    expect(result.current.array[1]).toBe('hello');
  });

  it('should push an element to the array.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.push(1);
    });
    expect(result.current.array[result.current.array.length - 1]).toBe(1);
  });

  it('should clear the array to an empty one.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.clear();
    });
    expect(result.current.array.length).toBe(0);
  });

  it('should set the array to a new array.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.set([1, 2, 3]);
    });
    expect(result.current.array.length).toBe(3);
  });

  it('should filter the array to keep numbers under 4.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.filter(n => n < 4);
    });
    expect(result.current.array.length).toBe(3);
  });

  it('should remove an element at a selected index.', () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5, 6]));
    act(() => {
      result.current.remove(1);
    });
    expect(result.current.array[1]).not.toBe(2);
  });
});
