import { FC, PropsWithChildren } from 'react';

import { BgSize } from '../types/common';

type Props = {
  url?: string;
  name?: string;
  size?: keyof typeof BgSize;
  className?: string;
};

const BackgroundLayer: FC<PropsWithChildren<Props>> = (props) => {
  const { children, name = '', className = '',  url = '', size =  'AUTO'} = props;
  return (
    <div
      data-name={name}
      className={`bg-${BgSize[size]} bg-no-repeat w-full ${className}`.trimEnd()}
      style={url ? {  backgroundImage: `url(${url})` } : {}}
    >
      {children}
    </div>
  );
};

export default BackgroundLayer