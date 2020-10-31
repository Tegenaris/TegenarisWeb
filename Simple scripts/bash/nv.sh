#!/bin/bash
#sed -i "$ a 127.0.0.1\t$1" '/home/jez/Programs/updateHosts/hosts'
#sed -i "$ a 127.0.0.1\twww.$1" '/home/jez/Programs/updateHosts/hosts'
#cp /etc/hosts /etc/hosts.back
#cp /home/jez/Programs/updateHosts/hosts /etc/hosts

for fn in `cat mus`; do
 youtube-dl --extract-audio --audio-format mp3 $fn
done

#for vark in 174; do
# youtube-dl --extract-audio --audio-format mp3 https://www.youtube.com/playlist?list=PLSGaE0P-2iKDIO0uCKhe83GGgiQA9CWtj -i --playlist-start 173
#done
