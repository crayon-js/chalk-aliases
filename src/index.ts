import crayon, {
	addStyleAlias,
	addStyleAliases,
	addStyleFunction,
	functions,
	styles,
} from 'crayon.js'
import { Crayon } from 'crayon.js/lib/types'
import { CrayonChalkAlias, CrayonChalkAliasFunctions } from './types'

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
	inverse: 'invert',
})

addStyleFunction('ansi256', functions.ansi8)

export default crayon as any as Crayon<
	CrayonChalkAlias,
	CrayonChalkAliasFunctions
>
export * from 'crayon.js'
