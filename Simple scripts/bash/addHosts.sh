#!/bin/bash

#TODO: parametrize the path
sed -i "$ a 127.0.0.1\t$1" '/home/sowka/Programs/Development/bash/hosts'
sed -i "$ a 127.0.0.1\twww.$1" '/home/sowka/Programs/Development/bash/hosts'
sudo cp /etc/hosts /etc/hosts.back
sudo cp /home/sowka/Programs/Development/bash/hosts /etc/hosts
