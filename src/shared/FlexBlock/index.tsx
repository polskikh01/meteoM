import {Flex} from '@mantine/core';
import {IFlexBlockProps} from './types';

export const FlexBlock = ({
  align,
  columnGap,
  direction,
  gap,
  justify,
  rowGap,
  wrap,
  children,
}: IFlexBlockProps) => {
  return <Flex
    align={align}
    columnGap={columnGap}
    direction={direction}
    gap={gap}
    justify={justify}
    rowGap={rowGap}
    wrap={wrap}
  >
    {children}
  </Flex>;
};
