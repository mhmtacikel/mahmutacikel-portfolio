import { useEffect, useState } from "react";
import { Globe, Moon, Sun } from "lucide-react";
import { useThemeLang } from "@/contexts/ThemeLangContext";
import { getAllPosts, type BlogPost } from "@/lib/markdown";
import { Chatbot } from "@/components/ui/chatbot";

const sectors = [
  ["Finans & Bankacılık Sektörü", "Önde gelen finans kurumları için regülasyonlara (BDDK, KVKK, GDPR) tam uyumlu, yüksek güvenlikli ISO 27001 Bilgi Güvenliği Yönetim Sistemi kurulumu ve iç denetim hizmetleri.", ["ISO 27001", "BDDK", "KVKK", "GDPR"]],
  ["Sağlık & İlaç Sektörü", "Hassas sağlık verilerinin (özel nitelikli kişisel veriler) işlendiği sağlık kuruluşlarında ISO 27701 PIMS kurulumu, veri sızıntısı önleme ve risk değerlendirme danışmanlığı.", ["ISO 27701", "Sağlık Verileri", "Risk Analizi"]],
  ["Teknoloji & Yazılım Şirketleri", "Yapay zeka çözümleri geliştiren teknoloji firmaları için AI Act uyum süreçlerinin tasarlanması, bulut güvenliği mimarisi ve ISO 42001 (Yapay Zeka Yönetim Sistemi) hazırlıkları.", ["AI Act", "ISO 42001", "Bulut Güvenliği"]],
  ["Üretim & Sanayi", "Kritik üretim tesisleri ve tedarik zincirleri için ISO 22301 İş Sürekliliği Yönetim Sistemi kurulumu. Olası kriz anlarında kesintisiz operasyon için tatbikat planlaması.", ["ISO 22301", "İş Sürekliliği", "Kriz Yönetimi"]],
  ["E-Ticaret & Perakende", "Milyonlarca müşterinin verisini işleyen e-ticaret platformları için KVKK aydınlatma süreçleri, veri envanteri oluşturma ve güvenli ödeme altyapıları (PCI DSS) uyum denetimleri.", ["KVKK", "PCI DSS", "E-Ticaret"]],
  ["Kamu Kurumları", "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi (DDO) Bilgi ve İletişim Güvenliği Rehberi uyum çalışmaları, siber güvenlik olgunluk testi ve resmi kurum denetimleri.", ["DDO Rehberi", "Siber Güvenlik", "Kamu"]],
];

function Header() {
  const { theme, toggleTheme, lang, setLang, t } = useThemeLang();
  return (
    <header className="site-header">
      <a className="wordmark" href="#baslangic" aria-label="Mahmut Açıkel ana sayfa"><span className="wordmark-mark">MA</span><span>Mahmut Açıkel</span></a>
      <nav className="main-nav" aria-label="Ana navigasyon">
        <a href="#hakkimda">{t.nav.about}</a><a href="#hizmetler">{t.nav.services}</a><a href="#sektorler">Referanslar</a><a href="#yayinlar">{t.nav.blog}</a><a href="#iletisim">{t.nav.contact}</a>
      </nav>
      <div className="header-tools">
        <button className="theme-button" onClick={toggleTheme} aria-label="Temayı değiştir">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
        <div className="language-switcher"><Globe size={15} />{(["tr", "en", "de"] as const).map((option) => <button key={option} className={lang === option ? "active" : ""} onClick={() => setLang(option)}>{option.toUpperCase()}</button>)}</div>
      </div>
    </header>
  );
}

function Label({ children }: { children: React.ReactNode }) { return <p className="section-label">{children}</p>; }

function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selected, setSelected] = useState<BlogPost | null>(null);
  useEffect(() => { getAllPosts().then(setPosts).catch((error) => console.error("Yayınlar yüklenemedi:", error)); }, []);
  return (
    <>
      <div className="post-list">
        {posts.map((post) => <button className="post-row" key={post.slug} onClick={() => setSelected(post)}><span>{post.date}</span><strong>{post.title}</strong><em>{post.readTime}</em></button>)}
      </div>
      {selected && <div className="post-modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><article onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}>Kapat ×</button><p className="section-label">{selected.category} · {selected.date}</p><h2>{selected.title}</h2><div className="post-content">{selected.content}</div></article></div>}
    </>
  );
}

export default function App() {
  const { t } = useThemeLang();
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section id="baslangic" className="hero content-width">
          <div className="hero-copy"><p className="eyebrow">{t.hero.badge}</p><h1>{t.hero.title1} <span>{t.hero.titleHighlight}</span> {t.hero.title2}</h1><p className="hero-lede">{t.hero.desc}</p><div className="hero-actions"><a className="button button-primary" href="#iletisim">{t.nav.contactBtn}</a><a className="button button-text" href="#hizmetler">{t.hero.servicesBtn}</a></div></div>
          <aside className="field-note"><span className="field-note-index">01 / yaklaşım</span><p>Önce dinlerim.</p><p>Sorunları ve problemleri tespit eder, çözüm odaklı ilerlerim.</p></aside>
        </section>

        <section id="hakkimda" className="note-section content-width split-section"><div><Label>{t.about.badge}</Label><h2>{t.about.title1}<span>{t.about.titleHighlight}</span></h2></div><div className="section-copy"><p>{t.about.p1}</p><p>{t.about.p2}</p><div className="stats-row"><strong>10+<small>{t.about.stats.yoe}</small></strong><strong>50+<small>{t.about.stats.clients}</small></strong><strong>4<small>{t.about.stats.standards}</small></strong></div></div></section>

        <section id="hizmetler" className="services-section"><div className="content-width"><Label>{t.services.badge}</Label><div className="section-heading-row"><h2>{t.services.title1} <span>{t.services.titleHighlight}</span></h2><p>{t.services.desc}</p></div><div className="service-list">{t.services.items.map((item, index) => <article className="service-row" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>

        <section id="sektorler" className="note-section content-width"><Label>{t.portfolio.badge}</Label><div className="section-heading-row"><h2>{t.portfolio.title1} <span>{t.portfolio.titleHighlight}</span></h2><p>{t.portfolio.desc}</p></div><div className="sector-list">{sectors.map(([title, description, tags]) => <article key={title as string}><h3>{title}</h3><p>{description}</p><div>{(tags as string[]).map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section id="yayinlar" className="note-section content-width"><Label>{t.blog.badge}</Label><div className="section-heading-row"><h2>{t.blog.title1} <span>{t.blog.titleHighlight}</span></h2><p>{t.blog.desc}</p></div><BlogList /></section>

        <section id="iletisim" className="contact-section content-width"><div><Label>{t.contact.badge}</Label><h2>{t.contact.title1} <span>{t.contact.titleHighlight}</span></h2><p className="contact-lede">{t.contact.desc}</p></div><div className="contact-links"><a href="mailto:info@mahmutacikel.com"><span>{t.contact.email}</span><strong>info@mahmutacikel.com</strong><small>{t.contact.emailDesc}</small></a><a href="https://www.linkedin.com/in/mahmut-acikel/" target="_blank" rel="noreferrer"><span>{t.contact.linkedin}</span><strong>linkedin.com/in/mahmut-acikel</strong><small>{t.contact.linkedinDesc}</small></a><a href="https://github.com/mhmtacikel" target="_blank" rel="noreferrer"><span>{t.contact.github}</span><strong>github.com/mhmtacikel</strong><small>{t.contact.githubDesc}</small></a></div></section>
      </main>
      <footer className="site-footer content-width"><span>Mahmut Açıkel</span><span>© {new Date().getFullYear()} · {t.footer.rights}</span></footer>
      <Chatbot />
    </div>
  );
}
