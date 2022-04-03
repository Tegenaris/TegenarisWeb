#!/bin/bash
#A mus file needs to be created to download everything from list in the file.
for fn in `cat mus`; do
 youtube-dl --extract-audio --audio-format mp3 $fn
done

#An alternative way of downloading the music directly from playlist.
#for vark in 174; do
# youtube-dl --extract-audio --audio-format mp3 https://www.youtube.com/playlist?list=PLSGaE0P-2iKDIO0uCKhe83GGgiQA9CWtj -i --playlist-start 173
#done
