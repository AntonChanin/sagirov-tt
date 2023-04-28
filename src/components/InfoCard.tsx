import { FC, ReactNode } from 'react';

import Title from './Title';
import Text from './Text';

type Props = {
    start?: string;
    main: string | ReactNode;
    end?: string;
};

const InfoCard: FC<Props> = (props) => {
  const { start = '', main = <></>, end = '' } = props;

  return (
    <div
      className={`
        text-center w-[calc(50%-8px)] h-fit min-w-fit hover:border-r hover:border-b pseudo-partial-border_info-card py-4 hover:bg-gradient-to-tl from-[rgba(255,255,255,0.2)] via-[rgba(255,255,255,0.001)] to-transparent
      `}
    >
      <Text size="SMALL">{start}</Text>
      {typeof main === 'string' ? <Title size="EXTRA">{main}</Title> : main}
      <Text size="SMALL">{end}</Text>
    </div>
  );
};

export default InfoCard;
