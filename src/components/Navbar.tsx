import { FC } from 'react';

import Button from './Button';
import Text from './Text';

type Props = {
  className?: string;
};

const Navbar: FC<Props> = (props) => {
  const { className = '' } = props;

  return (
    <nav className="flex justify-around w-full h-32 items-center bg-[rgba(0,0,0,0.3)]" >
      <div className={`flex justify-between w-full ${className}`.trimEnd()}>
        <div className="w-fit"><Button>SpaceX</Button></div> 
        <ul className="flex gap-8 w-auto">
          <li><Text size="SMALL"><a href="#">Главная</a></Text></li>
          <li><Text size="SMALL"><a href="#">Технология</a></Text></li>
          <li><Text size="SMALL"><a href="#">График полетов</a></Text></li>
          <li><Text size="SMALL"><a href="#">Гарантия</a></Text></li>
          <li><Text size="SMALL"><a href="#">О компании</a></Text></li>
          <li><Text size="SMALL"><a href="#">контакты</a></Text></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
