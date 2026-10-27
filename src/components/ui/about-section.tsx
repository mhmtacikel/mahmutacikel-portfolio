'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Building2, Award } from 'lucide-react';
import { useThemeLang } from '@/contexts/ThemeLangContext';

export function AboutSection() {
	const { t } = useThemeLang();

	const stats = [
		{ value: '10+', label: t.about.stats.yoe, icon: Award },
		{ value: '50+', label: t.about.stats.clients, icon: Building2 },
		{ value: '4', label: t.about.stats.standards, icon: ShieldCheck },
	];

	return (
		<section id="hakkimda" className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.05] dark:via-blue-500/[0.02] to-transparent pointer-events-none transition-colors duration-300" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
						<ShieldCheck className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
						{t.about.badge}
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50">
						{t.about.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">{t.about.titleHighlight}</span>{t.about.title2}
					</h2>
				</AnimatedContainer>

				<AnimatedContainer delay={0.2} className="mx-auto max-w-3xl">
					<div className="space-y-6 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-light">
						<p>{t.about.p1}</p>
						<p>{t.about.p2}</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
						{stats.map((stat, i) => (
							<div key={i} className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 text-center transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md dark:shadow-none">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<div className="relative z-20">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
										<stat.icon className="text-blue-600 dark:text-blue-400 group-hover:text-white size-6" strokeWidth={1.5} aria-hidden />
									</div>
									<div className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">{stat.value}</div>
									<div className="text-slate-500 dark:text-slate-400 text-sm font-light mt-1">{stat.label}</div>
								</div>
							</div>
						))}
					</div>
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
