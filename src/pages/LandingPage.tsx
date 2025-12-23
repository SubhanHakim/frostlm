import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Art } from '../components/sections/Art';
import { Support } from '../components/sections/Support';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

export function LandingPage() {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <>
            <Navbar lenis={lenis} />
            <div className="max-w-[1024px] mx-auto min-h-screen flex flex-col pt-24 pb-8 px-5">

                {/* Header Meta */}
                <header className="text-center mb-16">
                    <h1 className="uppercase text-residue-dim text-[0.8rem] tracking-[0.2rem] font-light">
                        System_Event: FROSTLM_INITIALIZED
                    </h1>
                </header>

                <main className="flex-grow">
                    <Hero lenis={lenis} />
                    <About />
                    <Art />
                    <Support />
                </main>

                <Footer />
            </div>
        </>
    );
}
