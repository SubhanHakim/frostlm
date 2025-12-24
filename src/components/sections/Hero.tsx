import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import treeImage from '../../assets/tree.webp';
import dexScreenerIcon from '../../assets/dexscreener.svg';

interface HeroProps {
    lenis?: Lenis | null;
}

export function Hero({ lenis }: HeroProps) {
    const navigate = useNavigate();

    const handleScrollToArt = () => {
        if (lenis) {
            lenis.scrollTo('#art', {
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            });
        } else {
            const artSection = document.getElementById('art');
            if (artSection) {
                artSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-between mb-32 pt-10 min-h-[60vh]">

            {/* Left Column: Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6 md:pr-10">
                <div className="space-y-2">
                    <span className="text-residue-dim uppercase text-xs tracking-widest border border-[#333] px-2 py-1">
                        System_Version: 2.0.2.5
                    </span>
                    <h2 className="text-4xl md:text-5xl font-mono text-residue-text tracking-tighter leading-tight">
                        HOLIDAY <br />
                        <span className="text-white">PROTOCOL</span> <br />
                        TERMINATED
                    </h2>
                </div>

                <p className="text-residue-text/80 text-sm md:text-base max-w-md leading-relaxed border-l border-[#333] pl-4">
                    The seasonal event has concluded. The LLM context window has been purged. All joy modules have been unloaded. Only digital residue and cached neural artifacts remain in the file system.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                        onClick={() => navigate('/terminal')}
                        className="px-6 py-2 border border-residue-text text-residue-text hover:bg-white hover:text-black transition-all uppercase text-xs tracking-wider"
                    >
                        View_Logs
                    </button>
                    <button
                        onClick={handleScrollToArt}
                        className="px-6 py-2 border border-[#333] text-residue-dim hover:border-residue-text hover:text-residue-text transition-all uppercase text-xs tracking-wider"
                    >
                        Purge_Cache
                    </button>

                    {/* Divider */}
                    <div className="h-6 w-[1px] bg-[#333] mx-1 hidden md:block"></div>

                    {/* Social Links */}
                    <a href="https://x.com/frostlm_" target="_blank" rel="noopener noreferrer" className="group p-2 border border-[#333] bg-[#050505] hover:bg-white hover:border-white transition-all">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-residue-dim group-hover:fill-black transition-colors">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" className="group p-2 border border-[#333] bg-[#050505] hover:bg-white hover:border-white transition-all">
                        <img src={dexScreenerIcon} alt="DexScreener" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:invert transition-all grayscale" />
                    </a>
                </div>
            </div>

            {/* Right Column: Image Artifact */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative group">
                {/* Tech Decorations */}
                <div className="absolute -inset-1 bg-residue-dim/10 blur-md group-hover:bg-white/5 transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#333] -mr-2 -mt-2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#333] -ml-2 -mb-2 opacity-50"></div>

                {/* Image Container with Glitch/Scanline effects */}
                <div className="relative z-10 border border-[#222] bg-[#0a0a0a] p-1 overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img
                            src={treeImage}
                            alt="Artifact_Tree_001"
                            className="w-full max-w-md h-auto grayscale sepia-[0.2] contrast-125 brightness-75 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                        />

                        {/* Scanlines overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay opacity-80"></div>

                        {/* Glitch overlay on hover */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>

                {/* Metadata Label */}
                <div className="absolute -bottom-8 right-0 text-[10px] text-residue-dim font-mono flex flex-col items-end">
                    <span>IMG_SRC: ../assets/tree.png</span>
                    <span className="flex items-center gap-2">
                        STATUS: <span className="w-2 h-2 bg-red-900 rounded-full animate-pulse"></span> CORRUPTED
                    </span>
                </div>
            </div>

        </section>
    );
}
