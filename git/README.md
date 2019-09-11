# INITIALIZE NEW REPO

### navigate to your project
Use terminal to cd into your project directory on your computer, wherever it is. It could be on your desktop, documents or wherever you created it. Mine is on desktop inside a folder called greeting.
`cd ~/Desktop/greeting`


### initialize the directory as a git repo
First thing we do is make sure our project is a git project by doing this:
`git init`

### connect your project to a git repo
Once your local directory is initialized as a git repo, you have to connect it to github. Make sure you change the URL below to your repo's URL.
`git remote add origin https://github.com/ColorCode/web-fundamentals-sept-2019.git`

### add all your files
Add your files to the git project. The `.` will add _all_ the files.
`git add .`

### or add one file
Or you can add one specific file by naming it instead of `.`. 
`git add NAME_OF_FILE`

### commit your changes
Commit all your changes and add a message to them like below.
`git commit -m "PUT MESSAGE HERE"`

### push it to git (first time only)
And finally you push it to git. The first time you do that you have to make sure you write this longer command.
`git push -u origin master`

### push to git (every time after that)
Every time after that you can just do `git push`. You still need to `add` and `commit` though.
`git push`


# CHANGE THE URL OF YOUR REPO
Let's say you want to change the github project that your local files are connected to. You can reset the URL by running this command.
`git remote set-url origin https://github.com/sinjaz/greeting`

# LOG IN WITH A DIFFERENT GIT ACCOUNT
If you have multiple git accounts and you find out you are logged into terminal using the wrong one you can run this command and login with your other account. Let's say I was logged in using `ColorCode` but I wanted to use my personal account `sinjaz`. I will do the following:
`git config credential.username "sinjaz"`







