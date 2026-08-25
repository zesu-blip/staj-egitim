const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/selam", function (req, res) {
    res.send("selam Zeynep");
});

let gorevler = [
    { id: 1, metin: "ekmek al", bitti: false },
    { id: 2, metin: "kitabı bitir", bitti: true },
    { id: 3, metin: "markete git", bitti: false }
];

function kaydet() {
    fs.writeFileSync("gorevler.json", JSON.stringify(gorevler, null, 2));
}

if (fs.existsSync("gorevler.json")) {
    gorevler = JSON.parse(fs.readFileSync("gorevler.json", "utf8"));
} else {
    kaydet();
}

app.get("/gorevler", function (req, res) {
    res.json(gorevler);
});

app.post("/gorevler", function (req, res) {
    if (req.body.metin === undefined || req.body.metin === "") {
        res.status(400).send("metin bos olamaz");
        return;
    }
    gorevler.push({
        id: Date.now(),
        metin: req.body.metin,
        bitti: false
    });
    kaydet();
    res.json(gorevler);
});

app.delete("/gorevler/:id", function (req, res) {
    let index = gorevler.findIndex(function (g) {
        return g.id === Number(req.params.id);
    });
    gorevler.splice(index, 1);
    kaydet();
    res.json(gorevler);
});

app.put("/gorevler/:id", function (req, res) {
    let gorev = gorevler.find(function (g) {
        return g.id === Number(req.params.id);
    });
    gorev.bitti = !gorev.bitti;
    kaydet();
    res.json(gorevler);
});

app.listen(3000);