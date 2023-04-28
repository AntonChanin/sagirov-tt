import { FC, PropsWithChildren } from 'react';

import { TitleSize } from '../types/common';

type Props = {
  size?: keyof typeof TitleSize;
};

const Text: FC<PropsWithChildren<Props>> = (props) => {
  const { size = 'REGULAR', children } = props;
  const classList: Record<keyof typeof TitleSize, string> = {
    MAX: 'font-bold text-2xl',
    EXTRA: 'font-semibold text-xl',
    MEDIUM: 'font-medium text-lg',
    REGULAR: 'font-normal text-base',
    SMALL: 'font-light text-sm',
    MIN: 'font-light text-xs',
  };

  return (
    <span className={`${classList[size]}`}>{children}</span>
  );
};

export default Text;