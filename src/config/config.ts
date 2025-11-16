// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'TheLearnBetter.co | Growth Agency for LearnTech Companies',
	siteDescription:
		'The Learn Better Company helps learntech companies reach customers and organizations through strategic growth services including market positioning, customer acquisition, and content marketing.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'TheLearnBetter.co logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
