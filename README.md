# Personal Website https://ugurdiktas.ch

Welcome to the personal_website_ugurdiktas.ch README.md file! 

Below, you'll find procedures and tips to help you develop for ugurdiktas.ch

# NPM version & git repository

9.8.1
https://github.com/Ugur-Diktas/Personal-Website

# update the productive website

Update the productive instance by:

- being sure the main branch is up to date and stable
- ssh to the Hostpoint server with the local terminal
- $ cd www/ugurdiktas
- $ git pull git@github.com:Ugur-Diktas/Personal-Website.git main

Remember that any media files cannot be accessed through http(s) in the productive instance

# force-pull host repository

- git reset --hard origin/main
- git pull git@github.com:Ugur-Diktas/Personal-Website.git main
