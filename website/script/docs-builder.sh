#!/bin/sh

if [ -d "./docs" ]
then
  rm -fr ./docs
fi

git clone https://gitee.com/openeuler/docs

cd ./docs

fd=$(dirname $0)
pd=$(dirname "$fd") 

for r in $(git branch -r --list "origin/stable-*")
do
  b=${r##*origin/stable-}
  git checkout -b $b $r
  
  mkdir -p ../content/zh/docs/$b
  cp -r ./content/zh/* ../content/zh/docs/$b/ 
 
  mkdir -p ../content/en/docs/$b
  cp -r ./content/en/* ../content/en/docs/$b/

  cd ..

  #sed -e "s/{{version}}/$b/g" $fd/menu.temp >> $pd/config.toml 

  cd ./docs
  
done

cd ..
rm -fr ./docs
