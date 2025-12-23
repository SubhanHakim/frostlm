import { useState, useEffect } from 'react';

/**
 * Hook to get the current system time in ISO format or formatted string.
 * Updates every second.
 */
export function useCurrentTime() {
  const [time, setTime] = useState<string>(new Date().toISOString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}
