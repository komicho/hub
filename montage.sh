#!/usr/bin/env bash

echo "Start: $1"

echo "build production ..."
./vendor/bin/jigsaw build production
# Copy
echo "Copy files ..."
cp -R ./build_production/* ./komichoHub.github.io/
# commit studio
echo "Commit studio ..."
git add .
git commit -m "$1"
git push -u origin master
# commit page
echo "Commit page ..."
cd komichoHub.github.io
git add .
git commit -m "$1"
git push -u origin master