---
title: "Yapay Zeka Ajanlarının Gizli Düşmanı: KV Önbellek (KV Cache) Tiranlığı"
excerpt: "Yapay zeka ajanlarını tasarlarken hepimizin düştüğü bir tuzak var. TypeSafe kurucusu Diogo Almeida'nın tasarım notlarından yola çıkarak ajan mimarisindeki temel sorunları ve Jev yaklaşımını inceledim."
date: "2026-09-26"
readTime: "7 dk okuma"
category: "AI Architecture"
---

Bugünlerde herkes yapay zeka ajanlarından (coding agents) bahsediyor. Piyasaya çıkan araçların çoğunun kaputunun altına baktığımızda aslında çok basit bir yapı görüyoruz: Bir dil modeli, birkaç araç (tool) ve etrafına sarılmış basit bir döngü (while loop). Modelin kendisi dışında, mimari anlamda gerçekten yenilikçi pek bir şey yok.

Geçtiğimiz günlerde TypeSafe'in kurucusu Diogo Almeida'nın tasarım notlarına dayanan *"Jev Engineering for Coding Agents"* başlıklı bir makale/sentez okudum. Makale, aklımdan çıkmayan oldukça kışkırtıcı bir soruyla başlıyor: **"Eğer dil modellerinin (LLM) KV önbelleği (KV Cache) olmasaydı, bir kodlama ajanı nasıl tasarlardınız?"**

Bu soru aslında bugün ajan tasarlarken farkında olmadan kabullendiğimiz birçok hatayı yüzümüze vuruyor.

## KV Önbellek Tiranlığı ve 6 Semptom

Mevcut ajanlar, sırf önceki sohbeti (prefix) yeniden işlemek ucuz diye, sürekli üstüne eklenen (append-only) bir metin dosyası gibi çalışıyor. Başlarda yaptığınız ufak bir değişiklik bile tüm önbelleği geçersiz kılıyor ve modeli her şeyi baştan okumaya zorluyor. Almeida'nın notları, bu durumun yol açtığı 6 temel sorunu (semptom) şöyle sıralıyor:

1. **Yönlendirme (Routing) Tuzağı:** "Basit işleri ucuz modele, zor işleri akıllı modele (Frontier) göndereyim" mantığı pratikte çöküyor. Ucuz modelin bağlamı (context) okuma maliyeti ve işi geri devraldığında büyük modelin her şeyi yeniden okumak zorunda kalması, beklenen tasarrufu sıfırlayıp maliyeti artırıyor.
2. **Araç Çöplüğüne Dönen Bağlam:** Modelin kullanabileceği tüm araçların tam şemaları (schema) en baştan sisteme yükleniyor. Çoğu zaman hiç kullanılmayacak araçlar, token bütçesini sömürüyor.
3. **Kör Sıkıştırma (Compaction):** Bağlam şiştiğinde sistem eski yazışmaları özetleyerek sıkıştırıyor. Ama bir sonraki adımda neyin lazım olacağını bilmeden yapılan bu kör sıkıştırma, kritik detayların kaybolmasına yol açıyor.
4. **Alt-Ajanların (Sub-agents) Kullanılamaması:** Hangi bağlamın alt-ajana aktarılacağı ve sonucun nasıl ana modele yedirileceği çok zor olduğu için, modeller alt-ajanları çağırmaktan kaçınıyor.
5. **Mecburi Yeniden Başlatmalar:** Uzun oturumlarda bağlam o kadar kirleniyor ki, çareyi oturumu sıfırlamakta buluyoruz; bu da iyi ve kötü tüm veriyi aynı anda çöpe atıyor.
6. **"Dahili Araç" Tartışması:** Her yeteneğin sisteme gömülü olması, kalıcı bir token yükü yaratıyor.

## Jev Yaklaşımı: Açık ve Tipli Durum Yönetimi (Explicit State)

Makalenin önerdiği çözüm oldukça mantıklı: Bağlamı rastgele biriken bir sohbet geçmişi olmaktan çıkarıp, **"Jev"** adını verdikleri bir karar katmanı ile yönetmek. 

Bu yapıda her bilgi kırıntısı (chunk) ayrı ayrı adreslenebilir tutuluyor. Jev, her adımda şu kararları veriyor: Hangi araç kullanılmalı? Hangi bilgi tam, hangi bilgi sadece özet olarak sunulmalı? Hatta bu komutun çalışmasına izin verilmeli mi? 

En sevdiğim konsept **"Görünürlük Merdiveni" (Visibility Ladder)** oldu. 2400 satırlık bir hata logunu düşünün. Jev, o anki ihtiyaca göre bu logu ya tamamen gizliyor, ya 12 satırlık bir özet olarak gösteriyor ya da tam metin olarak modele sunuyor. Yani bağlamı kalıcı olarak sıkıştırıp yok etmek yerine, **sorguya duyarlı (query-aware)** bir filtreleme yapıyor.

## Parayı Nereye Harcıyoruz?

Makaledeki token kullanım analizi (Microsoft'un fastcontext projesinden de desteklenerek) çok çarpıcı bir gerçeği ortaya koyuyor: Bir kodlama ajanı, token bütçesinin yaklaşık **%60'ını sadece dosya okumak ve arama yapmak** için harcıyor. Kod yazmaya harcanan token oranı ise sadece %4 ila %10 arasında! 

Yani en büyük verimlilik kazancı daha iyi bir dil modeli veya daha iyi bir kod yazma algoritmasından değil, **daha zeki bir bilgi getirme (retrieval)** mimarisinden geçiyor.

**Sonuç olarak;**
Yeni nesil ajan mimarileri, "her şeyi modele yığalım, o halleder" tembelliğinden uzaklaşmak zorunda. Bağlamı (context) kazara biriken bir yığın değil, amaca yönelik inşa edilen dinamik bir yapı olarak ele aldığımızda, bugün "yapay zeka bunu çözemez" dediğimiz birçok sorunun aslında bir mühendislik problemi olduğunu göreceğiz.

Sizin kendi süreçlerinizde veya AI entegrasyonlarınızda yaşadığınız dar boğazlar neler? Kahve eşliğinde tartışmak isterseniz bana LinkedIn üzerinden veya e-posta ile her zaman ulaşabilirsiniz.
