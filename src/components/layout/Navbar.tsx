import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

interface NavbarProps {
    lenis?: Lenis | null;
}

export function Navbar({ lenis }: NavbarProps) {
    const [activeLink, setActiveLink] = useState('HOME');
    const navigate = useNavigate();
    const location = useLocation();

    const links = ['HOME', 'ABOUT', 'ART', 'SUPPORT', 'TERMINAL'];

    const handleNav = (link: string) => {
        setActiveLink(link);
        if (link === 'TERMINAL') {
            navigate('/terminal');
        } else {
            const targetId = link.toLowerCase();
            // If we are not on home, go there
            if (location.pathname !== '/') {
                navigate('/');
                // Timeout to allow mount then scroll
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        // If passed lenis from LandingPage (likely mounted by then), use it? 
                        // Actually on nav change lenis might not be ready or passed yet if simple router.
                        // Fallback to native smooth
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                if (lenis) {
                    lenis.scrollTo(`#${targetId}`, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                } else {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-residue-bg/90 backdrop-blur-sm border-b border-[#222]">
            <div className="max-w-[1024px] mx-auto px-5 h-16 flex items-center justify-between font-mono text-sm">

                {/* LOGO */}
                <div
                    className="text-residue-text hover:text-white transition-colors cursor-pointer group"
                    onClick={() => {
                        navigate('/');
                        if (lenis) lenis.scrollTo(0, { duration: 1.5 });
                        else window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <span className="text-residue-dim group-hover:text-white mr-2">root@frostlm:~$</span>
                    <span className="animate-pulse">_</span>
                </div>

                {/* NAVIGATION */}
                <ul className="flex items-center gap-6 md:gap-8">
                    {links.map((link) => (
                        <li key={link}>
                            <button
                                className={`
                  relative px-1 transition-colors duration-200 uppercase
                  ${activeLink === link ? 'text-white' : 'text-residue-dim hover:text-residue-text'}
                `}
                                onClick={() => handleNav(link)}
                            >
                                {activeLink === link && (
                                    <span className="absolute -left-3 text-residue-dim">{'>'}</span>
                                )}
                                [{link}]
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
