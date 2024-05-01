@REM Start the react app without starting spring backend

@REM Load environment variables
for /f "delims=" %%x in (secret.env) do set %%x

pushd ".\src\main\react\"
call npm run dev
popd

