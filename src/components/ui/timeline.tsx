'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: "3. Taraf Dış Denetçi (ISO/IEC 27001:2022)",
    company: "Uluslararası Belgelendirme Kuruluşu",
    date: "Aktif",
    type: "Deneyim",
    description: "ISO/IEC 17021-1 ve ISO/IEC 27006 standartlarına uygun olarak ISO 27001:2022 1. Aşama, 2. Aşama, gözetim ve yeniden belgelendirme denetimlerinin sahada yürütülmesi. Çok sayıda firmada SoA, risk işleme planları ve Ek A kontrollerinin tetkik edilmesi.",
    icon: Briefcase
  },
  {
    title: "Kıdemli Yönetim Sistemleri Danışmanı & Denetçi",
    company: "Çeşitli Danışmanlık Firmaları",
    date: "2022 - Devam Ediyor",
    type: "Deneyim",
    description: "50'den fazla kurumda ISO 42001 Yapay Zeka Yönetim Sistemi (YZYS), ISO 27001 BGYS, ISO 27701 (PIMS) kurulumu ve versiyon geçiş projeleri. Farklı sektörlerden yüzlerce firmaya dış denetim ve danışmanlık süreçlerinin yürütülmesi.",
    icon: Briefcase
  },
  {
    title: "Yönetim Sistemleri Danışmanı",
    company: "Teknoloji ve Bilişim Çözümleri",
    date: "2022 - Devam",
    type: "Deneyim",
    description: "Bilişim, teknoloji, finans ve sağlık sektörlerindeki firmalarda ISO 9001, 27001 ve 27701 sistemlerinin uçtan uca kurulumu. Kapsamlı GAP analizleri, risk değerlendirmeleri ve idari/teknik güvenlik politikalarının uygulanması.",
    icon: Briefcase
  },
  {
    title: "ISO/IEC Baş Denetçilik Sertifikaları",
    company: "Uluslararası Onaylı",
    date: "Yetkinlik",
    type: "Sertifika",
    description: "ISO/IEC 27001:2022 BGYS Baş Denetçi, ISO/IEC 42001:2023 Yapay Zeka YS Baş Denetçi, ISO/IEC 27701:2019 PIMS Baş Denetçi, ISO 9001:2015 Baş Denetçi",
    icon: Award
  },
  {
    title: "Lisans - İktisat",
    company: "İktisadi ve İdari Bilimler",
    date: "Eğitim",
    type: "Eğitim",
    description: "Ekonomi, finans ve yönetim organizasyon eğitimleri.",
    icon: GraduationCap
  },
  {
    title: "Ön Lisans - Bilgisayar Programcılığı",
    company: "Bilişim ve Yazılım Teknolojileri",
    date: "Eğitim",
    type: "Eğitim",
    description: "Yazılım algoritmaları, temel programlama ve bilişim altyapıları.",
    icon: GraduationCap
  }
];

export function TimelineSection() {
  return (
    <section id="deneyim" className="py-24 md:py-32 w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" />
      <div className="mx-auto w-full max-w-5xl space-y-16 px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Briefcase className="w-4 h-4 mr-2" />
            Profesyonel Yolculuk
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-50 font-serif">
            Deneyim & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Yetkinlikler</span>
          </h2>
        </AnimatedContainer>

        <div className="relative mt-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-blue-500/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12`}>
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/20 bg-slate-800 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-colors">
        <data.icon size={18} />
      </div>

      {/* Content */}
      <AnimatedContainer 
        delay={0.1} 
        className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md transition-all hover:bg-slate-800 hover:border-blue-500/30 ${isEven ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`flex flex-col sm:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} justify-between mb-2 gap-2`}>
          <div className={`font-serif font-bold text-lg text-slate-50 ${isEven ? 'md:text-right' : 'md:text-left'}`}>{data.title}</div>
          <time className="font-mono text-xs text-blue-300 whitespace-nowrap bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{data.date}</time>
        </div>
        <div className={`text-blue-400 font-medium text-sm mb-3 ${isEven ? 'md:text-right' : 'md:text-left'}`}>{data.company}</div>
        <div className={`text-slate-400 text-sm leading-relaxed font-light ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          {data.description}
        </div>
      </AnimatedContainer>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
