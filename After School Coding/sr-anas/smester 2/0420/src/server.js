const express = require("express");
const app = express();
const port = 5000;
const host = "127.0.0.1";


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// Run command: node ./src/server.js