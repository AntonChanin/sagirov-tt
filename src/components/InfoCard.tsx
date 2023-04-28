import { FC } from 'react';

import Title from './Title';
import Text from './Text';

type Props = {
    start?: string;
    main: string;
    end?: string;
};

const InfoCard: FC<Props> = (props) => {
  const { start = '', main, end = '' } = props;

  return (
    <div className="text-center w-[calc(50%-8px)] h-fit">
      <Text size="SMALL">{start}</Text>
      <Title size="MAX">{main}</Title>
      <Text size="SMALL">{end}</Text>
    </div>
  );
};

export default InfoCard;
