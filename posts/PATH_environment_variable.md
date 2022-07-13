Have you ever wondered, when you type a command in your CLI, for example,  `python`, it would run Python for you.

```
  ➜  ~ python

WARNING: Python 2.7 is not recommended. 
This version is included in macOS for compatibility with legacy software. 
Future versions of macOS will not include Python 2.7. 
Instead, it is recommended that you transition to using 'python3' from within Terminal.

Python 2.7.16 (default, Mar 25 2021, 03:11:28) 
[GCC 4.2.1 Compatible Apple LLVM 11.0.3 (clang-1103.0.29.20) (-macos10.15-objc- on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
In this case, I have the old version Python2. 
I always find it magical until one day I looked into the `PATH` environment variable and find it fascinating. Right what's
more fun than finding out how magic works?

### What is `PATH`?
In you CLI, type `echo $PATH`(tell CLI to show you the value of the PATH variable), you should see something like this:

```
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

```
What does this mean? This is a list of colon `:` seperated directories, including `/usr/local/bin`,`/usr/bin`, `/bin`,...
When you type in a command like `python`, CLI would go down this list, and look into each directory to find executable files
that match the name `python`. Once it finds a match, it would execute the program, and wuolah, you have python shell running.

### Wait, but where is my Python3?
As I mentioned earlier, CLI found me the old version. To figure out what's going on, I typed `which python` and get this:
`/usr/bin/python`. So this version locates at `/usr/bin` directory. The new version is actually named `python3`, and it's in 
`/Library/Frameworks/Python.framework/Versions/3.9/bin/python3` directory. With the `PATH` variable, instead of using the full
directory, such as `/usr/bin/python`, we could just use `python` and the program will find it for us. 

### OK but how to modify the `PATH` variable?

There are two kind of modifications, one is temporary, the other one is permenant, so to speak. 
To update it temporarily, which I would recommend if you are just familiarising yourself with it, it would only be valid during
your terminal session. 
You could update it like this:
```
export PATH=$PATH:/home/local/bin

```
Don't forget about the `$PATH:` because if you don't, you will overwrite the system directory and things would break. With this 
line, you would only adding a new directory to the `PATH` instead of overwriting the existing one.

To update it permenantly, you would have to go to the `~/.bashrc` or `~/.zshrc` file, and put the line `export PATH=$PATH:/home/local/bin`
there. 

Well I hope you find it interesting as I did, let me know if you have any questions. 
