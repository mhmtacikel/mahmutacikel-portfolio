'use client'

import { ShieldCheck, Lock, Fingerprint, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const particles = [
  { left: '22%', top: '28%', delay: 0 },
  { left: '72%', top: '22%', delay: 0.8 },
  { left: '28%', top: '72%', delay: 1.6 },
  { left: '78%', top: '68%', delay: 2.2 },
  { left: '52%', top: '18%', delay: 0.4 },
  { left: '48%', top: '82%', delay: 1.9 },
  { left: '15%', top: '50%', delay: 1.1 },
  { left: '85%', top: '45%', delay: 2.8 },
]

export function SplineScene({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background radial glow */}
      <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-[100px] animate-pulse dark:from-blue-500/15 dark:via-blue-400/5" />
      
      <div className="absolute w-48 h-48 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-[80px] animate-pulse bottom-10 right-10 dark:from-blue-600/15" style={{ animationDelay: '2s' }} />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-20 transition-opacity duration-300"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Orbital rings */}
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/20 dark:border-blue-400/15 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-blue-500/15 dark:border-blue-400/10"
        style={{ transform: 'perspective(400px) rotateX(60deg) rotateY(-10deg)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full border border-blue-500/10 dark:border-blue-400/6"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting Icons */}
      <motion.div
        className="absolute w-64 h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 shadow-lg text-blue-500">
          <Lock className="w-4 h-4" />
        </div>
      </motion.div>
      <motion.div
        className="absolute w-72 h-72"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 shadow-lg text-blue-500">
          <Fingerprint className="w-4 h-4" />
        </div>
      </motion.div>
      <motion.div
        className="absolute w-52 h-52"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 shadow-lg text-blue-500">
          <Search className="w-3 h-3" />
        </div>
      </motion.div>

      {/* Central Shield */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-md shadow-2xl shadow-blue-500/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
          <ShieldCheck className="relative z-10 w-24 h-24 text-blue-600 dark:text-blue-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" strokeWidth={1.2} />
        </motion.div>

        {/* Expanding pulse rings */}
        <motion.div
          className="absolute -inset-4 rounded-full border border-blue-500/20 dark:border-blue-400/15"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-10 rounded-full border border-blue-500/15 dark:border-blue-400/8"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.div
          className="absolute -inset-16 rounded-full border border-blue-500/10 dark:border-blue-400/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/40 dark:bg-blue-400/40 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -28, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3.5 + (i % 3) * 0.8,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Scanning line */}
      <motion.div
        className="absolute left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/35 to-transparent"
        animate={{ top: ['12%', '88%', '12%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
