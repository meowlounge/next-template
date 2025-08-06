'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { useDebounce, useHasMounted, useMediaQuery } from '@/hooks';
import { Monitor, Smartphone } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

export default function DemoPage() {
	const hasMounted = useHasMounted();
	const isMobile = useMediaQuery('(max-width: 768px)');
	const [text, setText] = useState('Hello world');
	const [clickCount, setClickCount] = useState(0);

	const debounced = useDebounce(text, 500);

	const handleButtonClick = useCallback(() => {
		const newCount = clickCount + 1;
		setClickCount(newCount);
	}, [clickCount]);

	const deviceIcon = useMemo(() => {
		return isMobile ? (
			<Smartphone className='size-4 text-primary' />
		) : (
			<Monitor className='size-4 text-primary' />
		);
	}, [isMobile]);

	const textStats = useMemo(() => {
		return {
			length: text.length,
			words: text.trim().split(/\s+/).filter(Boolean).length,
			hasChanged: text !== debounced,
		};
	}, [text, debounced]);

	if (!hasMounted) {
		return (
			<main className='flex items-center justify-center min-h-screen'>
				<div className='animate-pulse'>
					<div className='h-8 bg-muted rounded w-48 mb-4'></div>
					<div className='h-4 bg-muted rounded w-32'></div>
				</div>
			</main>
		);
	}

	return (
		<main className='flex flex-col gap-6 p-4 md:p-8 min-h-screen max-w-4xl mx-auto'>
			<header className='space-y-2'>
				<h1 className='text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
					🧪 Interactive Demo
				</h1>
				<p className='text-muted-foreground text-sm md:text-base'>
					Explore components and hooks with enhanced user experience
				</p>
			</header>

			<div className='grid gap-6 md:gap-8'>
				<Card className='p-6 border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200'>
					<div className='flex items-center gap-2 mb-4'>
						<h2 className='text-xl font-semibold'>
							🎛️ Interactive Components
						</h2>
						{clickCount > 0 && (
							<Badge variant='secondary' className='ml-auto'>
								Clicked {clickCount}x
							</Badge>
						)}
					</div>

					<div className='flex flex-wrap gap-4 items-start'>
						<Button onClick={handleButtonClick}>Test Button</Button>
					</div>
				</Card>

				<Card className='p-6 border-border/50 shadow-sm'>
					<div className='flex items-center gap-3 mb-4'>
						<h2 className='text-xl font-semibold'>
							🧠 Smart Hooks
						</h2>
						<div className='flex items-center gap-2 ml-auto'>
							{deviceIcon}
							<Badge variant={isMobile ? 'default' : 'outline'}>
								{isMobile ? 'Mobile' : 'Desktop'}
							</Badge>
						</div>
					</div>

					<div className='space-y-6'>
						<div className='space-y-3'>
							<Label
								htmlFor='demo-input'
								className='text-sm font-medium'>
								Debounced Text Input
							</Label>
							<Input
								id='demo-input'
								type='text'
								placeholder='Type something...'
								className='transition-all duration-200 focus:ring-2 focus:ring-primary/20'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>

							<div className='flex flex-wrap gap-4 text-sm'>
								<div className='flex items-center gap-2'>
									<span className='text-muted-foreground'>
										Characters:
									</span>
									<Badge variant='outline'>
										{textStats.length}
									</Badge>
								</div>
								<div className='flex items-center gap-2'>
									<span className='text-muted-foreground'>
										Words:
									</span>
									<Badge variant='outline'>
										{textStats.words}
									</Badge>
								</div>
								{textStats.hasChanged && (
									<Badge
										variant='secondary'
										className='animate-pulse'>
										Processing...
									</Badge>
								)}
							</div>
						</div>

						<Separator />

						<div className='space-y-2'>
							<Label className='text-sm font-medium'>
								Debounced Output
							</Label>
							<div className='p-3 bg-muted/50 rounded-md border border-border/50'>
								<code className='text-sm font-mono break-all'>
									{debounced || (
										<span className='text-muted-foreground italic'>
											Empty
										</span>
									)}
								</code>
							</div>
							{text !== debounced && (
								<p className='text-xs text-muted-foreground'>
									⏳ Waiting for input to stabilize...
								</p>
							)}
						</div>
					</div>
				</Card>
			</div>
		</main>
	);
}
