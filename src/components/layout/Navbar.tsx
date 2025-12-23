import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

interface NavbarProps {
    lenis?: Lenis | null;
}

export function Navbar({ lenis }: NavbarProps) {
    const [activeLink, setActiveLink] = useState('HOME');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const links = ['HOME', 'ABOUT', 'ART', 'SUPPORT', 'TERMINAL'];

    const handleNav = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false); // Close mobile menu if open

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
                    className="text-residue-text hover:text-white transition-colors cursor-pointer group z-50 relative"
                    onClick={() => {
                        navigate('/');
                        setIsMenuOpen(false);
                        if (lenis) lenis.scrollTo(0, { duration: 1.5 });
                        else window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <span className="text-residue-dim group-hover:text-white mr-2">root@frostlm:~$</span>
                    <span className="animate-pulse">_</span>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden z-50 relative text-residue-dim hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="flex flex-col gap-1.5 items-end">
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                        <span className={`block h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'}`}></span>
                    </div>
                </button>

                {/* DESKTOP NAVIGATION */}
                <ul className="hidden md:flex items-center gap-6 md:gap-8">
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

                {/* MOBILE MENU OVERLAY */}
                <div className={`fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center h-screen transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                    {/* Close Button (simulated by toggle) */}
                    {/* Menu Items */}
                    <ul className="flex flex-col items-start gap-8 relative z-50">
                        {links.map((link, i) => (
                            <li key={link}
                                className={`transition-all duration-500 ease-out`}
                                style={{
                                    transitionDelay: `${100 + i * 100}ms`,
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                <button
                                    className={`
                                      text-2xl font-mono uppercase tracking-widest relative transition-all text-left group
                                      ${activeLink === link ? 'text-white' : 'text-residue-dim hover:text-residue-text'}
                                    `}
                                    onClick={() => handleNav(link)}
                                >
                                    <span className={`inline-block mr-2 transition-all ${activeLink === link ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>&gt;</span>
                                    [{link}]
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className={`absolute bottom-12 text-[10px] text-residue-dim font-mono tracking-widest transition-opacity duration-1000 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                         // SYSTEM_STATUS: ONLINE_
                    </div>
                </div>

            </div>
        </nav>
    );
}
