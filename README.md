# useArray

useArray to work with arrays in useState and updating to the DOM.

To init it defaults to an empty array, or takes an array as an input, and returns a selection of helper functions.

### **install**

```bash
npm i @sjblurton/use-array

yarn add @sjblurton/use-array
```

### **To call the hook...**

```bash
const { array, set, clear, filter, push, remove, update } = useArray([1, 2, 3, 4, 5, 6, 7,])
```

### **set**

sets the array to a new value.

```bash
set([4,3,2,1])
```

### **clear**

clears the array to an empty array

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

## Commands

to see an example of it working, clone from the git repo and...

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

To run tests from the root directory...

```bash
npm test # or yarn test
```
