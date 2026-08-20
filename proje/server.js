const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/selam", function (req, res) {
    res.send("selam Zeynep");
});

let gorevler = [
    { metin: "ekmek al", bitti: false },
    { metin: "kitabı bitir", bitti: true },
    { metin: "markete git", bitti: false }
];

app.get("/gorevler", function (req, res) {
    res.json(gorevler);
});

app.post("/gorevler", function (req, res) {
    gorevler.push(req.body);
    res.json(gorevler);
});

app.delete("/gorevler/:index", function (req, res) {
    gorevler.splice(Number(req.params.index), 1);
    res.json(gorevler); })

app.listen(3000);