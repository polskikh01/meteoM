import {DefaultMantineColor, MantineGradient, Variants} from '@mantine/core';
import {ReactNode} from 'react';

export interface ITextOutProps {
    align?:
        'left' |
        'right' |
        '-moz-initial' |
        'inherit' |
        'initial' |
        'revert' |
        'unset' |
        'center' |
        'end' |
        'start' |
        'justify' |
        'match-parent',
    children: ReactNode,
    color?: DefaultMantineColor | 'dimmed',
    gradient?: MantineGradient,
    inherit?: boolean,
    inline?: boolean,
    italic?: boolean,
    lineClamp?: number,
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    span?: boolean,
    strikethrough?: boolean,
    transform?:
        '-moz-initial' |
        'inherit' |
        'initial' |
        'revert' |
        'unset' |
        'none' |
        'capitalize' |
        'full-size-kana' |
        'full-width' |
        'lowercase' |
        'uppercase',
    truncate?: true | 'end' | 'start',
    underline?: boolean,
    variant?: Variants<'text' | 'gradient'>,
    weight?:
        100 |
        200 |
        300 |
        400 |
        500 |
        600 |
        700 |
        800 |
        900 |
        'inherit'
}
