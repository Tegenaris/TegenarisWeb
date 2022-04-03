while getopts s: flag
do
    case "${flag}" in
        s) shutdown=${OPTARG};
    esac
done

if [ $shutdown == true ]
then 
    echo "Update and close"
    sudo snap refresh && sudo apt autoclean && sudo apt clean && sudo apt autoremove -y && sudo apt update && sudo apt upgrade -y && shutdown -P now
else
    echo "Just update"
    sudo snap refresh && sudo apt autoclean && sudo apt clean && sudo apt autoremove -y && sudo apt update && sudo apt upgrade -y
fi