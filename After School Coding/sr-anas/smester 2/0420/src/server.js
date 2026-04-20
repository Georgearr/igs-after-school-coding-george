const express = require("express");
const app = express();
const port = 5000;
const host = "127.0.0.1";

app.get("/", (_, res) => {
    res.send("Hello, Express!");
});

app.post("/", (_, res) => {
    res.send("Hello, Express! With Post Method");
});

app.patch("/", (_, res) => {
    res.send("Hello, Express! With Patch Method");
});

app.put("/", (_, res) => {
    res.send("Hello, Express! With Put Method");
});

app.delete("/", (_, res) => {
    res.send("Hello, Express! With Delete Method");
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// Run command: npm run dev