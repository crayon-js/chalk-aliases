import { ForegroundThreeBitColor } from 'crayon.js/lib/types'

export type CrayonChalkAlias =
	| ForegroundCrayonChalkAlias
	| BackgroundCrayonChalkAlias

export type ForegroundCrayonChalkAlias =
	| `${ForegroundThreeBitColor}Bright`
	| 'gray'
	| 'grey'

export type BackgroundCrayonChalkAlias = `bg${Capitalize<ForegroundCrayonChalkAlias>}`
