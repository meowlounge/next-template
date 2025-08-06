/*
 * Copyright (c) 2025 prodbyeagle
 * SPDX-License-Identifier: MIT
 */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	devIndicators: false,
	async redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/meowlounge/next-template',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
