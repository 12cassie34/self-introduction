#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/12cassie34/self-introduction.git master:gh-pages

cd -