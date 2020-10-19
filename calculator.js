const express = require("express");

const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;
     res.send("Your calculation is " + result);    
    
    
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCaculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight/Math.pow(height, 2);

    res.send("Your BMI is " + result);
});
app.listen(3000, function () {
    console.log("This server is running on port 3000;");
});