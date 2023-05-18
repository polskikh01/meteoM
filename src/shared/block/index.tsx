import {Container} from '@mantine/core';
import {IBlockProps} from './types';

export const Block = ({fluid, size, sizes, children, sx}: IBlockProps) => {
  return <Container
    fluid={fluid}
    size={size}
    sizes={sizes}
    sx={sx}
  >
    {children}
  </Container>;
};
