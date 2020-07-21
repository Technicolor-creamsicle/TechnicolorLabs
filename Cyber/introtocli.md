#  Introduction to the Command Line and Filesystem

## The Linux Filesystem

If thought of like a tree there is a "Root" Directory denoted at `/`. Then after the root it begins to branch out into directorys or more commonly known as folders. On the branches there are more branches but also leaves which would be individual files.

Every directory and file name is CaSe SeNsItIvE.

===

## Everything is a file

So, remember how I said that there are a difference between directories and files? Well directorys are also considered files because in linux everything is still a file, but the file "tree" still is there with its different levels.

Common examples of what directories there are and what type of files are found in them.

* Devices => `/dev/`
* Processes => `/proc/`
* Most user owned files => `/home/` (or) `/users/`
* Programs needed for basic operation => `/bin/`
* Adminsitrative programs => `/sbin/`
* Configutations => `/etc/` (came from word etcetera)

===

## Now its time to open a terminal!

1. Click the ubuntu button in the top left corner
1. Type `terminal`
1. Hit `enter` or click the icon labled `Terminal`

If you are on a virtual machine hosted on your own computer or have a computer running ubuntu you can use the shortcut `cthl + alt + T` to open a termianl.

===

## What can you do with the Terminal?

* You can do anything you can do anything you can do in a Graphical applicatiom
* Deep dive into the systems logs in real time, running a debugger (gdb is the most common), or run graphical programs in debug mode.
* If you cant find a specific package in apt? You can build it yourself if the source code is publically published on github(lab).
* Have more granular control of your computer and everything it does with little to no protections

===

## Basic Navigation in the Terminal

### pwd

`pwd` stands for "Present Working Directory". It prints the current directory. In my personal experiance it is bearly used due to the current working directory being shown on the cursor of the terminal.

### ls

`ls` stands for "List Segments" if it is run with no options will list all non hidden files or directorys inside of the working directory. If you put a directory after the command it will run in that directory.

### cd

`cd` stands for "change directory". Most of the time you will be running cd with a directoy as an option to brings you to the directory listed. Both cd and ls can accept both reletive file paths or absolute paths.

### Paths

Absolute paths start from the root directory `/` an example `/home/cyberpatriot/Music`

Relative paths start from the current working directory `./` and example `./Music`. Reletive paths can also have two dots to signal the directory above `../John/`.

===

## Basic Navigation hands on if possible

This basic list of commands will give you a bit of a taste of the behavior of these commands do. (The text after the pound sign `#` are comments that tell you what each command will be doing.)

```sh
cd #Change directory to home ~
pwd #Prints the current directory
ls #Prints whats inside the current directory
cd ./Music #Changes directory to ~/Music
pwd #Prints the current directory
ls #Prints whats inside the current directory
cd ../Documents #Changes the directory to ~/Documents
pwd #Prints the Current Working directory
cd #Change directory to home ~
pwd #Prints the Current Working directory
```

===

## Manuals and Command usage

The `man` command is a vital tool when learning linux systems. These contain manuals that are published with most commands used. This documentation shows every option that there is to configure about a command.

Try running `man man` now to take a look at the manual for man. To quit out of the manual hit `Q`.

Most commands also have a `-h` or `--help` command which give a brief explaination of what options exist and if the option requires any arguments (other inputs).

Try running `ls --help` now to take a look at the help summary for `ls`

Think about what the `-1` option will do on ls then try it yourself.

===

## File Manipulation Commands

### cp

`cp` stands for "CoPy". This copies a file or directory to a new location. It can copy from many sources and into one destination by listing multiple sources before the destination.

### mv

`mv` stands for "MoVe". This is used to move or rename a file or directory. Just like `cp` it can copy from many sources and into one destination by listing multiple sources before the destination.

### touch

`touch` touchs (open and immediatly close it) a file and can create empty files if the file name specified does not exist.

### rm

`rm` stands for "ReMove". This command removes a file (or directory with the right options). `rm` can remove multiple files or directories at the same time by having multiple paths after `rm`

===

## Basic file manipulation practical

This basic list of commands will give you a bit of a taste of the behavior of these commands do. (The text after the pound sign `#` are comments that tell you what each command will be doing.)

```sh
cd #Changes directory to home
touch Documents/a #Creates the file a inside Documents
cp Documents/a b #Copys the file a to the file b
mv b c #Moves file b into file b
ls ./Documents #Prints the files inside the Documents directory
rm c ./Documents/a #Removes the files c and and a from the 
ls ./Documents #Prints the files inside the Documents directory
```

## File Contents and Output Redirection

In linux there is the ability to redirect the output of a command to be sent to a file via the file redirection

```sh
cd #Changes your directory to your home directory
echo "Hello" > hello #Prints hello to the file hello
echo "World!" > world #Prints world to the file world
ls #Prints the files inside the Documents directory
cat hello world > helloworld #Prints the two files hello and world to the file helloworld
ls #Prints the files inside the Documents directory
cat helloworld #Prints the file to the terminal
file helloworld #Prints the file type of the file helloworld
file Music/4.mp3 #Prints the file type of the file 4.mp3
rm hello world helloworld #Removes the files created during the lesson
```
===

## File editing

### gedit
 
gedit is the easiest text editor on ubuntu. It is a grapical program and allows you to edit text files. To open a file type `gedit` then the file name.

Try running `gedit Documents/napier.txt` now to take a look at the file `napier.txt`. You can exit by hitting the red x in the left corner.

### nano
 
nano is the easiest terminal text editor on ubuntu. It is a text only program and allows you to edit text files. To open a file type `nano` then the file name.

Try running `nano Documents/napier.txt` now to take a look at the file `napier.txt`. You can exit by hitting `ctrl + x` and following th prompts.

### vi(m)
 
vi or vim is the definitely the hardest terminal text editor to master. It is a text only program and allows you to edit text files. To open a file type `vim` then the file name.

Try running `vim Documents/napier.txt` now to take a look at the file `napier.txt`. You can exit by typing `:w` then and hitting enter to save changes then typing `:q` and hitting enter to quit.

vi(m) also requires a keyboard command to enter into "Insert" mode on vi(m) this allows you to type text into the file and acts like nano. If you do not know where you are in vim you can hit the escape key to return to vims native state.

Some common shortcuts:

* `u`ndo
* `r`eplace a single charecter

If you want to learn vim more during some free time you can run `vimtutor` into your terminal.

===
