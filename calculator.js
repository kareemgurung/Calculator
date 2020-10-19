const express = require("express");

const app = express();

app.get("", function (req, res) {
    res.sendFile(__dirname);
});


app.listen(3000, function () {
    console.log("This server is running on port 3000;");
});