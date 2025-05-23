import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names conditionally.
 *
 * This utility combines `clsx` and `tailwind-merge` to conditionally apply class names
 * while ensuring Tailwind's utility classes are merged correctly to avoid conflicts.
 *
 * @param inputs - A list of class values (strings, arrays, conditionals) to be merged.
 * @returns A single merged class name string.
 *
 * @example
 * ```ts
 * cn('p-2', 'bg-red-500', { 'text-white': true, 'hidden': false });
 * // => 'p-2 bg-red-500 text-white'
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Generates a pseudo-random alphanumeric string key.
 *
 * This is useful for generating unique keys in lists or components where
 * a deterministic ID is not required.
 *
 * @returns A random string suitable for use as a key.
 *
 * @example
 * ```ts
 * const key = generateRandomKey(); // => 'k5lzj7m47hc'
 * ```
 */
export function generateRandomKey(): string {
	return Math.random().toString(36).substring(2, 15);
}
