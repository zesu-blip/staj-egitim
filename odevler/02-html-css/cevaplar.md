1- kodlarda özel karakterleri kullanmak istiyorsak meta charset= "utf-8" etiketini head etiketleri arasına yazmamız yazmamız gerekir.
head sayfanın kendisiyle ilgili bilgileri tutar. title tarayıcı sekmesinde çıkan yazıdır.  bodyekranda görünen her şeydir.

2- başlık etiketleri boyutları h1>h2>h3>h4>h5>h6 şeklindedir. en büyük h1 en küçük h6'dır
div -> olduğu bütün satırı kaplar, kendisinden sonra gelenleri alt satıra iter. blok düzeyinde bir elemandır
span -> satır içi bir elemandır(inline) elemandır. kendisi kadar yer kaplar, bulunduğu satırı tamamen kaplamaz
    ikiside tek başına ekranda bir şey göstermez, diğer ögeleri gruplamak için kullanılır.

3-  ul -> sırasız lliste
    ol -> sıralı liste
    li -> listenin satırı/elemanı

4- inputun kapanış etiketi yoktur, tek başına yazılır  ve özellikleri etiketin içine yazılır: input type="text" placeholder="Yeni görev"
placeholder --> input boşken içinde görünür, kullanıcıya ne yazması gereken şeyi yazar
type--> input türünü belirler= text, password, email, checbox, submit vs

5- css dosyasını html dosyasına bağlamak için ->link rel="stylesheet" href="style.css"-< etiketi head etiketleri arasına yazılır

6- bir kuralı nereye uygulayacağımızı seçicilerle belirleriz.class seçicisi(.) birden fazla elemana uygulanabilir, id(#) seçicisi ise yalnızca tek bir elemana uygulanır
aynı elemana hem tip seçicisi (li) hem de class seçicisi uygulanırsa, class seçicisinin verdiği stil geçerli olur. çünkü class seçicisinin tip seçicisinden daha önceliklidir. Öncelik sırası: id > class > eleman

7- 

8-  display:flex --> flexboxta elemanların yan yana sıralamsını ve kolayca hizalamasını sağlar 
    justify-content --> yatay eksen boyunca hizalama yapar.
    align-items --> dikey eksen boyunca hizalama yapar. flex-start ögenin en üstüne, center ortasına, flex-end en altına
    gap --> flex kapsayıcı içindeki elemanların arasındaki boşluk (input-buton arası gibi)

---- C:\Users\Azemi\Desktop\staj-egitim\proje> git remote -v
origin  https://github.com/zesu-blip/staj-egitim.git (fetch)
origin  https://github.com/zesu-blip/staj-egitim.git (push)
---- aynı elemana iki farklı CSS kuralı uygulanırsa tarayıcı hangisini uygulayacağına cascade kurallarına göre karar verir. ilk önce seçicilerin özgüllüğüne(specificity) bakar, öncelik sırası !important>inline>id>class>tip seçicisi şeklindedir. yani bir elemana aynı anda id ve class seçicisiyle renk verilirse id olan atanır. ama mesela ikiside tip seçici olduğunda cascade özelliği olduğundan dolayı yukarıdan aşağı okunur kodlar. yani en son okunan koddaki özellik geçerli olur. uygulanıyorsa hangisinin öncelikli olacağını belirler. cascade tüm css kurallarını değerlendirerek son uygulanacak stili belirlendiği yer specificityler eşitse kodu üstten alta okuduğu için en son yazılan kural geçerli olur. 