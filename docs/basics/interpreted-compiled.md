---
title: 'Interpreted vs. compiled programming languages- a shallow dive'
last_update: 
    date: 08/27/2023
    author: Yun Ji
---

Read the following quote from [the Python tutorial](https://docs.python.org/3/tutorial/appetite.html):

> Python is an interpreted language, which can save you considerable time during program development because no compilation and linking is necessary. 

If you are new like me, likely you are wondering, *what is an interpreted language*?

To answer this question, you need to understand how human-readable is code understood by machines. All code comes down to the CPU, and the CPU can only *understand*  machine code. Today most computers are binary computers; for those computers, machine code is the binary code, meaning "1"s and "0"s.

Compilers and interpreters are the translators that convert human readable code into machine-readable binary code. From the programmer's perspective, the difference lies in the result of the process. 

- A compiler converts the code to an executable program.
- An interpreter reads and execute the code line by line. No executable program is created.

Let's take Python as an example. You could execute `hello.py` file directly using `python hello.py` command. With Python interactive mode, you can type code line by line, and each line is immediately executed. Under the hood, an interpreter of the machine, such as Unix shells(`sh`,`csh`,`ksh`), reads and executes the code.

On the contrary, to execute Java code, first, you have to write `javac hello.java` to complie the source code to machine code. Usually the byte code has `.class` extension. To execute the code, you need to write `java hello.java` that internally invoke `hello.class`. 

However, the line between the two is blury. Modern languages, like Python and Java, use a combination of complier and interpreter. The reason Python is generally called *interpreted*  is because it doesn't have a compilation step as Java does, and it has an interactive mode. 

If you are curious, the following is a list of articles I encountered digging into this questions:

- [Is Python interpreted or compiled? Yes.](https://nedbatchelder.com/blog/201803/is_python_interpreted_or_compiled_yes.html)
- [Is Java a Compiled or an Interpreted programming language ?](https://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language)
- [Is Python interpreted, or compiled, or both?](https://stackoverflow.com/questions/6889747/is-python-interpreted-or-compiled-or-both)
- [Interpreted vs Compiled Programming Languages: What's the Difference?
](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)






