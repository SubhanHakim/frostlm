import { useState } from 'react';
import { AsciiArt } from '../ui/AsciiArt';

export function About() {
    const [copied, setCopied] = useState(false);
    const CA = "5M43sfKCtmnqzCbg4wiwc2nWaMkDbi4sgtFLHgbmpump";

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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

                {/* CA Section */}
                <div className="mt-10 border border-[#222] bg-[#080808] p-4 flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-[#444] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shine_3s_infinite] pointer-events-none"></div>

                    <div className="flex items-center gap-3 relative z-10 w-full md:w-auto">
                        <div className="w-10 h-10 border border-[#333] bg-black flex items-center justify-center shrink-0">
                            <span className="text-residue-dim text-xs font-mono">$</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[10px] text-residue-dim uppercase tracking-widest">Contract_Address</span>
                            <code className="text-xs md:text-sm text-white font-mono truncate max-w-[200px] md:max-w-md">{CA}</code>
                        </div>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="relative z-10 px-4 py-2 bg-[#111] border border-[#333] text-residue-dim text-xs font-mono uppercase tracking-widest hover:text-white hover:border-white transition-all w-full md:w-auto flex items-center justify-center gap-2 group-active:translate-y-0.5"
                    >
                        {copied ? (
                            <>
                                <span className="text-green-500">COPIED</span>
                                <span className="text-green-500">✓</span>
                            </>
                        ) : (
                            <>
                                <span>COPY_ADDR</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>

                <div className="mt-8 pt-6 border-t border-[#333] flex justify-between items-end">
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
