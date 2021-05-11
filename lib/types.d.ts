import { ForegroundThreeBitColor } from 'crayon.js/lib/types';
export declare type CrayonChalkAlias = ForegroundCrayonChalkAlias | BackgroundCrayonChalkAlias;
export declare type ForegroundCrayonChalkAlias = `${ForegroundThreeBitColor}Bright` | 'gray' | 'grey';
export declare type BackgroundCrayonChalkAlias = `bg${Capitalize<ForegroundCrayonChalkAlias>}`;
