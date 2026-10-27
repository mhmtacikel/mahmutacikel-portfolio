'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useThemeLang } from "@/contexts/ThemeLangContext";
 
export function SplineSceneBasic() {
  const { t } = useThemeLang();

  return (
    <div className="w-full min-h-[740px] md:min-h-[620px] lg:h-[620px] relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl shadow-2xl shadow-blue-900/5 dark:shadow-blue-900/20 transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#3b82f6"
      />
      
      <div className="flex flex-col md:flex-row w-full flex-1 relative z-10">
        {/* Left content */}
        <div className="flex-none md:flex-1 p-6 pt-10 pb-6 sm:p-8 md:px-10 md:py-10 lg:px-14 lg:py-12 relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-200 text-[11px] sm:text-xs font-medium mb-5 backdrop-blur-md justify-center md:justify-start"
          >
            <span className="w-2 h-2 shrink-0 rounded-full bg-blue-500 animate-pulse" />
            <span className="truncate">{t.hero.badge}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0.01, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
            className="max-w-xl text-4xl sm:text-5xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight leading-[1.04]"
          >
            <span className="block">{t.hero.title1}</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">{t.hero.titleHighlight}</span> {t.hero.title2}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-slate-600 dark:text-slate-400 max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-[15px] md:text-base leading-7 font-light"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex w-full max-w-md flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <a href="#iletisim" className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
              <span className="relative z-10">{t.nav.contactBtn}</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#hizmetler" className="w-full sm:w-auto px-8 py-3.5 text-center text-sm font-medium text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {t.hero.servicesBtn}
            </a>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[450px] sm:min-h-[500px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none md:hidden" />
          <SplineScene 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
