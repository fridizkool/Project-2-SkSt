@echo off
REM Build static react files

pushd ".\src\main\react\"
call npm run build
if errorlevel 1 (
    echo Error: Failed to build static files
    exit /b 1
)
popd

REM Start Spring project
for /f "delims=" %%x in (secret.env) do set %%x

mvn spring-boot:run
