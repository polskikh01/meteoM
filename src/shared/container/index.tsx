import {Box} from '@mantine/core';
import {IContainerProps} from './types';

export const Container = ({children, sx}: IContainerProps) => {
  return <Box sx={sx}>{children}</Box>;
};
