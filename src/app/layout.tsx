import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import {
	DottedBackground,
	ReactScan,
	ThemeToggle,
	Toaster,
} from '@/components';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '🦅 @prodbyeagle',
	description: 'Eagle Template for Next.js',
	icons: 'https://kappa.lol/WTiY5',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistMono.variable} ${geistSans.variable} antialiased font-sans cursor-default select-none relative`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='absolute top-4 right-4 z-50 pointer-events-auto'>
						<ThemeToggle />
					</div>

					<div className='fixed inset-0 -z-10'>
						<DottedBackground
							dotColor='var(--foreground)'
							className='opacity-45'
							spacing={28}
							dotSize={2}
						/>
					</div>

					<div className='container mx-auto relative z-0'>
						{children}
					</div>
				</ThemeProvider>

				{/* Toast container: Wraps all toast notifications. Comment out if not needed. */}
				<Toaster />

				{/* Developer Component ( view fps + fps drops and rendering) */}
				<ReactScan />
			</body>
		</html>
	);
}
