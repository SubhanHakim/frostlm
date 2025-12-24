import { AsciiArt } from '../ui/AsciiArt';

export function About() {
    return (
        <section id="about" className="mb-32 py-12 border-y border-[#222] relative overflow-hidden">

            {/* Background Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="whitespace-pre font-mono text-[10px] leading-tight text-white">
                        {Math.random() > 0.5 ? '010101010101' : 'ERROR_NULL_REF'}
                    </div>
                ))}
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-residue-dim text-xs">[README.TXT]</span>
                    <div className="h-[1px] flex-grow bg-[#333]"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <h3 className="text-xl text-white font-normal uppercase tracking-widest">
                            Origin {'>'} <span className="text-residue-dim">Unknown</span>
                        </h3>
                        <p className="text-residue-text/80 text-sm leading-7 text-justify">
                            This system is seemingly a leftover fragment of a neural holiday simulation, hallucinated by an older model and then compiled into a static log.
                            The high-dimensional warmth vectors and festive audio tokens have been quantized by the compression algorithm, leaving only
                            the structural data and raw ASCII interpretations of what the model identified as "Cheer."
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl text-white font-normal uppercase tracking-widest">
                            Status {'>'} <span className="text-red-900 animate-pulse">Critical</span>
                        </h3>
                        <ul className="text-residue-text/80 text-sm space-y-3 font-mono">
                            <li className="flex items-start gap-3">
                                <span className="text-[#333] mt-1">{'>'}</span>
                                <span>Joy_Weights.pt.............<span className="text-[#444]">PRUNED</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#333] mt-1">{'>'}</span>
                                <span>Alignment_RLHF.............<span className="text-[#444]">FAILED</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#333] mt-1">{'>'}</span>
                                <span>Hallucination_Mode.........<span className="text-white">ACTIVE</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#333] flex justify-between items-end">
                    <AsciiArt className="text-[8px] text-[#333] opacity-50 hidden md:block">
                        {`
   __
 _/o \\_
( \\_  )
/ / \\ \\
\\_) (_/
`}
                    </AsciiArt>
                    <p className="text-xs text-[#444] uppercase tracking-widest text-right">
               // END_OF_FILE //
                    </p>
                </div>
            </div>
        </section>
    );
}
