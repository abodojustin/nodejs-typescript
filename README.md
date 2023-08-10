# write something to understand your code

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "pm2 start dist/index.js",
  "dev": "sudo tsc -w & sudo pm2 start dist/index.js",
  "prod": "sudo tsc & sudo pm2 start dist/index.js",
  "serve": "cross-env NODE_ENV=development concurrently \"tsc --watch\" \"sudo pm2 start dist/index.js\""
},
```
