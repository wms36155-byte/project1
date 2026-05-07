'use client';

import Link from 'next/link';
import { useIsAdmin } from '@/lib/useIsAdmin';

export default function Footer() {
	const { isAdmin, hydrated } = useIsAdmin();

	return (
		<footer className='bg-gradient-to-r from-violet-950 via-purple-950 to-fuchsia-950 px-4 pb-6 pt-14 text-violet-200'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12 grid grid-cols-1 gap-10 sm:grid-cols-3'>
					
					{/* About */}
					<div>
						<h4 className='mb-4 text-lg font-semibold text-white'>
							About JobPortal
						</h4>

						<p className='text-sm leading-relaxed text-violet-200'>
							Your trusted platform for discovering modern career opportunities,
							connecting talented people with top companies worldwide.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className='mb-4 text-lg font-semibold text-white'>
							Quick Links
						</h4>

						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/jobs'
									className='transition-all duration-300 hover:text-white'
								>
									Browse Jobs
								</Link>
							</li>

							{hydrated && isAdmin ? (
								<li>
									<Link
										href='/admin/jobs'
										className='transition-all duration-300 hover:text-white'
									>
										Admin Panel
									</Link>
								</li>
							) : (
								<li>
									<Link
										href='/admin'
										className='transition-all duration-300 hover:text-white'
									>
										Admin Login
									</Link>
								</li>
							)}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className='mb-4 text-lg font-semibold text-white'>
							Contact
						</h4>

						<p className='text-sm'>
							<a
								href='mailto:aminovamadinabonu@gmail.com'
								className='transition-all duration-300 hover:text-white'
							>
								aminovamadinabonu@gmail.com
							</a>
						</p>
					</div>
				</div>

				{/* Bottom */}
				<div className='border-t border-violet-800 pt-6 text-center text-sm text-violet-300'>
					© 2026 JobPortal. All rights reserved by{' '}
					<a
						href='https://t.me/AmiraAminova'
						target='_blank'
						rel='noopener noreferrer'
						className='font-medium transition-all duration-300 hover:text-white'
					>
						@AmiraAminova
					</a>
				</div>
			</div>
		</footer>
	);
}