import test from 'ava'
import mainCrayon from 'crayon.js'
import { StyleObject } from 'crayon.js/lib/types'
import crayon, { styles } from '../lib/index.js'
import { CrayonChalkAlias } from '../lib/types'

const colors: CrayonChalkAlias[] = [
	'blackBright',
	'redBright',
	'greenBright',
	'yellowBright',
	'blueBright',
	'magentaBright',
	'cyanBright',
	'whiteBright',
]
colors.push(
	...colors.map(
		(color) =>
			('bg' + color[0].toUpperCase() + color.slice(1)) as CrayonChalkAlias
	)
)

test('extension works', (t) => {
	for (const color of colors) {
		t.is(!!styles[color as keyof StyleObject], true)
		t.is(!!crayon[color], true)
	}
})

test('extension works after instancing', (t) => {
	t.is(!!crayon()[colors[0]], true)
	t.is(!!crayon.instance(false, '')[colors[0]], true)
	t.is(!!crayon.instance(true, '')[colors[0]], true)
	t.is(!!crayon.clone(false)[colors[0]], true)
})

test('extension affects main instance', (t) => {
	t.is(!!(mainCrayon as any)[colors[0]], true)
})
