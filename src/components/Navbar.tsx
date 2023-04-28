import { FC } from 'react';

import Button from './Button';
import Text from './Text';
import NavItem from './NavItem';

type Props = {
  className?: string;
};

const Navbar: FC<Props> = (props) => {
  const { className = '' } = props;
  const navs = ['Главная', 'Технология', 'График полетов', 'Гарантия', 'О компании', 'Контакты'];

  return (
    <nav className="flex justify-around w-full h-32 items-center bg-[rgba(0,0,0,0.3)]" >
      <div className={`flex justify-between w-full ${className}`.trimEnd()}>
        <Button className="w-1/4 flex">
          <img alt="" src="src/assets/logo.png" className="m-auto px-4" />
        </Button>
        <ul className="flex gap-8 w-auto m-auto">
          {navs.map((el) => (<NavItem>{el}</NavItem>))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
