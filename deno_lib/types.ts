import { ForegroundThreeBitColor } from 'https://deno.land/x/crayon/types.ts'

export type CrayonChalkAlias =
	| ForegroundCrayonChalkAlias
	| BackgroundCrayonChalkAlias

export type ForegroundCrayonChalkAlias =
	| `${ForegroundThreeBitColor}Bright`
	| 'gray'
	| 'grey'

export type BackgroundCrayonChalkAlias = `bg${Capitalize<ForegroundCrayonChalkAlias>}`
