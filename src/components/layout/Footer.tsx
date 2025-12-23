import { useCurrentTime } from '../../hooks/useCurrentTime';

export function Footer() {
    const time = useCurrentTime();

    return (
        <footer className="mt-auto border-t border-[#222] pt-8 text-center text-residue-dim">
            <p className="text-[0.7rem] font-mono">
                LOG_TIMESTAMP: {time} // STATUS: DORMANT
            </p>
        </footer>
    );
}
