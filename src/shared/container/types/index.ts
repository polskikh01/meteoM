import {Sx} from '@mantine/core';
import {ReactNode} from 'react';

export interface IContainerProps {
    sx?: Sx | (Sx | undefined)[];
    children: ReactNode
}
