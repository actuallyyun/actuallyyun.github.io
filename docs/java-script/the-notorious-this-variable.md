---
title: 'What the f**k is this in JavaScript?'
last_update: 
    date: 07/09/2023
    author: Yun Ji
---

Do you know that `this` is defined for every function in JS?

And, the value of `this` changes depending on the way you call a function, not the way you declare it.

```
const cat = {
  name: 'Nancy',
  getName() {
    return this.name
  }
}

console.log(cat.getName()) // Nancy

//this: { name: 'Nancy', trick: [Function: trick] }

const getName = cat.getName

console.log(getName())
// undefinied

// this: Object [global] 
```

We have a `cat` object/function with the property `name` of Nancy, and a function to get the name. 
Whhen we call `cat.getName()`, `this` is evaluated as the object as declared and `getName()` returns desired result.

However, if we assign `getName` to a function and call it, it returns `undefinied`, and `this` is evaluated as `Object [global] `.

The point it, `this` is not consistent and reliable in JS, so be careful when you use it in your function.



