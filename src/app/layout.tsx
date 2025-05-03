import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { DottedBackground } from '@/components/eagle/dotted';
import { ThemeToggle } from '@/components/eagle/theme-toggle';
import { ReactScan } from '@/components/eagle/react-scan';

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
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased select-none cursor-default`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					{children}
					<div className='absolute top-4 right-4'>
						<ThemeToggle />
					</div>
					<DottedBackground
						dotColor='var(--ring)'
						spacing={16}
						dotSize={1}
					/>
				</ThemeProvider>
				<ReactScan />
			</body>
		</html>
	);
}
