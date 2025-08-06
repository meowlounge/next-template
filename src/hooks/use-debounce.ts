import { useState, useTransition } from 'react';

/**
 * Debounces a value by deferring state updates using React's transition system.
 * Note: best for UI-based debouncing; not a timer-based logic delay.
 * @param value - The value to debounce.
 * 
 * @author prodbyeagle
 */
export function useDebounce<T>(value: T): T {
	const [debounced, setDebounced] = useState(value);
	const [, startTransition] = useTransition();

	if (debounced !== value) {
		startTransition(() => setDebounced(value));
	}

	return debounced;
}
