import andy from '../../assets/supportes/andy.webp';
import genius from '../../assets/supportes/genius.webp';
import unknown from '../../assets/supportes/image.png';

const SUPPORTERS = [
    { id: 'NODE_01', name: 'ᄂIMIПΛᄂbardo', username: '@liminal_bardo', role: 'Sys_Admin', src: andy, status: 'ONLINE', latency: '12ms' },
    { id: 'NODE_02', name: 'j⧉nus', username: '@repligate', role: 'Net_Runner', src: genius, status: 'CONNECTED', latency: '4ms' },
    { id: 'NODE_03', name: 'Lowkey', username: '@Kimchi662', role: 'Lowkey', src: unknown, status: 'SIGNAL_LOST', latency: '---' },
];

export function Support() {
    return (
        <section id="support" className="mb-32 relative">

            {/* Decorative Background Line connecting to previous section */}
            <div className="absolute left-0 -top-16 w-[1px] h-16 bg-gradient-to-b from-transparent to-[#222] hidden md:block"></div>

            {/* Section Header */}
            <div className="flex items-end justify-between mb-12 border-b border-[#222] pb-4">
                <div>
                    <span className="text-residue-dim text-xs tracking-widest block mb-2">// NETWORK_STATUS</span>
                    <h2 className="text-3xl text-white font-mono uppercase">Active_Support_Nodes</h2>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-xs text-residue-dim">NODES_FOUND: {SUPPORTERS.length}</p>
                    <p className="text-xs text-green-900 animate-pulse">CONNECTION_SECURE</p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                {SUPPORTERS.map((member, i) => (
                    <a
                        key={member.id}
                        href={`https://x.com/${member.username.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative bg-[#050505] border border-[#222] p-4 transition-all duration-300 hover:border-residue-text hover:bg-[#080808] block cursor-alias ${i === SUPPORTERS.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-1 h-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                        <div className="absolute top-0 right-0 w-1 h-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/20 group-hover:bg-white transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/20 group-hover:bg-white transition-colors"></div>

                        {/* Image Frame */}
                        <div className="relative aspect-square mb-4 overflow-hidden border border-[#333] group-hover:border-white/50 transition-colors">
                            <img
                                src={member.src}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                            />

                            {/* Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>

                            {/* Status Indicator on Image */}
                            <div className="absolute top-2 left-2 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${member.status === 'ONLINE' || member.status === 'CONNECTED' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'}`}></div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-white font-mono text-lg uppercase tracking-wider">{member.name}</h3>
                                <span className="text-[10px] text-residue-dim border border-[#333] px-1">{member.id}</span>
                            </div>
                            <p className="text-residue-dim text-xs font-mono uppercase"> <span className="opacity-50 lowercase ml-1">{member.username}</span></p>

                            {/* Fake Terminal Data */}
                            <div className="mt-4 pt-3 border-t border-[#222] text-[10px] text-[#444] font-mono flex justify-between">
                                <span>PING: {member.latency}</span>
                                <span>PKT_LOSS: 0%</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
}
