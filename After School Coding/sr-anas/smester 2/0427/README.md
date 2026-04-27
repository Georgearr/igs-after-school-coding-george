# How to Run This Project

Initial Command
```
npm init --y
```
<br><br>We Need nanoid and CORS. <br>
Next, run this command
```
npm install express nanoid cors
```
<br>When developing a software, we need development (dev) and production software. To do that, we use "nodemon" plugin. <br>
```
npm install --save-dev nodemon
```
<br> --save-dev remarks that when development, this command only works on my machine
<br>
Edit "package.js", on line 5. From ```"main": "index.js",``` to ```"main": "./src/server.js",``` <br><br>
On Line 6, Change the code into this one: <br>
```
"scripts": {
    "dev": "nodemon ./src/server.js",
    "start": "node ./src/server.js"
  },
```
<br>