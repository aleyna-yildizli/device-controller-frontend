# Cihaz Kontrol Uygulaması - Frontend

## Genel Bakış

Bu proje, IoT cihazlarının stok ve garanti durumunu yöneten Cihaz Kontrol sisteminin frontend uygulamasıdır. Uygulama, React kullanılarak geliştirilmiş olup, kullanıcıların cihaz bilgilerini eklemesine, güncellemesine, silmesine ve görüntülemesine olanak tanır.

## Özellikler

- **Cihaz Ekleme**: Seri numarası, marka, model ve satın alma tarihi ile yeni bir cihaz ekleyin.
- **Cihaz Güncelleme**: Mevcut cihaz bilgilerini güncelleyin.
- **Cihaz Silme**: Bir cihazı sistemden kaldırın.
- **Cihazları Görüntüleme**: Tüm cihazları detayları ve garanti durumları ile listeleyin.

## API Uç Noktaları

Frontend uygulaması, aşağıdaki uç noktalar aracılığıyla backend ile iletişim kurar:

- `GET /devices`: Tüm cihazları alın.
- `POST /devices`: Yeni bir cihaz ekleyin.
- `PUT /devices/:id`: Mevcut bir cihazı güncelleyin.
- `DELETE /devices/:id`: Bir cihazı silin.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzleri oluşturmak için kullanılan JavaScript kütüphanesi.
- **Redux**: Durum yönetimi kütüphanesi.
- **react-hook-form**: Form doğrulama kütüphanesi.
- **Axios**: HTTP istekleri yapmak için promise tabanlı istemci.
- **Bootstrap**: Duyarlı tasarım için kullanılan CSS framework.
- **FontAwesome**: İkon kütüphanesi.
- **React-Bootstrap**: React ile oluşturulmuş Bootstrap bileşenleri.
- **Tailwind CSS**: Yardımcı sınıflar kullanarak hızlı bir şekilde modern tasarımlar oluşturmanızı sağlayan bir CSS framework'ü.

## Kurulum

### Gereksinimler

- Node.js (sürüm 12 veya üzeri)
- npm (Node Package Manager)

### Adımlar

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/aleyna-yildizli/device-controller-frontend.git
   cd device-controller-frontend
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

4. **Tarayıcınızı açın:**

   ` http://localhost:5173` adresine giderek uygulamayı görüntüleyin.

## İletişim

Herhangi bir sorunuz veya talebiniz için benimle [aleyna.yildizli@gmail.com](mailto:aleyna.yildizli@gmail.com) adresinden iletişime geçebilirsiniz.
