#!/bin/sh

if [ -d "./community" ]
then
  rm -fr ./community
fi

rm -fr *.md

git clone https://gitee.com/openeuler/community

fd=$(dirname $0)

for dir in $(ls ./community/sig/)
do
  if [ "$dir"x = "sig-template"x ]
  then
    continue
  fi
 
  if [ -d ./community/sig/$dir ] 
  then
    sed -i "s/\r//g" ./community/sig/$dir/OWNERS
    mt=$(sed '1d' ./community/sig/$dir/OWNERS | awk '{print $2}' | tr '\n' ', ')     
    sed -e "s/{{sig_name}}/$dir/g" $fd/sig.temp > $dir.md
    sed -i "s/{{maintainers}}/$mt/g" $dir.md 

    if [ -f ./community/sig/$dir/README.md ]
    then
      mail=$(grep -P "[a-zA-Z|-]+@openeuler.org" -o ./community/sig/$dir/README.md | head -1)
      if [ "$mail"x = "sig-yousigname@openeuler.org"x ]
      then
        continue
      fi

      if [ -n "$mail" ]
      then
        echo "replace mail to $mail"
        sed -i "s/dev@openeuler.org/$mail/g" $dir.md
      fi
    fi
  fi
done

rm -rf ./community
