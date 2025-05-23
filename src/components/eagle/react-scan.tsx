'use client';

import { JSX, useEffect } from 'react';
import { scan } from 'react-scan';

/**
 * A development-only component that triggers the `react-scan` visual debugger.
 *
 * @remarks
 * This component is intended to be used only in development environments.
 * It activates `react-scan` when the `NEXT_PUBLIC_DEVELOPMENT` environment variable is set to `'true'`.
 *
 * @returns An empty JSX element. All side effects are handled via `useEffect`.
 *
 * @example
 * ```tsx
 * <ReactScan />
 * ```
 * @repo
 * https://github.com/aidenybai/react-scan
 */
export function ReactScan(): JSX.Element {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_DEVELOPMENT === 'true') {
			scan({
				enabled: true,
			});
		}
	}, []);
	return <></>;
}
