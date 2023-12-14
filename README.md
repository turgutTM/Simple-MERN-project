# Mekabul React Front-End

Netlify linki: [https://mekanbul-frontend.netlify.app](https://mekanbul-frontend.netlify.app)

## Bileşenler
1. **Navbar:** Navigasyon Çubuğu
2. **Header:** Başlık
3. **Footer:** Alt bilgi
4. **Home:** Anasayfa
5. **Template:** Her sayfada Navbarın görünmesini sağlayan kapsayıcı bileşen
6. **Venue:** Mekan bilgisini tutan bileşen
7. **VenueDetail:** Mekanın detaylarını gösteren bileşen
8. **VenueList:** Mekanların listesini tutan bileşen
9. **Login:** Giriş yapmayı sağlayan bileşen
10. **Register:** Kayıt olmayı sağlayan bileşen
11. **HourList:** Mekanın açılış kapanış saatlerini tutan bileşen
12. **Rating:** Yıldız biçiminde mekan puanı üreten bileşen
13. **AdminButton:** Mekan ekleme, silme, güncelleme işlemlerini yönetecek bileşen
14. **Comment:** Mekana yapılan yorumu temsil eden bilşen
15. **CommentList:** Tüm yorumları tutan bileşen
16. **FoodAndDrinkList:** Mekanda sunulan yiyecek içecek bilgilerini tutan liste bileşeni
17. **About:** Hakkında
18. **PageNotFound:** Olmayan bir sayfayı temsil eden bileşen
19. **AddComment:** Bir mekana yorum eklemeyi sağlayan bileşen
20. **AddUpdateVenue:** Yöneticinin yeni mekan eklemesini, var olan mekanı güncellemesini sağlayan bileşen
21. **Admin:** Mekanları yönetmeyi sağlayan yönetici bileşeni
22. **InputWithLabel:** Etiketiyle birlikte giriş kutusu oluşturmayı sağlayan bileşen
## Yardımcı Servis Bileşenleri
1. **http-common:** axios parametrelerini ayarlamayı sağlayan bileşen
2. **Utils:** Yapılan yorumun tarihini, mekanın kullanıcının konumuna olan uzaklığını formatlayan metotları içeren bileşen
3. **VenueDataService:** Rest API'den hizmet almayı sağlayan bileşen
4. **VenueReducer:** Uygulamadaki tüm state'leri yönetecek bileşen

## Ayar Dosyaları ve Klasörler
1. **vercel.json:** Vercel sitesinde rotaların aktif olmasını sağlayan kodu içerir.
2. **vite.config.js:** vite ayarlarını yapan kodu içerir.
3. **public/javascripts:** Bootstrap için gerekli, sitenin interaktif bir hale gelmesine olanak sağlayan JavaScript dosyalarını içerir.
4. **public/venues.json:** REST API yazana kadar, geçici olarak mekan verilerinin çekileceği dosya
5. **public/favicon.ico:** Websitesi ikonu

## Sitenin Tüm Bileşen Yapısı

![Bileşenler](<Frontend Tasarım.png>)
