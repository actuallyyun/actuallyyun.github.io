---
title: 'Five ways to declare a function in JavaScript'
last_update: 
    date: 07/09/2023
    author: Yun Ji
---
JavaScript treats functions as first-class objects, meaning you could use functions as objects:
assign them to variables, pass them to functions,return them from funvtions, assgin them to objects...

There are five ways to declare a JavaScripy function:

### 1. Use named function
```
function greet(name){
    return 'Hello'+name
}
```

### 2. Assign function to a variable(function expression)
```
const greet2= function(name){
    return 'Hello'+name
}
```

### 3. Use arrow function expression
```
const greet3=(name)=>{
    return 'Hello'+name
}
```

### 4.Use shorthand arrow function 
```
const greet4=(name)=>'Hello'+name
```

JS people seem to be obessed with one line codes, and shorthand arror function is a good way to do it.

### 5.Use function constructer

```
const greet5=new Function('name,'return "hello"+name)
```

This is an perfect example that function is treated as an object in JS. Though I don't remember seeing this syntax in real code.

Apparently this is also an unsafe way to declare a function in the eyes of TypeScript, so don't use it.

