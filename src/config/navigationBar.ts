// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'TheLearnBetter.co',
		text: 'TheLearnBetter.co'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{
			name: 'Services',
			link: '/services',
			submenu: [
				{ name: 'Market Positioning', link: '/services/market-positioning' },
				{ name: 'Customer Acquisition', link: '/services/customer-acquisition' },
				{ name: 'Growth Strategy', link: '/services/growth-strategy' },
				{ name: 'Content Marketing', link: '/services/content-marketing' },
				{ name: 'Partnerships', link: '/services/partnerships' }
			]
		},
		{ name: 'Our Approach', link: '/approach' },
		{ name: 'Insights', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Get in Touch', link: '/contact', style: 'primary', size: 'lg' }]
}
