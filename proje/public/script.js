// querySelector ve textContent
let baslik = document.querySelector("#baslik");
let liste = document.querySelector("ul");
let input = document.querySelector("input");
let buton = document.querySelector("button");

let gorevler = [];

fetch("/gorevler")
    .then(function (cevap) {
        return cevap.json();
    })
    .then(function (veri) {
        gorevler = veri;
        listeyiCiz();
    });

function listeyiCiz() {
    liste.innerHTML = "";

    for (let i = 0; i < gorevler.length; i++) {
        let li = document.createElement("li");
        li.textContent = gorevler[i].metin;
        li.classList.add("gorev");

        if (gorevler[i].bitti === true) {
            li.classList.add("bitti");
        }

        li.addEventListener("click", function () {
            fetch("/gorevler/" + gorevler[i].id, { method: "PUT" })
                .then(function (cevap) {
                    return cevap.json();
                })
                .then(function (veri) {
                    gorevler = veri;
                    listeyiCiz();
                });
        });
        let silButonu = document.createElement("button");
        silButonu.textContent = "sil";
        li.appendChild(silButonu);
        silButonu.addEventListener("click", function (olay) {
            olay.stopPropagation();
            fetch("/gorevler/" + gorevler[i].id, { method: "DELETE" })
                .then(function (cevap) {
                    return cevap.json();
                })
                .then(function (veri) {
                    gorevler = veri;
                    listeyiCiz();
                });
        });

        liste.appendChild(li);
    }
}

buton.addEventListener("click", function () {
    if (input.value !== "") {
        fetch("/gorevler", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ metin: input.value, bitti: false })
        })
            .then(function (cevap) {
                return cevap.json();
            })
            .then(function (veri) {
                gorevler = veri;
                listeyiCiz();
                input.value = "";
            });
    }
});
