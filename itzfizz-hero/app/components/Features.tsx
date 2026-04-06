"use client";

import React from "react";
import { motion } from "framer-motion";

const Features = () => {
    return (
        <div className="bg-[#050505] text-white">
            {/* Section 1: Performance (Engineered for Speed) */}
            <section className="relative min-h-[120vh] flex flex-col items-center justify-center px-8 md:px-12 py-32 overflow-hidden border-t border-white/5">
                
                {/* Background technical layout */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black tracking-tighter leading-none text-white whitespace-nowrap">
                        PERFORMANCE
                    </div>
                    <div className="absolute top-24 right-24 text-8xl font-black text-[#e8ff00] opacity-20">
                        01
                    </div>
                </div>

                {/* Section Content (Centered) */}
                <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#e8ff00] font-bold uppercase tracking-[0.6em] mb-8 text-xs border-[1px] border-[#e8ff00]/30 px-6 py-2 rounded-full"
                    >
                        Engineering / High Performance
                    </motion.p>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8vw] font-black uppercase mb-12 leading-[0.85] tracking-tighter text-center"
                    >
                        Pure Driving<br/>Instinct
                    </motion.h2>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl text-center mb-24"
                    >
                        Every ItzFizz machine is engineered from the ground up to deliver an unfiltered 
                        connection between driver and road. Maximum response, minimal distraction.
                    </motion.p>

                    {/* Stats Dashboard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border-y-[1px] border-white/5 bg-white/[0.01] backdrop-blur-sm">
                        {[
                            { label: "Acceleration (0-100)", value: "2.1s", unit: "SEC" },
                            { label: "V-Max Velocity", value: "217", unit: "MPH" },
                            { label: "Power to Weight", value: "1:1", unit: "RATIO" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex flex-col items-center justify-center py-12 border-x-[1px] border-white/5 hover:bg-white/[0.02] transition-colors group"
                            >
                                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-4 group-hover:text-[#e8ff00] transition-colors">
                                    // {stat.label}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-6xl md:text-8xl font-black leading-none">{stat.value}</span>
                                    <span className="text-xs text-[#e8ff00] font-bold tracking-widest">{stat.unit}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Technology (Digital Heartbeat) */}
            <section className="relative min-h-[110vh] flex flex-col items-center justify-center px-8 md:px-12 py-32 bg-white text-black overflow-hidden">
                
                {/* Technical Watermark */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black tracking-tighter leading-none text-black whitespace-nowrap">
                        INNOVATION
                    </div>
                </div>
                
                <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        className="h-[1px] bg-black/10 mb-12"
                    />
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-black/40 font-bold uppercase tracking-[0.6em] mb-10 text-xs border-[1px] border-black/10 px-8 py-2 rounded-full"
                    >
                        Innovation / Digital Ecosystem
                    </motion.p>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-black uppercase mb-12 leading-[0.85] tracking-tighter"
                    >
                        The Digital<br/>Heartbeat
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-black/60 font-light leading-relaxed max-w-4xl mb-20"
                    >
                        The cockpit is an extension of the pilot. Integrated telemetry, 
                        haptic controls, and a bespoke OS designed for high-speed clarity.
                    </motion.p>
                    
                    <div className="flex flex-row justify-center gap-20 mt-[300px]">
                        <motion.button 
                            className="btn-premium-3d-black px-12 py-5 font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center min-w-[280px]"
                        >
                            Explore OS
                        </motion.button>
                        <motion.button 
                            className="btn-premium-3d-black px-12 py-5 font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center min-w-[280px]"
                        >
                            Telemetry
                        </motion.button>
                    </div>

                    <div className="absolute top-0 right-0 text-9xl font-black text-black opacity-[0.05] -translate-y-1/2">
                        02
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-8 md:px-[15%] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-2xl font-black tracking-tighter">
                    ITZFIZZ<span className="text-[#e8ff00]">.</span>
                </div>
                <div className="flex gap-10 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">YouTube</a>
                </div>
                <div className="text-gray-600 text-[10px] uppercase tracking-widest">
                    &copy; 2026 ITZFIZZ DIGITAL. ALT RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
};

export default Features;
