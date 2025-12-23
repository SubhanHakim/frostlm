import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Art } from '../components/sections/Art';
import { Support } from '../components/sections/Support';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

export function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-[1024px] mx-auto min-h-screen flex flex-col pt-24 pb-8 px-5">

                {/* Header Meta */}
                <header className="text-center mb-16">
                    <h1 className="uppercase text-residue-dim text-[0.8rem] tracking-[0.2rem] font-light">
                        System_Event: Holiday_Sequence_End
                    </h1>
                </header>

                <main className="flex-grow">
                    <Hero />
                    <About />
                    <Art />
                    <Support />
                </main>

                <Footer />
            </div>
        </>
    );
}
