---
title: 'Argument vs. Parameter, what is the difference?'
last_update: 
    date: 07/09/2023
    author: Yun Ji
---
People (including me) often use them interchangeablly.

However, there is a difference between these two.

A parameter is a piece of data that a function needs to run. It is often declared while declaring a function.

For example,
```
const alwaysSunny=(day)=>{
    return `${day}'s weather is sunny!`
}
```

Here `day` is the parameter of the function `alwaysSunny`.

An arugument, on the other hand, is the piece of data you pass to a function when you call it. So it is the actual data.

`alwaysSunny('Wednesday')`

Here the string `Wednesday` is the argument.

In JavaScript and TypeScript, you could mark a parameter as Optional by using `?`.

Let's modify our `alwaysSunny` function:

```
const alwaysSunny=(day:string,location?:string)=>{
    
    return `${day}'s weather in ${location||'Barcelona'} is sunny!`
}
```

`location` is optional parameter, if not provided, the function will fall back to the default value 'Barcelona'.

:::caution
In TypeScript, optional parameter needs to be at the end of your parameter list.
:::