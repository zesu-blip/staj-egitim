// diziler
let alisveris = ["ekmek", "süt", "yumurta"];
console.log(alisveris.length);
console.log(alisveris);

alisveris.push("peynir");

console.log(alisveris.length);
console.log(alisveris);

console.log(alisveris[alisveris.length - 1]);
for (let i = 0; i < alisveris.length; i++) {
    console.log(alisveris[i]);
}
//nesne
let gorev = {
    metin: "ekmek al",
    bitti: false
};

console.log(gorev.metin);
console.log(gorev.bitti);

gorev.bitti = true;
console.log(gorev.bitti);
console.log(gorev);
