#!/bin/bash

fileName=$PWD"/hosts"
#TODO: parametrize the path
sed -i "$ a 127.0.0.1\t$1" $fileName
sed -i "$ a 127.0.0.1\twww.$1" $fileName
#sudo cp /etc/hosts /etc/hosts.back
#sudo cp hosts /etc/hosts
