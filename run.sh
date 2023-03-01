#!/bin/bash

echo "
--------------------------------------------------------------------------
            Project Name: Shafiq Law Chamber
            Author: Abdul Rafay
            GitHub Repo: https://github.com/1-Power/SLC
            Website URL: https://slc.law
            Operating System: Arch Linux
------------------------------------------------------------------------
"

# This function will check status && will add all of the files
function git_status()
{
git status
git add * 
}

function git_commit()
{
  echo "
  ----------------------------------------
  Enter your Commit Message:
  ----------------------------------------
  "
  read message
  git commit -m "$message"
}
# This is the Push function
function git_push()
{
  git push
}

function main()
{
  branch="git branch --show-current"
 
  if [[ $branch == "main" ]];then
  echo "
  ---------------------------------------
  You are on the main Branch
  So Code is commited to the main branch
  --------------------------------------"
  git pull
  
  else
    echo "
    -----------------------------
    You are on $branch
    -----------------------------"
    git_status
    git_commit
    git_push
  fi 
}
#This is the running Point
main

