// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'TheLearnBetter.co',
		aboutText:
			'The Learn Better Company partners with learntech organizations to accelerate growth through strategic market positioning, customer acquisition, and content marketing.',
		logo: {
			src: '/logo.svg',
			alt: 'TheLearnBetter.co',
			text: 'TheLearnBetter.co'
		}
	},
	footerColumns: [
		{
			category: 'Services',
			subCategories: [
				{
					subCategory: 'Market Positioning',
					subCategoryLink: '/services/market-positioning'
				},
				{
					subCategory: 'Customer Acquisition',
					subCategoryLink: '/services/customer-acquisition'
				},
				{
					subCategory: 'Growth Strategy',
					subCategoryLink: '/services/growth-strategy'
				},
				{
					subCategory: 'Content Marketing',
					subCategoryLink: '/services/content-marketing'
				},
				{
					subCategory: 'Partnerships',
					subCategoryLink: '/services/partnerships'
				}
			]
		},
		{
			category: 'Company',
			subCategories: [
				{
					subCategory: 'Our Approach',
					subCategoryLink: '/approach'
				},
				{
					subCategory: 'Insights',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Contact',
			subCategories: [
				{
					subCategory: 'Get in Touch',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'New Business',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Partnerships',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© The Learn Better Company 2024.'
	}
}
