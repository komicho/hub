#!/usr/bin/env bash

#COLOR
Color_Off='\033[0m'       # Text Reset
# Regular Colors
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan

echo -e "$Green Start: $1 $Color_Off"

echo -e "$Yellow build production ... $Color_Off"
./vendor/bin/jigsaw build production
# Copy
echo -e "$Yellow Copy files ... $Color_Off"
cp -R ./build_production/* ./komichoHub.github.io/
# commit studio
echo -e "$Yellow Commit studio ... $Color_Off"
git add .
git commit -m "$1"
git push -u origin master
# commit page
echo -e "$Yellow Commit page ... $Color_Off"
cd komichoHub.github.io
git add .
git commit -m "$1"
git push -u origin master