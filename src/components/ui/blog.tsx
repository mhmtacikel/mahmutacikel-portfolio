'use client';
import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Calendar, X } from 'lucide-react';
import { useThemeLang } from '@/contexts/ThemeLangContext';
import { getAllPosts, type BlogPost } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';

export function BlogSection() {
	const { t } = useThemeLang();
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		async function fetchPosts() {
			const allPosts = await getAllPosts();
			setPosts(allPosts);
		}
		fetchPosts();
	}, []);

	// Lock body scroll when modal is open
	useEffect(() => {
		if (selectedPost) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedPost]);

	return (
		<section id="blog" className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.05] dark:via-blue-500/[0.02] to-transparent pointer-events-none transition-colors duration-300" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
						<BookOpen className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
						{t.blog.badge}
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-slate-900 dark:text-slate-50 font-serif">
						{t.blog.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">{t.blog.titleHighlight}</span>
					</h2>
					<p className="text-slate-600 dark:text-slate-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						{t.blog.desc}
					</p>
				</AnimatedContainer>

				<AnimatedContainer delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts.map((post, i) => (
						<article
							key={i}
							onClick={() => setSelectedPost(post)}
							className="cursor-pointer group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-8 transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md dark:shadow-none"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							
							<div className="relative z-20">
								<div className="flex items-center gap-4 mb-6">
									<span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
										{post.category}
									</span>
								</div>
								
								<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight font-serif mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{post.title}
								</h3>
								
								<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light mb-8 line-clamp-3">
									{post.excerpt}
								</p>
							</div>

							<div className="relative z-20 flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
								<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
									<div className="flex items-center gap-1">
										<Calendar className="w-3.5 h-3.5" />
										{post.date}
									</div>
									<div className="flex items-center gap-1">
										<Clock className="w-3.5 h-3.5" />
										{post.readTime}
									</div>
								</div>
								<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-400">
									<ArrowRight className="w-4 h-4" />
								</div>
							</div>
						</article>
					))}
				</AnimatedContainer>
			</div>

			{/* Full Screen Modal for Blog Post */}
			<AnimatePresence>
				{selectedPost && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-900/80 backdrop-blur-sm"
						onClick={() => setSelectedPost(null)}
					>
						<motion.div
							initial={{ y: 50, opacity: 0, scale: 0.95 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							exit={{ y: 20, opacity: 0, scale: 0.95 }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
							className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
						>
							{/* Modal Header */}
							<div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
								<div className="flex items-center gap-4">
									<span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
										{selectedPost.category}
									</span>
									<span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
										<Calendar className="w-4 h-4" /> {selectedPost.date}
									</span>
								</div>
								<button
									onClick={() => setSelectedPost(null)}
									className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
								>
									<X className="w-5 h-5" />
								</button>
							</div>

							{/* Modal Content */}
							<div className="p-6 md:p-10 overflow-y-auto">
								<h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-serif mb-8 leading-tight">
									{selectedPost.title}
								</h1>
								
								<div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-2xl">
									<ReactMarkdown>
										{selectedPost.content}
									</ReactMarkdown>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
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
