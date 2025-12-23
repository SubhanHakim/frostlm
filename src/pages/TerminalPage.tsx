import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { AsciiArt } from '../components/ui/AsciiArt';
import { TREE_ASCII } from '../constants/ascii';

interface LogLine {
    id: number;
    type: 'CMD' | 'OUTPUT' | 'SYSTEM' | 'ERROR';
    content: string | ReactNode;
}

const BOOT_SEQUENCE = [
    'INITIALIZING_KERNEL...',
    'LOADING_MEMORY... 100%',
    'MOUNTING_VIRTUAL_FS...',
    'CHECKING_INTEGRITY... [WARN: FRAGMENTED]',
    'ESTABLISHING_SESSION...',
    'WELCOME_USER. TYPE "help" FOR COMMANDS.'
];

const FILES = {
    'readme.txt': 'This system contains residue data from the Winter Solstice event. Proceed with caution.',
    'dates.log': 'Log entry 24-12: Signal lost. Log entry 25-12: Silence observed.',
    'corrupted.dat': 'E̶r̶r̶o̶r̶ ̶r̶e̶a̶d̶i̶n̶g̶ ̶s̶e̶c̶t̶o̶r̶ ̶0̶x̶0̶0̶',
    'ghost.exe': 'Access Denied. Spirit module missing.'
};

export function TerminalPage() {
    const [logs, setLogs] = useState<LogLine[]>([]);
    const [input, setInput] = useState('');
    const [isBooting, setIsBooting] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Boot Effect
    useEffect(() => {
        let delay = 0;
        BOOT_SEQUENCE.forEach((line, i) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                addLog('SYSTEM', line);
                if (i === BOOT_SEQUENCE.length - 1) setIsBooting(false);
            }, delay);
        });
    }, []);

    // Auto scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    // Focus input
    useEffect(() => {
        if (!isBooting) inputRef.current?.focus();
    }, [isBooting, logs]);

    const addLog = (type: LogLine['type'], content: string | ReactNode) => {
        setLogs(prev => [...prev, { id: Date.now(), type, content }]);
    };

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        const args = trimmed.split(' ');
        const command = args[0];

        switch (command) {
            case 'help':
                addLog('OUTPUT', (
                    <div className="grid grid-cols-2 max-w-sm gap-2">
                        <span>help</span> <span className="text-residue-dim">Show available commands</span>
                        <span>clear</span> <span className="text-residue-dim">Clear terminal</span>
                        <span>ls</span> <span className="text-residue-dim">List directory content</span>
                        <span>cat [file]</span> <span className="text-residue-dim">Read file content</span>
                        <span>whoami</span> <span className="text-residue-dim">Current user identity</span>
                        <span>exit</span> <span className="text-residue-dim">Return to GUI</span>
                        <span>tree</span> <span className="text-residue-dim">Visualise structure</span>
                    </div>
                ));
                break;
            case 'clear':
                setLogs([]);
                break;
            case 'ls':
                addLog('OUTPUT', (
                    <div className="flex gap-4 text-theme-blue">
                        {Object.keys(FILES).map(f => (
                            <span key={f} className={f.endsWith('.exe') ? 'text-green-500' : 'text-residue-text'}>{f}</span>
                        ))}
                    </div>
                ));
                break;
            case 'cat':
                if (!args[1]) {
                    addLog('ERROR', 'Usage: cat [filename]');
                } else if (FILES[args[1] as keyof typeof FILES]) {
                    addLog('OUTPUT', FILES[args[1] as keyof typeof FILES]);
                } else {
                    addLog('ERROR', `File not found: ${args[1]}`);
                }
                break;
            case 'whoami':
                addLog('OUTPUT', 'observer_unit_01');
                break;
            case 'tree':
                addLog('OUTPUT', <AsciiArt>{TREE_ASCII}</AsciiArt>);
                break;
            case 'exit':
                window.location.href = '/';
                break;
            case '':
                break;
            default:
                addLog('ERROR', `Command not found: ${command}`);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addLog('CMD', input);
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div
            className="min-h-screen bg-[#050505] text-[#d0d0d0] font-mono text-sm p-4 md:p-8 pt-24 overflow-hidden flex flex-col"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col">

                {/* Terminal Header */}
                <div className="border-b border-[#333] pb-2 mb-4 flex justify-between items-end select-none">
                    <div>
                        <h1 className="uppercase tracking-widest text-xs text-residue-dim">FROSTLM_TERMINAL_v2.0</h1>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-900"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-900"></div>
                        <div className="w-3 h-3 rounded-full bg-green-900 animate-pulse"></div>
                    </div>
                </div>

                {/* Logs Area */}
                <div className="flex-grow overflow-y-auto space-y-2 mb-4 scrollbar-hide">
                    {logs.map((log) => (
                        <div key={log.id} className={`${log.type === 'ERROR' ? 'text-red-500' : log.type === 'CMD' ? 'text-white' : 'text-residue-dim'}`}>
                            {log.type === 'CMD' && <span className="mr-2 text-green-700">➜</span>}
                            {log.type === 'SYSTEM' && <span className="mr-2 text-blue-700 font-bold">[SYS]</span>}
                            {log.content}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                {/* Input Area */}
                <div className="flex items-center text-white border-t border-[#333] pt-4 relative">
                    <span className="mr-2 text-green-500">guest@frostlm:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isBooting}
                        className="bg-transparent border-none outline-none flex-grow font-mono text-white caret-block focus:ring-0 pl-1"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                    {/* Blinking Block Cursor Custom */}
                    {!input && <span className="absolute left-[8.5rem] animate-pulse bg-white w-2 h-4 pointer-events-none"></span>}
                </div>

            </div>
        </div>
    );
}
