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
		<main className='relative flex min-h-screen flex-col items-center justify-center px-4 py-12'>
			<Card className='w-full max-w-md'>
				<CardHeader className='space-y-1 text-center'>
					<CardTitle className='text-2xl'>
						🦅 @prodbyeagle Next Starter
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
						<Link href='https://ui.shadcn.com/docs'>
							ShadcnUI Docs{' '}
							<ArrowRight className='size-4 group-hover:translate-x-1  transition-all duration-200' />
						</Link>
					</Button>
					<Button className='group' variant='outline' asChild>
						<Link href='https://nextjs.org/docs'>
							Next.js Docs{' '}
							<ArrowRight className='size-4 group-hover:translate-x-1  transition-all duration-200' />
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
