import crayon, { addStyleAlias, addStyleAliases, styles } from 'crayon.js'
import { Crayon } from 'crayon.js/lib/types'
import { CrayonChalkAlias } from './types'

for (const aliased in styles) {
	if (!aliased.toLowerCase().includes('light')) continue
	const color = aliased
		.replace(/[lL]ight/, '')
		.replace('bg', '')
		.toLowerCase()
	const alias =
		(aliased.includes('bg')
			? 'bg' + color[0].toUpperCase() + color.slice(1).toLowerCase()
			: color) + 'Bright'

	addStyleAlias(alias, aliased)
}

addStyleAliases({
	gray: 'lightBlack',
	bgGray: 'bgLightBlack',
	grey: 'lightBlack',
	bgGrey: 'bgLightBlack',
})

export default crayon as Crayon<CrayonChalkAlias>
export * from 'crayon.js'
