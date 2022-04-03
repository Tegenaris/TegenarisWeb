FORFILES /S /P LongTerm /D -1825 /C "cmd /c DEL @path /Q"
ROBOCOPY LongTerm LongTerm /S /MOVE
FORFILES /S /P ShortTerm /D -365 /C "cmd /c DEL @path /Q"
ROBOCOPY ShortTerm ShortTerm /S /MOVE
FORFILES /S /P Technical /D -90 /C "cmd /c DEL @path /Q"
ROBOCOPY Technical Technical /S /MOVE
FORFILES /S /P Trashy /D -30 /C "cmd /c DEL  @path /Q"
ROBOCOPY Trashy Trashy /S /MOVE
MKDIR LongTerm
MKDIR ShortTerm
MKDIR Technical
MKDIR Trashy
Rem Forfiles removes files supplying a DEL command
Rem ROBOCOPY removes empty folders
Rem PAUSE