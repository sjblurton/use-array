# useArray

useArray to work with arrays in useState and updating to the DOM.

To init it defaults to an empty array, or takes an array as an input, and returns a selection of helper functions.

### **install**

```bash
npm i @sjblurton/use-array

yarn add @sjblurton/use-array
```

### Import useArray

```bash
import useArray from "@sjblurton/use-array";
```

### **To call the hook...**

```bash
const { array, set, clear, filter, push, remove, update, reverse, sort } = useArray([1, 2, 3, 4, 5, 6, 7,])
```

### **set**

sets the array to a new value.

```bash
set([4,3,2,1])
```

### **clear**

clears the array to an empty array

```bash
clear()
```

### **filter**

array filter function. add the callback function to filter.

```bash
filter(n => n < 4)
```

### **push**

add a new element to the end of the array.

```bash
push('hello world')
```

### **remove**

remove the element at the given index.

```bash
remove(2)
```

### **update**

update the element in the array of the given index.

```bash
update(2, 'fo')
```

### **reverse**

reverses the array

```bash
reverse()
```

### **sort**

sorts the array. Takes a function or undefined

```bash
sort()
```

```bash
sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
```
