'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, Mail, ArrowUpRight } from 'lucide-react';
import { useThemeLang } from '@/contexts/ThemeLangContext';

interface FooterLink {
	title: string;
	href: string;
}

interface FooterSection {
	labelKey: 'services' | 'corporate';
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		labelKey: 'services',
		links: [
			{ title: 'ISO 27001', href: '#hizmetler' },
			{ title: 'ISO 27701 & KVKK', href: '#hizmetler' },
			{ title: 'ISO 42001 & AI Act', href: '#hizmetler' },
			{ title: 'ISO 22301', href: '#hizmetler' },
		],
	},
	{
		labelKey: 'corporate',
		links: [
			{ title: 'Hakkımda', href: '#hakkimda' },
			{ title: 'Yayınlar', href: '#blog' },
			{ title: 'İletişim', href: '#iletisim' },
		],
	},
];

export function Footer() {
	const { t } = useThemeLang();

	return (
		<footer className="relative w-full mt-32 overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/[0.05] dark:to-blue-500/[0.02] pointer-events-none" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-blue-500/[0.05] blur-[100px] rounded-full pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
					<AnimatedContainer className="lg:col-span-2 space-y-8">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/20">
								<span className="text-white font-bold text-lg tracking-tighter">MA</span>
							</div>
							<span className="text-slate-900 dark:text-slate-50 font-bold text-2xl tracking-tight font-serif">Mahmut Açıkel</span>
						</div>
						<p className="text-slate-600 dark:text-slate-400 text-base max-w-sm leading-relaxed font-light">
							{t.hero.desc}
						</p>
						<div className="flex items-center gap-4 pt-4">
							<a href="mailto:info@mahmutacikel.com" aria-label="E-posta" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 dark:text-blue-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
								<Mail className="size-4" />
							</a>
							<a href="https://www.linkedin.com/in/mahmut-acikel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 dark:text-blue-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
								<LinkedinIcon className="size-4" />
							</a>
							<a href="https://github.com/mhmtacikel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 dark:text-blue-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
								<GithubIcon className="size-4" />
							</a>
						</div>
					</AnimatedContainer>

					<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-8">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.labelKey} delay={0.1 + index * 0.1}>
								<h3 className="text-sm text-slate-900 dark:text-slate-50 font-semibold tracking-wider font-serif">{t.footer[section.labelKey]}</h3>
								<ul className="mt-6 space-y-4">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="group inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-light"
											>
												{link.title}
												<ArrowUpRight className="size-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
											</a>
										</li>
									))}
								</ul>
							</AnimatedContainer>
						))}
					</div>
				</div>

				<AnimatedContainer delay={0.4} className="mt-24 pt-8 border-t border-slate-300 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-slate-500 dark:text-slate-500 text-sm font-light">
						© {new Date().getFullYear()} Mahmut Açıkel. {t.footer.rights}
					</p>
					<div className="flex items-center gap-6 text-sm font-light text-slate-500">
						<a href="mailto:info@mahmutacikel.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">info@mahmutacikel.com</a>
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
	key?: string | number;
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
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
