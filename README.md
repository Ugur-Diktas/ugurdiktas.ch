# Personal Website https://ugurdiktas.ch

Welcome to the ugurdiktas.ch README.md file!

Below, you'll find procedures and tips to help you develop for ugurdiktas.ch

# NPM version

9.8.1

# git repository

https://github.com/Ugur-Diktas/ugurdiktas.ch

# update the productive website

Update the productive instance by:

-   be sure the main branch is up to date and stable

-   npm run build on your project
-   create and merge pull request

-   ssh to the Hostpoint server with the local terminal
-   $ cd www/ugurdiktas
-   $ git pull git@github.com:Ugur-Diktas/ugurdiktas.ch.git main

Remember that any media files cannot be accessed through http(s) in the productive instance

# force-pull host repository

-   git reset --hard origin/main
-   git pull git@github.com:Ugur-Diktas/ugurdiktas.ch.git main

# linting and formatting

The code is automatically linted in real time.
To format it, you'll have to run [$ npx prettier . --write]
