1-- li seçicisine kırmızı, .gorev class seçicisine siyah renk verdiğimde .gorev seçicisinin önceliği daha yüksek olduğu için siyah renk uygulandı. F12 geliştirici araçlarında li seçicisindeki kırmızı renk kuralının üzerinin çizili olduğunu gördüm.

2-- html'de kodlar baştan sona doğru okunduğu için ilgili dosyalar yüklendikten sonra çalışsın diye `<script>` linkini body etiketinin sonuna koyarız. eğer ki script linkini head etiketi arasına koyarsam, html öğeleri henüz  yüklenmeden çalışmaya başlayabileceği için sorun çıkabilir.
console.log() içine yazılan değer veya işlemin sonucunu konsola veriyor

var-let --> sonradan değeri değiştirilebilen 
const --> sonradan değeri değiştirilemeyen
const ile iki ayrı değer belirledikten sonra konsolda çıkan hata mesajı: script.js:4 Uncaught TypeError: Assignment to constant variable.

string --> yazı
number --> sayı
boolean --> true, false
konsola bunları yazdıktan sonra çıktılar:
console.log(typeof "5"); --> string
console.log(typeof 5); --> number
console.log("5" + 5); --> 55 (string 5 ile number 5i toplayamaz toplaması için ikisinin de number olması lazım)

hiçbir değer vermeden tanımladığım x ise undefined olarak çıkıyor

== bu değerlerin eşitliğine bakar eiştse true değilse false döndürür. mesela "5"== 5 yaptığımda konsolda true çıktı.
=== bu tiplerine(typeof) bakıp aynıysa true farklıysa false döndürür bunda da "5"===5 yaptığımda false verdi çünkü tipleri farklıydı

if koşulu true ise çalışır, false ise else çalışır. else if ile başka koşullar eklenebilir.

for döngüsünde ilk bölüm başlangıç değerini, ikinci bölüm koşulu, üçüncü bölüm ise artırma işlemini belirtir.

i % 2 == 0 kullanılarak çift sayılar bulunabilir. while döngüsünde ise koşul parantez içinde yazılır ve artırma işlemi döngünün içinde yapılır.

i++ ile i = i + 1 aynı şekilde değeri 1 artırır.

fonksiyonlar belirli bir işi tekrar kullanabilmek için oluşturulur. parantez içindeki değerler parametredir.
return değeri fonksiyonun dışına geri gönderir. console.log ise sadece sonucu konsola yazdırır. return ile dönen değer bir değişkene atanıp tekrar kullanılabilir.