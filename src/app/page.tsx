import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Code } from '@/components/eagle/code';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
	return (
		<main className='relative flex min-h-screen flex-col items-center justify-center px-6 sm:px-8 py-12'>
			<Card className='w-full max-w-md sm:max-w-lg'>
				<CardHeader className='space-y-1 text-center'>
					<CardTitle className='text-2xl'>
						🦅 @eagle NextJS Template
					</CardTitle>
					<CardDescription className='text-base'>
						A minimal Next.js + shadcn/ui template with theming &
						best practices.
					</CardDescription>
				</CardHeader>

				<CardContent className='space-y-4 text-center'>
					<p className='text-base text-muted-foreground'>
						Edit <Code>src/app/page.tsx</Code> and see live updates.
					</p>
				</CardContent>

				<CardFooter className='flex justify-center space-x-3'>
					<Button className='group' variant='outline' asChild>
						<Link
							href='https://ui.shadcn.com/docs'
							aria-label='Open Shadcn UI documentation'
							prefetch={false}>
							ShadcnUI Docs{' '}
							<ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</Button>
					<Button className='group' variant='outline' asChild>
						<Link
							href='https://nextjs.org/docs'
							aria-label='Open NextJS documentation'
							prefetch={false}>
							Next.js Docs{' '}
							<ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
