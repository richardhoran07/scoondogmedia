@echo off
setlocal enabledelayedexpansion

:: go up into project/videos/
cd ..

:: empty videos folder
del /q videos\*.mp4 2>nul

:: empty and start videos.js
echo const VIDEOS = [ > videos.js

:: loop through source clips in slicer/
for %%a in (slicer\*.mp4) do (
    echo Processing %%a ...
    ffmpeg -i "%%a" -vf "scale=640:360" -c:v libx264 -preset fast -crf 23 -an -f segment -segment_time 20 "videos\%%~na_%%03d.mp4"

    for %%b in (videos\%%~na_*.mp4) do (
        echo   "videos/%%~nxb", >> videos.js
    )
)

echo ]; >> videos.js
echo Done! VIDEOS list saved in videos.js
pause
