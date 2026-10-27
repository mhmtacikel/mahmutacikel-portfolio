'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { useThemeLang } from '@/contexts/ThemeLangContext';

const projects = [
	{
		title: 'Finans & Bankacılık Sektörü',
		description: 'Önde gelen finans kurumları için regülasyonlara (BDDK, KVKK, GDPR) tam uyumlu, yüksek güvenlikli ISO 27001 Bilgi Güvenliği Yönetim Sistemi kurulumu ve iç denetim hizmetleri.',
		tags: ['ISO 27001', 'BDDK', 'KVKK', 'GDPR'],
	},
	{
		title: 'Sağlık & İlaç Sektörü',
		description: 'Hassas sağlık verilerinin (özel nitelikli kişisel veriler) işlendiği sağlık kuruluşlarında ISO 27701 PIMS kurulumu, veri sızıntısı önleme ve risk değerlendirme danışmanlığı.',
		tags: ['ISO 27701', 'Sağlık Verileri', 'Risk Analizi'],
	},
	{
		title: 'Teknoloji & Yazılım Şirketleri',
		description: 'Yapay zeka çözümleri geliştiren teknoloji firmaları için AI Act uyum süreçlerinin tasarlanması, bulut güvenliği mimarisi ve ISO 42001 (Yapay Zeka Yönetim Sistemi) hazırlıkları.',
		tags: ['AI Act', 'ISO 42001', 'Bulut Güvenliği'],
	},
	{
		title: 'Üretim & Sanayi',
		description: 'Kritik üretim tesisleri ve tedarik zincirleri için ISO 22301 İş Sürekliliği Yönetim Sistemi kurulumu. Olası kriz anlarında kesintisiz operasyon için tatbikat planlaması.',
		tags: ['ISO 22301', 'İş Sürekliliği', 'Kriz Yönetimi'],
	},
	{
		title: 'E-Ticaret & Perakende',
		description: 'Milyonlarca müşterinin verisini işleyen e-ticaret platformları için KVKK aydınlatma süreçleri, veri envanteri oluşturma ve güvenli ödeme altyapıları (PCI DSS) uyum denetimleri.',
		tags: ['KVKK', 'PCI DSS', 'E-Ticaret'],
	},
	{
		title: 'Kamu Kurumları',
		description: 'Cumhurbaşkanlığı Dijital Dönüşüm Ofisi (DDO) Bilgi ve İletişim Güvenliği Rehberi uyum çalışmaları, siber güvenlik olgunluk testi ve resmi kurum denetimleri.',
		tags: ['DDO Rehberi', 'Siber Güvenlik', 'Kamu'],
	},
];

export function PortfolioSection() {
	const { t } = useThemeLang();

	return (
		<section id="referanslar" className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.05] dark:via-blue-500/[0.02] to-transparent pointer-events-none transition-colors duration-300" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
						<Briefcase className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
						{t.portfolio.badge}
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 font-serif">
						{t.portfolio.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">{t.portfolio.titleHighlight}</span>
					</h2>
					<p className="text-slate-600 dark:text-slate-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						{t.portfolio.desc}
					</p>
				</AnimatedContainer>

				<AnimatedContainer delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, i) => (
						<div
							key={i}
							className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md dark:shadow-none"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							
							<div className="relative z-20 flex flex-col h-full justify-between">
								<div>
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight font-serif">{project.title}</h3>
										<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
											<ArrowUpRight className="size-5" />
										</div>
									</div>
									<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light mb-8">
										{project.description}
									</p>
								</div>
								
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, j) => (
										<span key={j} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
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
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
