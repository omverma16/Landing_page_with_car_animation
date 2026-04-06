"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carRef       = useRef<HTMLDivElement>(null);
    const textRef      = useRef<HTMLDivElement>(null);
    const bgRef        = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=2500",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            }
        });

        // Car: rear starts at left edge (x=0), moves to resting point (x=52vw)
        tl.fromTo(
            carRef.current,
            { x: "0vw" },
            { x: "52vw", ease: "none" },
            0
        );

        // Text: clip-path synced with car tail — reveals left to right behind the car
        tl.fromTo(
            textRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 48% 0 0)", ease: "none" },
            0
        );

        // Subtle background parallax
        tl.fromTo(
            bgRef.current,
            { x: "0%" },
            { x: "-6%", ease: "none" },
            0
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative bg-[#020202]">

            <div className="relative h-screen w-full overflow-hidden flex items-center">

                {/* Background grid */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(25,25,25,1)_0%,rgba(0,0,0,1)_100%)]" />
                    <div
                        ref={bgRef}
                        className="absolute inset-[0_-10%] pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(to right,#2a2a2a 1px,transparent 1px),linear-gradient(to bottom,#2a2a2a 1px,transparent 1px)",
                            backgroundSize: "80px 80px",
                            opacity: 0.5,
                        }}
                    />
                </div>

                {/* Text layer — sits behind the car, revealed by scroll */}
                <div
                    ref={textRef}
                    className="absolute inset-0 z-10 pointer-events-none select-none"
                    style={{ clipPath: "inset(0 100% 0 0)" }}
                >
                    <div className="absolute inset-0 flex flex-col justify-center" style={{ paddingLeft: "55px" }}>
                        <h1
                            className="font-[var(--font-bebas-neue)] font-black uppercase text-white leading-[0.85]"
                            style={{ fontSize: "clamp(60px, 10vw, 160px)", letterSpacing: "-0.04em" }}
                        >
                            WELCOME TO<br />
                            <span className="text-[#e8ff00]" style={{ textShadow: "0 0 60px rgba(232,255,0,0.25)" }}>
                                ITZFIZZ
                            </span>
                        </h1>

                        <div className="flex items-center gap-8 mt-10">
                            <div className="h-[2px] w-16 bg-[#e8ff00]" style={{ boxShadow: "0 0 12px #e8ff00" }} />
                            <p
                                className="font-[var(--font-inter)] text-white/40 font-light uppercase tracking-[0.5em]"
                                style={{ fontSize: "clamp(12px, 1.5vw, 22px)" }}
                            >
                                Redefining Velocity
                            </p>
                        </div>
                    </div>
                </div>

                {/* Car layer — sits above the text, acts as a physical mask */}
                <div
                    ref={carRef}
                    className="absolute left-0 top-0 z-20 h-full pointer-events-none will-change-transform"
                    style={{ width: "49.5vw", minWidth: "462px" }}
                >
                    <div className="relative h-full flex items-center">
                        <Image
                            src="/car.png"
                            alt="ItzFizz Supercar"
                            fill
                            priority
                            className="object-contain"
                            style={{ filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.95))" }}
                        />
                        <div
                            className="absolute bottom-[15%] left-1/4 w-1/2 h-16 pointer-events-none"
                            style={{ background: "#e8ff00", opacity: 0.04, filter: "blur(60px)" }}
                        />
                    </div>
                </div>

                {/* Corner UI brackets */}
                <div className="absolute top-10 left-10 z-30 border-l border-t border-white/10 w-8 h-8" />
                <div className="absolute bottom-10 right-10 z-30 border-r border-b border-white/10 w-8 h-8" />

                {/* Scroll hint */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-30">
                    <span className="text-white text-[10px] tracking-[0.4em] uppercase font-[var(--font-inter)]">Scroll</span>
                    <div className="w-[1px] h-8 bg-white/50 animate-pulse" />
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-[#020202] to-transparent z-40 pointer-events-none" />
        </div>
    );
};

export default HeroSection;
