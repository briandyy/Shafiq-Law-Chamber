#!/bin/bash
echo "
-------------------------------------
Running Git Commands for SLC Project
-------------------------------------"

git status
git add *
git commit -m "Creating Website"
git push

echo "
-------------------
Command Completed!!
-------------------"

echo "
----------------------
Running Node Js Server
----------------------
"
npm start
exit 0
