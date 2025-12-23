import type { ReactNode } from 'react';

interface AsciiArtProps {
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

export function AsciiArt({ children, className = '', animate = false }: AsciiArtProps) {
    return (
        <div
            className={`
        font-mono whitespace-pre leading-[1.2] text-[10px] md:text-[12px] 
        overflow-x-hidden select-none inline-block text-left
        transition-colors duration-300
        hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)]
        ${animate ? 'animate-blink-slow' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
