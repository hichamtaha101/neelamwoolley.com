import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
        state: {
			designs: {
				'quick-mint': {
					featured: true,
					title: 'Quick Mint | Website', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX website design for the Quickmint NFT e-commerce website.',
					imgRef: 'quick-mint/thumbnail.png',
					imgAlt: 'Quickmint Thumbnail',

					sectionTitle: 'Website',
					sectionSubTitle: 'Quickmint',
					boxTitle: 'QUCIK MINT | NFT | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UI/UX website design for the Quickmint NFT e-commerce website. Plus Logo/Branding Design and NFT Illustration series.',
					boxLink: '/design/quick-mint',
					boxImage: '',
					boxImageAlt: 'Quick Mint Thumbnail',
				},
				'henesys-group': {
					featured: true,
					title: 'Henesys Group | SAAS', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UX/UI Design for the Henesys Group SaaS.',
					imgRef: 'henesys-group/thumbnail.png',
					imgAlt: 'Henesys Group Thumbnail',

					sectionTitle: 'Web Application',
					sectionSubTitle: 'HENESYS GROUP',
					boxTitle: 'HENESYS GROUP | SAAS',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UX/UI Design for the Henesys Group SaaS. Plus Graphic Design for web.',
					boxLink: '/design/henesys-group',
					boxImage: 'henesys-group/thumbnail-md.png',
					boxImageAlt: 'Henesys Group Thumbnail',
				},
				'vancouver-bitcoin': {
					featured: true,
					title: 'Vancouver Bitcoin | Website', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX website design for a Vancouver based cryptocurrency brokerage firm.',
					imgRef: 'vancouver-bitcoin/thumbnail.png',
					imgAlt: 'Vancouver Bitcoin Thumbnail',

					sectionTitle: 'Website',
					sectionSubTitle: 'VANCOUVER BITCOIN',
					boxTitle: 'VANCOUVER BITCOIN | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design',
					boxDescription: 'UI/UX website design for a Vancouver based cryptocurrency brokerage firm. Plus Graphic Design for web.',
					boxLink: '/design/vancouver-bitcoin',
					boxImage: 'vancouver-bitcoin/thumbnail-md.png',
					boxImageAlt: 'Vancouver Bitcoin Thumbnail',
				},
				'bittreo': {
					featured: true,
					title: 'Bittreo | Web Application', 
					tag: 'UI/UX Design | Graphic Design',
					briefDescription: 'UI/UX design for a web based crypto currency brokerage application.',
					imgRef: 'bittreo/thumbnail.png',
					imgAlt: 'Bittreo Thumbnail',

					sectionTitle: 'Web Application',
					sectionSubTitle: 'BITTREO',
					boxTitle: 'BITTREO | BROKERAGE | WEB APPLICATION',
					boxTag: 'UI/UX Design | Graphic Design',
					boxDescription: 'UI/UX design for a web based crypto currency brokerage application. Plus Graphic Design for web.',
					boxLink: '/design/bittreo',
					boxImage: 'bittreo/thumbnail-md.png',
					boxImageAlt: 'Bittreo Thumbnail',
				},
				'gladiator-bikes': {
					title: '',
					tag: '',
					briefDescription: '',
					imgRef: '',
					imgAlt: '',

					sectionTitle: 'Website',
					sectionSubTitle: 'GLADIATOR BIKES',
					boxTitle: 'GLADIATOR BIKES | WEBSITE',
					boxTag: 'UI/UX Design | Graphic Design | E-Commerce',
					boxDescription: 'UI/UX website design for a Vancouver based bicycle company.. Plus Logo/Branding Design.',
					boxLink: '/design/gladiator-bikes',
					boxImage: 'gladiator-bikes/thumbnail-md.png',
					boxImageAlt: 'Gladiator Bikes Thumbnail',
				},
				'shape-shifters': {
					title: '',
					tag: '',
					briefDescription: '',
					imgRef: '',
					imgAlt: '',

					sectionTitle: 'Website',
					sectionSubTitle: 'SHAPESHIFTERS',
					boxTitle: 'SHAPESHIFTERS | WEBSITE',
					boxTag: 'UI/UX Design | Graphic DesigN',
					boxDescription: 'UI/UX website design for a Vancouver based Visual FX studio.. Plus Logo/Branding Design.',
					boxLink: '/design/shape-shifters',
					boxImage: 'shape-shifters/thumbnail-md.png',
					boxImageAlt: 'Shape Shifters Thumbnail',
				},
				'ocin': {
					title: '',
					tag: '',
					briefDescription: '',
					imgRef: '',
					imgAlt: '',

					sectionTitle: 'Website',
					sectionSubTitle: 'OCIN | ECO SWIMWEAR',
					boxTitle: 'OCIN | ECO SWIMWEAR | WEBSITE',
					boxTag: 'UI/UX Design | E-Commerce',
					boxDescription: 'UI/UX design for an e-commerce website. Front end design for custom Shopify theme.',
					boxLink: '/design/eco-swimwear',
					boxImage: '',
					boxImageAlt: 'Eco Swimear Thumbnail',
				},
				'roden-grey': {
					title: '',
					tag: '',
					briefDescription: '',
					imgRef: '',
					imgAlt: '',

					sectionTitle: 'Website',
					sectionSubTitle: 'RODEN GRAY',
					boxTitle: 'RODEN GRAY | DESIGNER MENSWEAR | WEBSITE',
					boxTag: 'UI Design | Web Design | E-Commerce',
					boxDescription: 'UI/UX design for an e-commerce website. Front end design for custom Shopify theme.',
					boxLink: '/design/roden-gray',
					boxImage: 'roden-grey/thumbnail-md.png',
					boxImageAlt: 'Roden Grey Thumbnail',
				}
			}
		},
        getters: {
			designs( state ) { return state.designs }
		},
        mutations: {},
        actions: {},
   })
}

export default createStore