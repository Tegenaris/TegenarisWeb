Rem FORFILES /S /P LongTerm /D -1825 /C "cmd /c DEL @path /Q"
Rem ROBOCOPY LongTerm LongTerm /S /MOVE
FORFILES /S /P ShortTerm /D -365 /C "cmd /c DEL @path /Q"
ROBOCOPY ShortTerm ShortTerm /S /MOVE
FORFILES /S /P Technical /D -90 /C "cmd /c DEL @path /Q"
ROBOCOPY Technical Technical /S /MOVE
FORFILES /S /P Trash /D -30 /C "cmd /c DEL  @path /Q"
ROBOCOPY Trash Trash /S /MOVE
Rem MKDIR LongTerm
MKDIR ShortTerm
MKDIR Technical
MKDIR Trash
Rem Forfiles removes files supplying a DEL command
Rem ROBOCOPY removes empty folders
Rem PAUSE