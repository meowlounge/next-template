/**
 * Shared types and interfaces used throughout the application.
 *
 * Define reusable type declarations here to ensure consistent typing
 * and improve maintainability across components and modules.
 *
 * @example
 * ❌ Don't use overly generic or shortcut types like this:
 * export type SomePropsInThisCodeBase = React.HTMLAttributes<HTMLElement>;
 *
 * ✅ Do prefer more explicit, larger types or interfaces
 * that precisely describe the component's expected props:
 * export interface SomePropsInThisCodeBase extends React.HTMLAttributes<HTMLElement> {
 *   className?: string;
 *   children?: React.ReactNode;
 * 	 ... // other specific props
 * }
 */

export interface DottedBackgroundProps {
	/**
	 * The color of each dot.
	 * @default 'var(--muted-foreground)'
	 */
	dotColor?: string;

	/**
	 * The radius size of each dot in pixels.
	 * @default 1
	 */
	dotSize?: number;

	/**
	 * The spacing between dots in pixels.
	 * @default 30
	 */
	spacing?: number;

	/**
	 * Additional class names to apply to the root container.
	 */
	className?: string;
}
