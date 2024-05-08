pushd ".\src\main\react\"
call npx tailwindcss -i ./input.css -o ./output.css --watch
popd