import { useSyncExternalStore } from 'react';

/**
 * Subscribes to a media query and returns its current match state.
 * SSR-safe: returns false on the server.
 * @param query - A valid CSS media query string.
 *
 * @author prodbyeagle
 */
export function useMediaQuery(query: string): boolean {
	if (typeof window === 'undefined') return false;

	return useSyncExternalStore(
		(cb) => {
			const mql = window.matchMedia(query);
			mql.addEventListener('change', cb);
			return () => mql.removeEventListener('change', cb);
		},
		() => window.matchMedia(query).matches,
		() => false
	);
}
