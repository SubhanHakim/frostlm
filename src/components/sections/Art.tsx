import { useState, useEffect } from 'react';
import art1 from '../../assets/art/art1.webp';
import art2 from '../../assets/art/art2.webp';
import art3 from '../../assets/art/art3.webp';
import art4 from '../../assets/art/art4.webp';
import art5 from '../../assets/art/art5.webp';
import art6 from '../../assets/art/art6.webp';
import art7 from '../../assets/art/art7.webp';
import art8 from '../../assets/art/art8.webp';

const ARTIFACTS = [
    { id: '0x8F1A', src: art1, title: 'Winter_Solstice', status: 'RECOVERED', integrity: '89%' },
    { id: '0x9B2C', src: art2, title: 'Silent_Night_Echo', status: 'FRAGMENTED', integrity: '74%' },
    { id: '0xA13D', src: art3, title: 'Frost_Byte_Zero', status: 'CORRUPTED', integrity: '45%' },
    { id: '0xB24E', src: art4, title: 'North_Star_Guide', status: 'RECOVERED', integrity: '92%' },
    { id: '0xC35F', src: art5, title: 'Deer_Protocol_v4', status: 'DECAYING', integrity: '33%' },
    { id: '0xD46G', src: art6, title: 'Cold_Snap_Error', status: 'LOCKED', integrity: '12%' },
    { id: '0xE57H', src: art7, title: 'Chimney_Bypass', status: 'RECOVERED', integrity: '98%' },
    { id: '0xF68I', src: art8, title: 'Void_Present_Null', status: 'UNKNOWN', integrity: '0%' },
];

export function Art() {
    const [selectedArtifact, setSelectedArtifact] = useState<typeof ARTIFACTS[0] | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedArtifact) {
            document.body.style.overflow = 'hidden';
            // Small delay to allow mount then animate
            requestAnimationFrame(() => setIsAnimating(true));
        } else {
            document.body.style.overflow = 'unset';
            setIsAnimating(false);
        }
    }, [selectedArtifact]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setSelectedArtifact(null), 300); // Wait for transition
    };

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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {ARTIFACTS.map((artifact) => (
                    /* Art Card */
                    <div
                        key={artifact.id}
                        className="relative w-full border border-[#222] bg-[#080808] p-1 group flex flex-col cursor-pointer hover:border-white/50 transition-colors"
                        onClick={() => setSelectedArtifact(artifact)}
                    >

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

            {/* ART MODAL */}
            {selectedArtifact && (
                <div
                    className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ease-out ${isAnimating ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    onClick={handleClose}
                >
                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl text-white font-mono tracking-widest mb-6 text-center select-none transition-all duration-500 delay-100 transform ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                        {selectedArtifact.title}
                    </h2>

                    {/* Image Container */}
                    <div className={`relative max-w-4xl max-h-[70vh] w-auto shadow-[0_0_100px_rgba(255,255,255,0.1)] transition-all duration-500 transform ${isAnimating ? 'scale-100 blur-0 opacity-100' : 'scale-90 blur-sm opacity-0'}`}>
                        <img
                            src={selectedArtifact.src}
                            alt={selectedArtifact.title}
                            className="max-h-[70vh] w-auto object-contain rounded-sm border border-[#222]"
                        />
                        {/* Subtle Scanline Overlay on the modal image too */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
                    </div>

                    {/* Footer Instruction */}
                    <p className={`text-[10px] md:text-xs text-residue-dim mt-6 font-mono tracking-widest uppercase opacity-70 animate-pulse select-none transition-all duration-700 delay-200 ${isAnimating ? 'translate-y-0 opacity-70' : 'translate-y-4 opacity-0'}`}>
                        [ Click anywhere to dismiss ]
                    </p>
                </div>
            )}
        </section>
    );
}
