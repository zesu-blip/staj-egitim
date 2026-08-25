Görev Listesi
Basit bir yapılacaklar listesi uygulaması. Görev ekleme, silme ve tamamlandı olarak işaretleme yapılabilir, veriler dosyada saklanır.
Nasıl çalıştırılır
1. Proje klasöründe: `npm install`
2. Sonra: `node server.js`
3. Tarayıcıdan: http://localhost:3000
Adresler (API)
`GET /gorevler` —> tüm görevleri listeler
`POST /gorevler` —> yeni görev ekler (gövdede `metin` alanı gerekir)
`PUT /gorevler/:id` —> belirtilen id'li görevin tamamlandı durumunu tersine çevirir
- `DELETE /gorevler/:id` — belirtilen id'li görevi siler
Veri nerede duruyor
Görevler `gorevler.json` dosyasında saklanır, sunucu her değişiklikte bu dosyaya yazar. Bu dosya git'e dahil değildir (`.gitignore`'da).