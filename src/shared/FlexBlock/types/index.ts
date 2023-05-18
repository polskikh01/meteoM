import {SpacingValue, SystemProp} from '@mantine/core';
import {CSSProperties, ReactNode} from 'react';

export interface IFlexBlockProps {
    gap?: SystemProp<SpacingValue>,
    rowGap?: SystemProp<SpacingValue>,
    columnGap?: SystemProp<SpacingValue>,
    align?: SystemProp<CSSProperties['alignItems']>,
    justify?: SystemProp<CSSProperties['justifyContent']>,
    wrap?: SystemProp<CSSProperties['flexWrap']>,
    direction?: SystemProp<CSSProperties['flexDirection']>,
    children: ReactNode
}
