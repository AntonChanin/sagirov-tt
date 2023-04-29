import { FC, useState } from 'react';

import Button from './Button';
import Text from './Text';
import NavItem from './NavItem';

type Props = {
  className?: string;
};

const Navbar: FC<Props> = (props) => {
  const { className = '' } = props;
  const [isShowShort, setIsShowShort] = useState(false);
  const navs = ['Главная', 'Технология', 'График полетов', 'Гарантия', 'О компании', 'Контакты'];

  const clickNavbar = () => {
    setIsShowShort(!isShowShort);
  };

  const getShortButtonIsShow = () => isShowShort ? 'mobile:flex sm:flex flex-col absolute top-40 right-4' : 'mobile:hidden sm:hidden';

  return (
    <nav className="flex justify-around w-full h-32 items-center bg-[rgba(0,0,0,0.3)]" >
      <div className={`flex justify-between w-full ${className}`.trimEnd()}>
        <Button className={`sm:w-1/2 md:w-1/4 flex`}>
          <img alt="" src="src/assets/logo.png" className="m-auto px-4" />
        </Button>
        <ul className={`${getShortButtonIsShow()} md:flex gap-8 w-auto m-auto`}>
          {navs.map((el) => (<NavItem>{el}</NavItem>))}
        </ul>
        <div className="w-1/6 mobile:flex md:hidden">
          <Button onClick={clickNavbar} className="w-full">
            <Text className="m-auto px-4">...</Text>
          </Button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
