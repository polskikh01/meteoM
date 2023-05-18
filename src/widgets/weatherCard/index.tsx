import {TextOut} from 'shared/textOut';
import {Props} from './types';
import {FlexBlock} from 'shared/FlexBlock';
import {Block} from 'shared/block';

export const WeatherCard = ({timesDay, time, currentTemp, icon}: Props) => {
  return <Block
    sx={(theme) => ({
      maxWidth: 250,
      backgroundColor: theme.colors.gray[0],
      textAlign: 'center',
      borderRadius: theme.radius.md,
    })}
  >
    <FlexBlock align="center" justify="space-around">
      <FlexBlock direction="column" justify="space-between" align="flex-start">
        <TextOut>{timesDay}</TextOut>
        <TextOut>{time}</TextOut>
        <TextOut>{currentTemp}</TextOut>
      </FlexBlock>
      {icon}
    </FlexBlock>
  </Block>;
};
