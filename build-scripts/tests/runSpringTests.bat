@REM Load env
for /f "delims=" %%x in (secret.env) do set %%x


mvn test