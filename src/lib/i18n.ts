export type Language = 'tr' | 'en' | 'de';

export const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      services: 'Hizmetler',
      blog: 'Yayınlar',
      contact: 'İletişim',
      contactBtn: 'İletişime Geç'
    },
    hero: {
      badge: 'ISO 27001 · 27701 · 42001 · 22301 Danışmanlığı',
      title1: 'Güvenliği',
      titleHighlight: 'Standartların',
      title2: 'Ötesine Taşıyın',
      desc: 'Merhaba, ben Mahmut Açıkel. 10 yılı aşkın süredir kurumların bilgi güvenliği, KVKK ve yapay zeka süreçlerini uluslararası standartlara uyumlu hale getirmelerine yardımcı oluyorum. Amacım, güvenliği bir prosedür olmaktan çıkarıp kurumunuza değer katan bir güce dönüştürmek.',
      servicesBtn: 'Hizmetlerimi İncele'
    },
    about: {
      badge: 'Hakkımda',
      title1: 'Güvenlik bir engel değil, ',
      titleHighlight: 'en büyük rekabet avantajınızdır.',
      title2: '',
      p1: "Yıllar boyunca finans, teknoloji, sağlık gibi çok farklı sektörlerde 50'den fazla kurumla çalışma fırsatım oldu. Her kurumun kendine has bir dinamiği ve risk profili var. Bu yüzden hazır şablonlar dayatmak yerine, kurumunuza özel ve gerçekten yaşayan sistemler tasarlıyorum.",
      p2: 'Sadece danışmanlık değil, aynı zamanda uluslararası baş denetçi (Lead Auditor) şapkamla sistemlerinizi masanın diğer tarafından da değerlendiriyorum. Hızla değişen regülasyonlar (KVKK, GDPR, AI Act) karşısında şirketinizin güvende ve yasalara tam uyumlu olmasını sağlıyorum.',
      stats: {
        yoe: 'Yıl Deneyim',
        clients: 'Kurum',
        standards: 'ISO Standardı'
      }
    },
    services: {
      badge: 'Hizmetlerim',
      title1: 'Neler',
      titleHighlight: 'Yapıyorum?',
      desc: 'Bir kurumun bilgi güvenliği veya veri koruma yolculuğunda ihtiyaç duyduğu her adımda yanındayım. İster sistemi sıfırdan kurmak, ister denetime girmeden önce son eksikleri görmek isteyin, doğru adrestesiniz.',
      items: [
        {
          title: 'ISO 27001 Danışmanlığı',
          desc: 'Bilgi Güvenliği Yönetim Sisteminizi (BGYS) sıfırdan kuruyor, risk analizlerini yapıyor ve belgelendirme denetimine sizi eksiksiz hazırlıyorum.'
        },
        {
          title: 'ISO 27701 & KVKK Uyum',
          desc: 'Kişisel verilerin yönetimi artık şakaya gelmiyor. Şirketinizin hem KVKK hem de uluslararası (GDPR) seviyede uyumlu ve güvenli olmasını sağlıyorum.'
        },
        {
          title: 'AI Act & ISO 42001',
          desc: 'Yapay zeka araçları geliştiriyor veya kullanıyorsanız, yepyeni kurallar var. Bu sistemlerin risklerini yönetmeniz ve yeni regülasyonlara uymanız için rehberlik ediyorum.'
        },
        {
          title: 'ISO 22301 İş Sürekliliği',
          desc: 'Kötü bir senaryoda (siber saldırı, doğal afet) işinizin durmaması için iş sürekliliği planlarınızı ve tatbikat süreçlerinizi tasarlıyorum.'
        },
        {
          title: 'Ön Denetim (İç Denetim)',
          desc: 'Dışarıdan bir denetçi gelmeden önce sisteminizi ben denetliyorum. Açıkları bulup raporluyor, asıl denetimden tek seferde geçmeniz için eksikleri gösteriyorum.'
        },
        {
          title: 'Farkındalık Eğitimleri',
          desc: 'Sistem ne kadar iyi olursa olsun, en zayıf halka her zaman insandır. Ekiplerinize bilgi güvenliği ve veri koruma konularında akılda kalıcı eğitimler veriyorum.'
        }
      ]
    },
    portfolio: {
      badge: 'Referanslarım',
      title1: 'Hangi Sektörlere',
      titleHighlight: 'Danışmanlık Veriyorum?',
      desc: 'Bugüne kadar farklı büyüklükte ve farklı sektörden onlarca firmayla çalıştım. Her sektörün güvenlik ihtiyacı bambaşka.'
    },
    blog: {
      badge: 'Yayınlarım',
      title1: 'Sektörel',
      titleHighlight: 'Yazılar & Analizler',
      desc: 'Bilgi güvenliği dünyasındaki yeni gelişmeleri, yapay zeka regülasyonlarını ve denetim tecrübelerimi kendi süzgecimden geçirerek paylaşıyorum.'
    },
    contact: {
      badge: 'İletişim',
      title1: 'Birlikte',
      titleHighlight: 'Çalışalım',
      desc: 'Kurumunuzun güvenlik ve uyum yolculuğunda profesyonel bir destek arıyorsanız, bir kahve içip ihtiyaçlarınızı konuşalım. Bana aşağıdaki kanallardan doğrudan ulaşabilirsiniz.',
      email: 'E-posta',
      emailDesc: 'Projelerinizi konuşmak ve teklif almak için en hızlı iletişim kanalım.',
      linkedin: 'LinkedIn',
      linkedinDesc: 'Geçmiş iş tecrübelerimi incelemek veya ağınızda kalmak için beni ekleyebilirsiniz.',
      github: 'GitHub',
      githubDesc: 'Açık kaynak dünyasındaki paylaşımlarıma buradan göz atabilirsiniz.'
    },
    footer: {
      services: 'Hizmetler',
      corporate: 'Kurumsal',
      rights: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
      contactBtn: 'Get in Touch'
    },
    hero: {
      badge: 'ISO 27001 · 27701 · 42001 · 22301 Consulting',
      title1: 'Take Security',
      titleHighlight: 'Beyond',
      title2: 'Standards',
      desc: 'Hi, I\'m Mahmut Açıkel. For over 10 years, I\'ve been helping organizations align their information security, data privacy, and AI processes with international standards. My goal is to transform compliance from a mere checklist into a true asset for your business.',
      servicesBtn: 'View Services'
    },
    about: {
      badge: 'About Me',
      title1: 'Security is not a hurdle, it\'s your ',
      titleHighlight: 'biggest competitive advantage.',
      title2: '',
      p1: 'Over the years, I\'ve had the opportunity to work with more than 50 organizations across diverse sectors like finance, tech, and healthcare. Every company has a unique culture and risk profile. That\'s why I design tailored, living systems rather than forcing generic templates.',
      p2: 'As a certified Lead Auditor, I don\'t just consult; I evaluate your systems from the other side of the table. Whether it\'s GDPR or the new AI Act, I ensure your company remains secure, compliant, and ready for the future.',
      stats: {
        yoe: 'Years Experience',
        clients: 'Clients',
        standards: 'ISO Standards'
      }
    },
    services: {
      badge: 'My Services',
      title1: 'What',
      titleHighlight: 'I Do',
      desc: 'I am here at every step of your organization\'s information security or data protection journey. Whether you need to build a system from scratch or want a pre-audit check, you\'re at the right place.',
      items: [
        {
          title: 'ISO 27001 Consulting',
          desc: 'I build your Information Security Management System (ISMS) from the ground up, conduct risk analyses, and prepare you thoroughly for certification audits.'
        },
        {
          title: 'ISO 27701 & GDPR Compliance',
          desc: 'Managing personal data is serious business. I ensure your company is compliant and secure on an international (GDPR) level.'
        },
        {
          title: 'AI Act & ISO 42001',
          desc: 'If you develop or use AI tools, there are new rules. I guide you in managing the risks of these systems and complying with new regulations.'
        },
        {
          title: 'ISO 22301 Business Continuity',
          desc: 'I design your business continuity plans and drill processes so your business doesn\'t stop in a worst-case scenario (cyber attack, natural disaster).'
        },
        {
          title: 'Pre-Audit (Internal Audit)',
          desc: 'I audit your system before an external auditor arrives. I find vulnerabilities, report them, and show you the gaps so you pass the real audit on the first try.'
        },
        {
          title: 'Awareness Training',
          desc: 'No matter how good the system is, humans are always the weakest link. I provide memorable training on information security and data protection for your teams.'
        }
      ]
    },
    portfolio: {
      badge: 'References',
      title1: 'Industries',
      titleHighlight: 'I Advise',
      desc: 'I have worked with dozens of companies of different sizes and from various sectors. Every industry has unique security needs.'
    },
    blog: {
      badge: 'Publications',
      title1: 'Industry',
      titleHighlight: 'Insights & Analysis',
      desc: 'I share new developments in the information security world, AI regulations, and my auditing experiences through my own perspective.'
    },
    contact: {
      badge: 'Contact',
      title1: 'Let\'s',
      titleHighlight: 'Work Together',
      desc: 'If you are looking for professional support in your organization\'s security and compliance journey, let\'s grab a coffee and discuss your needs. You can reach me directly through the channels below.',
      email: 'Email',
      emailDesc: 'The fastest communication channel to discuss your projects and get a quote.',
      linkedin: 'LinkedIn',
      linkedinDesc: 'Connect with me to review my past work experiences or stay in my network.',
      github: 'GitHub',
      githubDesc: 'You can browse my contributions and posts in the open-source world here.'
    },
    footer: {
      services: 'Services',
      corporate: 'Corporate',
      rights: 'All rights reserved.'
    }
  },
  de: {
    nav: {
      about: 'Über mich',
      services: 'Dienstleistungen',
      blog: 'Blog',
      contact: 'Kontakt',
      contactBtn: 'Kontakt aufnehmen'
    },
    hero: {
      badge: 'ISO 27001 · 27701 · 42001 · 22301 Beratung',
      title1: 'Sicherheit',
      titleHighlight: 'über Standards',
      title2: 'hinaus',
      desc: 'Hallo, ich bin Mahmut Açıkel. Seit über 10 Jahren helfe ich Unternehmen dabei, ihre Informationssicherheit, ihren Datenschutz und ihre KI-Prozesse an internationale Standards anzupassen. Mein Ziel ist es, Compliance in einen echten Mehrwert für Ihr Unternehmen zu verwandeln.',
      servicesBtn: 'Leistungen ansehen'
    },
    about: {
      badge: 'Über mich',
      title1: 'Sicherheit ist kein Hindernis, sondern Ihr ',
      titleHighlight: 'größter Wettbewerbsvorteil.',
      title2: '',
      p1: 'Im Laufe der Jahre hatte ich die Gelegenheit, mit mehr als 50 Unternehmen in verschiedenen Sektoren wie Finanzen, Technologie und Gesundheitswesen zusammenzuarbeiten. Jedes Unternehmen hat ein einzigartiges Risikoprofil. Deshalb entwerfe ich maßgeschneiderte Systeme anstatt Standardvorlagen zu verwenden.',
      p2: 'Als zertifizierter Lead Auditor berate ich nicht nur, ich bewerte Ihre Systeme auch von der anderen Seite des Tisches. Ob DSGVO oder der neue AI Act – ich sorge dafür, dass Ihr Unternehmen sicher und zukunftsorientiert bleibt.',
      stats: {
        yoe: 'Jahre Erfahrung',
        clients: 'Kunden',
        standards: 'ISO-Standards'
      }
    },
    services: {
      badge: 'Meine Dienstleistungen',
      title1: 'Was',
      titleHighlight: 'ich tue',
      desc: 'Ich begleite Ihr Unternehmen auf jedem Schritt im Bereich Informationssicherheit oder Datenschutz. Egal, ob Sie ein System von Grund auf neu aufbauen oder eine Vorprüfung vor dem Audit wünschen, hier sind Sie richtig.',
      items: [
        {
          title: 'ISO 27001 Beratung',
          desc: 'Ich baue Ihr Informationssicherheits-Managementsystem (ISMS) von Grund auf auf, führe Risikoanalysen durch und bereite Sie umfassend auf Zertifizierungsaudits vor.'
        },
        {
          title: 'ISO 27701 & DSGVO Compliance',
          desc: 'Der Umgang mit personenbezogenen Daten ist ernst. Ich sorge dafür, dass Ihr Unternehmen auf internationaler (DSGVO) Ebene konform und sicher ist.'
        },
        {
          title: 'AI Act & ISO 42001',
          desc: 'Wenn Sie KI-Tools entwickeln oder nutzen, gibt es neue Regeln. Ich begleite Sie dabei, die Risiken dieser Systeme zu managen und neue Vorschriften einzuhalten.'
        },
        {
          title: 'ISO 22301 Business Continuity',
          desc: 'Ich entwerfe Ihre Business-Continuity-Pläne und Übungsprozesse, damit Ihr Geschäft im schlimmsten Fall (Cyberangriff, Naturkatastrophe) nicht zum Erliegen kommt.'
        },
        {
          title: 'Pre-Audit (Internes Audit)',
          desc: 'Ich auditiere Ihr System, bevor ein externer Auditor kommt. Ich finde Schwachstellen, melde sie und zeige Ihnen die Lücken auf, damit Sie das eigentliche Audit beim ersten Mal bestehen.'
        },
        {
          title: 'Awareness-Schulung',
          desc: 'Egal wie gut das System ist, der Mensch ist immer das schwächste Glied. Ich biete Ihren Teams einprägsame Schulungen zu Informationssicherheit und Datenschutz.'
        }
      ]
    },
    portfolio: {
      badge: 'Referenzen',
      title1: 'Branchen',
      titleHighlight: 'die ich berate',
      desc: 'Ich habe mit Dutzenden von Unternehmen unterschiedlicher Größe und aus verschiedenen Sektoren zusammengearbeitet. Jede Branche hat einzigartige Sicherheitsanforderungen.'
    },
    blog: {
      badge: 'Publikationen',
      title1: 'Branchen-',
      titleHighlight: 'Einblicke & Analysen',
      desc: 'Ich teile neue Entwicklungen in der Welt der Informationssicherheit, KI-Vorschriften und meine Prüfungserfahrungen aus meiner eigenen Perspektive.'
    },
    contact: {
      badge: 'Kontakt',
      title1: 'Lassen Sie uns',
      titleHighlight: 'zusammenarbeiten',
      desc: 'Wenn Sie professionelle Unterstützung auf der Sicherheits- und Compliance-Reise Ihres Unternehmens suchen, lassen Sie uns einen Kaffee trinken und Ihre Bedürfnisse besprechen. Sie können mich direkt über die untenstehenden Kanäle erreichen.',
      email: 'E-Mail',
      emailDesc: 'Der schnellste Kommunikationskanal, um Ihre Projekte zu besprechen und ein Angebot zu erhalten.',
      linkedin: 'LinkedIn',
      linkedinDesc: 'Vernetzen Sie sich mit mir, um meine bisherigen Berufserfahrungen einzusehen oder in meinem Netzwerk zu bleiben.',
      github: 'GitHub',
      githubDesc: 'Hier können Sie meine Beiträge und Posts in der Open-Source-Welt durchsuchen.'
    },
    footer: {
      services: 'Dienstleistungen',
      corporate: 'Unternehmen',
      rights: 'Alle Rechte vorbehalten.'
    }
  }
};
