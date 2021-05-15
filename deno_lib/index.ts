import crayon, {
	addStyleAlias,
	addStyleAliases,
	addStyleFunction,
	functions,
	styles,
} from 'https://deno.land/x/crayon/mod.ts'
import { Crayon } from 'https://deno.land/x/crayon/types.ts'
import { CrayonChalkAlias, CrayonChalkAliasFunctions } from './types.ts'

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
export * from 'https://deno.land/x/crayon/mod.ts'
