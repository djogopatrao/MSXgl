@echo off
set UP=%1
call :toUpper UP
set low=%1
call :toLower low

set Tools=..\..\..\tools

if not exist out md out

:: Assemble
%Tools%\audio\arkos\rasm_win64.exe %low%_profile.asm -o out\%low%_player -s -sl -sq -xr -m

:: Diassemble
%Tools%\audio\arkos\Disark.exe out\%low%_player.bin out\%low%_player.asm --symbolFile out\%low%_player.sym --undocumentedOpcodesToBytes --src16bitsValuesInHex --src8bitsValuesInHex --sourceProfile sdcc

:: Create C file
echo ; ____________________________                                                 >  %low%_player.asm
echo ; ██▀▀█▀▀██▀▀▀▀▀▀▀█▀▀█        │   ▄▄       ▄▄                                  >> %low%_player.asm
echo ; ██  ▀  █▄  ▀██▄ ▀ ▄█ ▄▀▀ █  │  ██▄█ ██▄▀ ██▄▀ ▄█▀▄  ██▀                      >> %low%_player.asm
echo ; █  █ █  ▀▀  ▄█  █  █ ▀▄█ █▄ │  ██ █ ██   ██ █ ▀█▄▀ ▄██                       >> %low%_player.asm
echo ; ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀────────┘                                                >> %low%_player.asm
echo ;  by Guillaume 'Aoineko' Blanchard under CC-BY-AS license                     >> %low%_player.asm
echo ;==============================================================================>> %low%_player.asm
echo ; Autogenerated Arkos %UP% player for MSX-GL library                           >> %low%_player.asm
echo ;  on %DATE% at %TIME%                                                         >> %low%_player.asm
echo ;                                                                              >> %low%_player.asm
echo ; Arkos Tracker and the Z80 players are coded and designed by                  >> %low%_player.asm
echo ;  Julien Névo (aka Targhan/Arkos) under MIT License.                          >> %low%_player.asm
echo ;==============================================================================>> %low%_player.asm
type out\%low%_player.asm      >> %low%_player.asm

:: Some formating to make the source file more readable
%Tools%\audio\misc\fart.exe -C %low%_player.asm ": " ":\n\t"
%Tools%\audio\misc\fart.exe -C %low%_player.asm ","  ", "

exit /b 0


::***************************************************************************
:: HELPER FUNCTIONS
::***************************************************************************

:toLower str -- converts uppercase character to lowercase
::           -- str [in,out] - valref of string variable to be converted
:$created 20060101 :$changed 20080219 :$categories StringManipulation
:$source https://www.dostips.com
if not defined %~1 exit /b
for %%a in ("A=a" "B=b" "C=c" "D=d" "E=e" "F=f" "G=g" "H=h" "I=i"
            "J=j" "K=k" "L=l" "M=m" "N=n" "O=o" "P=p" "Q=q" "R=r"
            "S=s" "T=t" "U=u" "V=v" "W=w" "X=x" "Y=y" "Z=z") do (
    call set %~1=%%%~1:%%~a%%
)
exit /b

:toUpper str -- converts lowercase character to uppercase
::           -- str [in,out] - valref of string variable to be converted
:$created 20060101 :$changed 20080219 :$categories StringManipulation
:$source https://www.dostips.com
if not defined %~1 exit /b
for %%a in ("a=A" "b=B" "c=C" "d=D" "e=E" "f=F" "g=G" "h=H" "i=I"
            "j=J" "k=K" "l=L" "m=M" "n=N" "o=O" "p=P" "q=Q" "r=R"
            "s=S" "t=T" "u=U" "v=V" "w=W" "x=X" "y=Y" "z=Z") do (
    call set %~1=%%%~1:%%~a%%
)
exit /b
