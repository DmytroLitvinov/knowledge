# My file system


This my first experience with MacOS so I am trying to find the best suitable for me organization of files.
It is not ideal and not final.

My Desktop is nearly always empty. It acts as a kind of `temp` folder where every file that is put 
there needs to be acted upon and either moved to some other place in my system or deleted. I already had a problem when
there were a lot of files in my Desktop. They were used "for later", but that "later" never come.

## ~/Documents

All my actual documents (books, papers..) are put there. The folder is not synced with iCloud as for now.

## ~/Downloads

I try to keep this folder like `Desktop` always empty. This is the folder where I download things to from the browser as well as other places.

## ~/Developer

Everything that is code is put into this folder.

```Bash
~/Developer ❯ exa
Code  docker  Projects
```

`Code` - snippets of code live here.
`docker` - used for volume mostly.
`Projects` - personal and work projects.

## ~/src/Projects

```bash
~/Developer/Projects ❯ exa
Archived  Current
```

Current folder ~/src/Projects/Current  is symlinked to ~/ as ~/Projects