import * as React from 'react';

import { cn } from '@/lib/utils';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

/**
 * A styled <code> block for inline code snippets.
 * Uses shadcn/ui CSS variables for background & text colors.
 * @author @prodbyeagle
 */
export function Code({ className, ...props }: CodeProps) {
	return (
		<code
			className={cn(
				'rounded bg-muted px-1 py-0.5 font-mono text-sm',
				'text-muted-foreground',
				className
			)}
			{...props}
		/>
	);
}
