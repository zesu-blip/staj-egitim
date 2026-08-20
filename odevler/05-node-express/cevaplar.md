2-- ReferenceError: document is not defined
    at Object.<anonymous> (C:\Users\Azemi\Desktop\staj-egitim\proje\deneme.js:2:1)
    at Module._compile (node:internal/modules/cjs/loader:1871:14)
    at Object..js (node:internal/modules/cjs/loader:2002:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.18.0
-->document tarayıcının sağladığı bir nesnedir, Node.js ortamında bulunmadığı için hata oluşur.

3-- .gitignore sonrası git status
git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../gunluk/2026-07-30.md
        modified:   ../gunluk/2026-08-12.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.gitignore
        ../odevler/05-node-express/
        deneme.js
        package-lock.json
        package.json

no changes added to commit (use "git add" and/or "git commit -a")

5--  localhost:3000/selam adresine gittiğimde --> selam Zeynep yazıyor
	localhost:3000/olmayanbiryer adresine gittiğimde --> Cannot GET /olmayanbiryer yazıyor

6-- 
type: document
response: [
    {
        "metin": "ekmek al",
        "bitti": false
    },
    {
        "metin": "kitabı bitir",
        "bitti": true
    },
    {
        "metin": "markete git",
        "bitti": false
    }
]
status: 304

-- API, bir adrese istek attığımızda bize sayfa değil veri döndüren yapı.


7-- file:/// dosyanın bilgisayardan doğrudan açıldığını, http://localhost:3000 ise dosyanın yerel sunucu üzerinden açıldığını gösterir.

8-- fetch bir adrese istek gönderir, cevap hemen gelmez, then'in içine yazılan fonksiyon cevap geldiğinde çalışır. fetch isteği hemen sonuçlandırmadığı için, sunucudan cevap geldiğinde çalışacak işlemler then içine yazıldı.önce boş dizi görülmesinin nedeni, console.log(gorevler) çalıştığı anda fetch isteğinin henüz cevaplanmamış olması.

10-- görevi sildiğimde f12 network sekmesinde
DELETE http://localhost:3000/gorevler/3
Status Code: 200 OK
adresin sonundaki 3 sayısı sildiğim görevin indexi

11-- eklediğim görevler sayfayı yenileyince kaybolmuyor çünkü sunucudaki gorevler dizisinde duruyor. fakat sunucuyu kapatıp tekrar açınca kayboluyor çünkü veriler şu anda sadece sunucuda tutuluyor.

--GET sunucudan veri almak, POST ise sunucuya veri göndermek için kullanılıyor. adres çubuğuna adres yazıp bastığımızda GET isteği gönderiliyor. görev eklerken sunucuya yeni veri gönderdiğimiz için GET yerine POST kullanıyoruz