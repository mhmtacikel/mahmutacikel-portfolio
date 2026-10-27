# Mahmut Açıkel Portfolio

Mahmut Açıkel'in bilgi güvenliği, yapay zeka yönetimi, iş sürekliliği ve gizlilik yönetim sistemi danışmanlığı web sitesi.

Canlı site: [mahmutacikel.com](https://mahmutacikel.com/)

GitHub repository: [mhmtacikel/mahmutacikel-portfolio](https://github.com/mhmtacikel/mahmutacikel-portfolio)

## İçerik

Site aşağıdaki hizmet ve içerik başlıklarını sunar:

- ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi
- ISO/IEC 27701 Gizlilik Bilgi Yönetim Sistemi
- ISO/IEC 42001 Yapay Zeka Yönetim Sistemi
- ISO/IEC 22301 İş Sürekliliği Yönetim Sistemi
- Ön denetim ve iç denetim
- Bilgi güvenliği ve veri koruma farkındalık eğitimleri
- Sektör bazlı danışmanlık içerikleri
- Bilgi güvenliği, KVKK ve yapay zeka üzerine yayınlar
- MA Asistan chatbotu

## Teknolojiler

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Markdown
- Firebase Hosting
- Gemini API

## Gereksinimler

- Node.js
- npm
- Firebase CLI — yalnızca Firebase deploy için

## Yerel kurulum

Proje klasöründe terminal açın:

```powershell
cd C:\Users\MSI\kendi_sitem
npm install
```

`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değerleri ekleyin:

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
APP_URL=https://mahmutacikel.com
```

> `.env` dosyasını GitHub'a göndermeyin. Bu dosya `.gitignore` tarafından dışarıda bırakılır. Paylaşılabilir örnek dosya `.env.example` dosyasıdır.

Geliştirme sunucusunu başlatın:

```powershell
npm run dev
```

Siteyi tarayıcıda açın:

```text
http://localhost:3000/
```

## Production build

Production çıktısını oluşturmak için:

```powershell
npm run build
```

Oluşan `dist` klasörünü yerel olarak önizlemek için:

```powershell
npm run preview
```

## Firebase Hosting deploy

Firebase CLI ile giriş yaptıktan sonra:

```powershell
firebase login
npm run build
firebase deploy --only hosting --project mahmutacikel-1e361
```

Firebase yapılandırması [firebase.json](./firebase.json) dosyasındadır. Hosting, `dist` klasörünü yayınlar.

## GitHub'a değişiklik gönderme

Değişiklikleri kontrol edip commit ve push etmek için:

```powershell
git status
git add .
git commit -m "Describe the change"
git push
```

Projenin GitHub remote adresi:

```text
https://github.com/mhmtacikel/mahmutacikel-portfolio.git
```

## Proje yapısı

```text
.
├── public/                 # Favicon ve statik dosyalar
├── src/
│   ├── components/ui/      # Chatbot ve arayüz bileşenleri
│   ├── content/blog/       # Markdown yayın içerikleri
│   ├── contexts/           # Tema ve dil durumu
│   ├── lib/                # Gemini ve markdown yardımcıları
│   ├── App.tsx             # Ana sayfa
│   └── index.css           # Site teması ve responsive stiller
├── firebase.json            # Firebase Hosting ayarları
├── index.html               # SEO başlıkları ve noscript içeriği
└── package.json             # Script ve bağımlılıklar
```

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Production build'i yerel olarak gösterir |
| `npm run lint` | TypeScript kontrolü çalıştırır |

## Not

`npm run lint` çalışırken Vite'ın `import.meta.env` ve `import.meta.glob` tipleri için mevcut TypeScript tanımları eksikse hata görülebilir. Production build için kullanılan `npm run build` komutu ayrı olarak doğrulanmalıdır.
