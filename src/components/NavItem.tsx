import { FC, PropsWithChildren } from 'react';

import Text from './Text';

type Props = {
    href?: string;
};

const NavItem: FC<PropsWithChildren<Props>> = (props) => {
  const { href = '#', children } = props;

  return (
    <li className="z-50 hover:opacity-50 hover:border-b"><Text size="SMALL"><a href={href}>{children}</a></Text></li>  
  );
};

export default NavItem;
