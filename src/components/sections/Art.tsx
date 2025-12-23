import art1 from '../../assets/art/art1.png';
import art2 from '../../assets/art/art2.png';
import art3 from '../../assets/art/art3.png';
import art4 from '../../assets/art/art4.png';
import art5 from '../../assets/art/art5.png';

const ARTIFACTS = [
    { id: '0x8F2A', src: art1, title: 'Winter_Solstice', status: 'RECOVERED', integrity: '89%' },
    { id: '0x9B3C', src: art2, title: 'Silent_Night', status: 'FRAGMENTED', integrity: '74%' },
    { id: '0xA1D4', src: art3, title: 'Frost_Byte', status: 'CORRUPTED', integrity: '45%' },
    { id: '0xB2E5', src: art4, title: 'North_Star', status: 'RECOVERED', integrity: '92%' },
    { id: '0xC3F6', src: art5, title: 'Deer_Protocol', status: 'DECAYING', integrity: '33%' },
    { id: '0xD4G7', src: art1, title: 'Cold_Snap', status: 'LOCKED', integrity: '12%' },
    { id: '0xE5H8', src: art2, title: 'Zero_Kelvin', status: 'RECOVERED', integrity: '98%' },
    { id: '0xF6I9', src: art3, title: 'Void_Present', status: 'UNKNOWN', integrity: '0%' },
];

export function Art() {
    return (
        <section id="art" className="mb-32">

            {/* Section Header */}
            <div className="flex items-end justify-between mb-12 border-b border-[#222] pb-4">
                <div>
                    <span className="text-residue-dim text-xs tracking-widest block mb-2">// GALLERY_VIEW</span>
                    <h2 className="text-3xl text-white font-mono uppercase">Recovered_Artifacts</h2>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-xs text-residue-dim">TOTAL_ITEMS: {ARTIFACTS.length}</p>
                    <p className="text-xs text-residue-dim">GRID_SYSTEM: 4x2</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ARTIFACTS.map((artifact) => (
                    /* Art Card */
                    <div key={artifact.id} className="relative w-full border border-[#222] bg-[#080808] p-1 group flex flex-col">

                        {/* Decoration Lines */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-white/20"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-white/20"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20"></div>

                        {/* Image Container - Aspect Square for Grid Uniformity */}
                        <div className="relative overflow-hidden w-full aspect-[4/5] bg-black">

                            {/* The Artwork */}
                            <img
                                src={artifact.src}
                                alt={artifact.title}
                                className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.05]"
                            />

                            {/* Scanlines Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay opacity-60"></div>

                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mix-blend-overlay z-20"></div>

                            {/* Status Badge - Compact */}
                            <div className="absolute top-2 right-2 bg-black/80 backdrop-blur border border-[#333] px-2 py-0.5 text-[8px] text-white font-mono z-30 flex items-center gap-1.5">
                                <span>{artifact.status}</span>
                                <span className={`w-1 h-1 rounded-full animate-pulse ${artifact.status === 'RECOVERED' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            </div>
                        </div>

                        {/* Minimal Metadata */}
                        <div className="p-3 bg-[#050505] border-t border-[#222] mt-auto">
                            <h3 className="text-white text-xs font-mono uppercase tracking-wider mb-1 truncate">{artifact.title}</h3>
                            <p className="text-residue-dim text-[10px] font-mono">
                                ID: {artifact.id}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}
