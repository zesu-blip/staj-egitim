1-f12 ile açılan geliştirici araçları ne işe yarıyor---> 
elements kısmından o web sayfasının kaynak kodunu inceleyebiliriz, ayrıca kodlarda geçici değişiklik yapabiliriz. konsol üzerinden javascript ile çalışabilir ve hata mesajlarını görebiliriz. sources kısmında yine kod inceleme, hata ayıklama yapılır ayrıca dosyalar üzerinde düzenlemeler yapabiliriz. 

2-network sekmesinde bir sayfa açılırken ne akıyor--->
sayfa açılırken tarayıcı ile sunucu arasında gerçekleşen istekler burada görünür. html, css, javascript dosyaları, görseller, fontlar ve varsa video ile ses dosyaları burada listelenir.

3-istemci ve sunucu (client/server) ne demek --->
client bir hizmet isteyen/isteği yapan taraftır. server ise o hizmeti sağlayan/gelen isteğe cevap veren taraftır.

4-bir http isteği gidip cevabı nasıl geliyor --->
bir http de ilk tarayıcıdan sunucuya bir istek gönderilir. istek sunucuya ulaşır, sunucu isteği işler sonra bir yanıt döner. tarayıcıda gelen veriyi kullanıcıya döndürür.

5-bir url hangi parçalardan oluşuyor --->
protokol, alan adı, yol ve sorgudan oluşur >örnek olarak>
https://www.google.com/search?q=git
protokol= http / alan= www.google.com / yol=/search / sorgu= ?q=git

6-frontend/backend/veritabanı hangi işi yapıyor --->
frontend: websitesinin ön yüzünü ve görsel tarafını oluşturur. kullanıcı ile etkileşime girer.
backend: kullanıcıların görmediği arka yüzü oluşturur/geliştirir.
veri tabanı: verileri kalıcı olarak saklar. veriyi hızlı okur, tekrardan yazabilir, genişletebilir.

7-git push origin main deki origin ve main tam olarak neyi gösteriyor --->
origin: uzak deponun uzun bağlantı adresine verilen takma addır.
main: projenin ana kodlarının toplandığı ana dalın adıdır.

8- git config user.name ve user.email tam olarak ne işe yarıyor --->
git config user.name: Değişikliği yapan kişinin adını/kullanıcı adını belirler.
git config user.email: Değişikliği yapan kişinin e-posta adresini belirler.
bunlar commit'in içinde author satırında tutulur ve git log komutuyla görüntülenebilir.

9- network sekmesinde açılan status ve time
youtube.com-> status: 200 OK time: 0.44 ms