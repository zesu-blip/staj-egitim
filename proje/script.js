// 7. liste durumu kontrolü
let gorevSayisi = 8;
if (gorevSayisi === 0) {
    console.log("liste boş");
}
else if (gorevSayisi >= 1 && gorevSayisi <= 5) {
    console.log("liste kısa");
}
else if (gorevSayisi > 5) {
    console.log("liste dolu");
}

// 8. döngü
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}

// çift sayıları yazdırma 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j = j + 1;
}

// 9. fonksiyon
function selamla(ad) {
    console.log("merhaba " + ad);
}
selamla("Zeynep");

function topla(a, b) {
    return a + b;
}
let sonuc = topla(3, 5);
console.log(sonuc);

let sonuc2 = topla(3, 7);
console.log(sonuc2);

// 10. problemler

// problem 1
function problem1() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log(i + " 3'ün katıdır");
        }
    }
}
problem1();

// problem 2 
function ciftMi(sayi) {
    if (sayi % 2 === 0) {
        return sayi + " çifttir";
    }
    else {
        return sayi + " tektir";
    }
}
console.log(ciftMi(7));

// problem 3 
function buyukOlaniBul(a, b) {
    if (a > b) {
        return a + " büyüktür " + b + " sayısından";
    }
    else if (a === b) {
        return a + " eşittir " + b + " sayısına";
    }
    else {
        return b + " büyüktür " + a + " sayısından";
    }
}
console.log(buyukOlaniBul(9, 10));

// scope
function deneme() {
    let x = 7;
    console.log(x);
}
deneme();

// boolean
let durum = true;
console.log(typeof durum);

//nesne
let alisveris = ["ekmek", "süt", "yumurta"];
console.log(alisveris.length);
console.log(alisveris);
console.log(alisveris.length);
alisveris.push("peynir");
for (let i = 0; i < alisveris.length; i++) {
    console.log(alisveris[i]);
}

// let gorevler = [{
//     metin: "ekmek al",
//     bitti: false }]
// console.log(gorevler[0].metin);
// console.log(gorevler[0].bitti);

// gorevler[0].bitti=true;
// console.log(gorevler[0].bitti);
// console.log(gorevler);

let gorevler = [
    { metin: "ekmek al", bitti: false },
    { metin: "kitabı bitir", bitti: true },
    { metin: "markete git", bitti: false }];
for (let i = 0; i < gorevler.length; i++) {
    if (gorevler[i].bitti == false) {
        console.log(gorevler[i].metin);
    }
}

let baslik = document.querySelector("#baslik");
let liste = document.querySelector("ul");
let input = document.querySelector("input");
let buton = document.querySelector("button");
buton.addEventListener("click", function () {
    console.log(input.value);
});


console.log(baslik);
console.log(liste);
console.log(buton);
console.log(input);

baslik.textContent = "Görev Listem Devam Ediyor";

let li = document.createElement("li")
li.textContent = "yeni görev";
liste.appendChild(li)
li.classList.add("gorev");