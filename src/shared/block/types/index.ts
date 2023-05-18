import {MantineSize, Sx} from '@mantine/core';
import {ReactNode} from 'react';

export interface IBlockProps {
    fluid?: boolean,
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    sizes?: Record<MantineSize, string | number>,
    children: ReactNode,
    sx?: Sx | (Sx | undefined)[],
}
