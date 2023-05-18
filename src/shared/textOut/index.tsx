import {Text} from '@mantine/core';
import {ITextOutProps} from './types';

export const TextOut = ({
  align,
  children,
  color,
  gradient,
  inherit,
  inline,
  italic,
  lineClamp,
  size,
  span,
  strikethrough,
  transform,
  truncate,
  underline,
  variant,
  weight,
}: ITextOutProps) => {
  return <Text
    align={align}
    color={color}
    gradient={gradient}
    inherit={inherit}
    inline={inline}
    italic={italic}
    lineClamp={lineClamp}
    size={size}
    span={span}
    strikethrough={strikethrough}
    transform={transform}
    truncate={truncate}
    underline={underline}
    variant={variant}
    weight={weight}
  >
    {children}
  </Text>;
};
