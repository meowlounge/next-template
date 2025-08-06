import { Button } from '@/components/ui/button';

import { Code, DocsLink } from '@/components';
import { ArrowRight, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className='relative flex min-h-screen flex-col items-center justify-center px-6 py-12'>
			<div className='absolute inset-0 pointer-events-none' />

			<div className='relative z-10 max-w-4xl mx-auto text-center space-y-8'>
				<div className='space-y-4'>
					<div className='inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground'>
						<Sparkles className='size-4 text-primary' />
						next.js 19+ / tailwind v4+ supported
					</div>

					<h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
						🦅{' '}
						<span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
							eagle-template
						</span>
					</h1>

					<p className='text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
						a minimal next.js + shadcn/ui template with theming &
						best practices built for modern development.
					</p>

					<p className='text-sm sm:text-md max-w-2xl mx-auto leading-relaxed italic text-foreground-muted'>
						if you just created the project and see this message, it
						means your setup was successful. happy building!
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button size='lg' className='group text-base px-8' asChild>
						<Link
							href='/not-found'
							aria-label='Open Shadcn UI documentation'
							prefetch={false}>
							visit-not-found-page
							<ArrowRight className='size-4 ml-2 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</Button>

					<Button
						size='lg'
						variant='outline'
						className='group text-base px-8'
						asChild>
						<Link
							href='/github'
							aria-label='View on GitHub'
							prefetch={false}>
							<Github className='size-4 mr-2' />
							view-on-github
						</Link>
					</Button>
				</div>

				<div className='pt-8 space-y-4'>
					<p className='text-sm text-muted-foreground'>
						ready to start building? edit{' '}
						<Code className='text-primary text-xs'>
							src/app/page.tsx
						</Code>{' '}
						and see live updates.
					</p>

					<div className='flex flex-wrap gap-6 justify-center text-sm text-muted-foreground'>
						<DocsLink href='https://nextjs.org/docs'>
							next-docs
						</DocsLink>
						<DocsLink href='https://ui.shadcn.com/docs'>
							shadcn/ui-docs
						</DocsLink>
						<DocsLink href='https://tailwindcss.com/docs'>
							tailwind-v4-docs
						</DocsLink>
					</div>
				</div>
			</div>
		</main>
	);
}
