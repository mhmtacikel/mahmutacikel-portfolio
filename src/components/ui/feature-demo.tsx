'use client';
import React from 'react';
import { ShieldCheck, Fingerprint, Bot, RefreshCw, ClipboardCheck, Scale, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { useThemeLang } from '@/contexts/ThemeLangContext';

export default function DemoOne() {
	const { t } = useThemeLang();

	const features = [
		{
			title: t.services.items[0].title,
			icon: ShieldCheck,
			description: t.services.items[0].desc,
		},
		{
			title: t.services.items[1].title,
			icon: Fingerprint,
			description: t.services.items[1].desc,
		},
		{
			title: t.services.items[2].title,
			icon: Bot,
			description: t.services.items[2].desc,
		},
		{
			title: t.services.items[3].title,
			icon: RefreshCw,
			description: t.services.items[3].desc,
		},
		{
			title: t.services.items[4].title,
			icon: ClipboardCheck,
			description: t.services.items[4].desc,
		},
		{
			title: t.services.items[5].title,
			icon: Scale,
			description: t.services.items[5].desc,
		},
	];

	return (
		<section id="hizmetler" className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.05] dark:via-blue-500/[0.02] to-transparent pointer-events-none transition-colors duration-300" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
						<Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
						{t.services.badge}
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 font-serif">
						{t.services.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">{t.services.titleHighlight}</span>
					</h2>
					<p className="text-slate-600 dark:text-slate-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						{t.services.desc}
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.2}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
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
