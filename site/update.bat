call npm update -D && npm update -S
call npm uninstall -g angular-cli @angular/cli
call npm cache clean
call npm install -g @angular/cli@latest
call rm -rf node_modules dist # On Windows use rmdir /s /q node_modules dist
call npm install --save-dev @angular/cli@latest
call npm install
call ng init