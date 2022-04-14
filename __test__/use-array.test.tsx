import useArray from '../src';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useArray testing', () => {
  describe('Numbers arrays', () => {
    const initArray = [1, 2, 3, 4, 5, 6];

    it('should init an array with a default empty array.', () => {
      const { result } = renderHook(() => useArray([]));
      expect(result.current.array).toHaveLength(0);
    });

    it('should init an array with a input default array.', () => {
      const { result } = renderHook(() => useArray(initArray));
      expect(result.current.array).toHaveLength(initArray.length);
    });

    it('should update position 2 in the array to 3.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.update(1, 3);
      });
      expect(result.current.array[1]).toBe(3);
    });

    it('should push an element to the array.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.push(7);
      });
      expect(result.current.array[result.current.array.length - 1]).toBe(7);
    });

    it('should clear the array to an empty one.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.clear();
      });
      expect(result.current.array.length).toBe(0);
    });

    it('should set the array to a new array.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.set([1, 2, 3]);
      });
      expect(result.current.array.length).toBe(3);
    });

    it('should filter the array to keep numbers under 4.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.filter(n => n < 4);
      });
      expect(result.current.array.length).toBe(3);
    });

    it('should remove an element at a selected index.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.remove(1);
      });
      expect(result.current.array[1]).not.toBe(2);
    });

    it('should reverse the array.', () => {
      const { result } = renderHook(() => useArray(initArray));
      act(() => {
        result.current.reverse();
      });
      expect(result.current.array[0]).toBe(6);
    });
  });

  describe('Array of objects test', () => {
    const people = [
      { name: 'foo', age: 20, email: 'foo@email.com' },
      { name: 'bar', age: 40, email: 'bar@email.com' },
      { name: 'dee', age: 30, email: 'dee@email.com' },
    ];

    it('should init with the array of objects.', () => {
      const { result } = renderHook(() => useArray(people));
      expect(result.current.array).toHaveLength(people.length);
    });

    it('should filter the people over 20.', () => {
      const { result } = renderHook(() => useArray(people));
      act(() => {
        result.current.filter(n => n.age > 20);
      });
      expect(result.current.array).toHaveLength(people.length - 1);
    });

    it('should sort by age.', () => {
      const { result } = renderHook(() => useArray(people));
      act(() => {
        result.current.sort((a, b) => a.age - b.age);
      });
      expect(result.current.array[0].age).toBe(20);
      expect(result.current.array[1].age).toBe(30);
      expect(result.current.array[2].age).toBe(40);
    });

    it('should sort by name.', () => {
      const { result } = renderHook(() => useArray(people));
      act(() => {
        result.current.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      });
      expect(result.current.array[0].name).toBe('bar');
      expect(result.current.array[1].name).toBe('dee');
      expect(result.current.array[2].name).toBe('foo');
    });

    it('should add a new person to the end of the array.', () => {
      const newPerson = { name: 'coo', age: 24, email: 'coo@email.com' };
      const { result } = renderHook(() => useArray(people));
      act(() => {
        result.current.push(newPerson);
      });
      expect(result.current.array[people.length].email).toBe('coo@email.com');
    });
  });
});
