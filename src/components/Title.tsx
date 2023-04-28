import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { TitleSize } from '../types/common';

type Props = {
    size?: keyof typeof TitleSize;
};

const Title: FC<PropsWithChildren<Props>> = (props) => {
    const { size = 'REGULAR', children } = props;
    const fragment = useRef<HTMLDivElement>(null);
    const classList: Record<keyof typeof TitleSize, string> = {
        MAX: 'font-semibold text-6xl tracking-wide',
        EXTRA: 'font-semibold text-2xl',
        MEDIUM: 'font-medium text-lg',
        REGULAR: 'font-normal text-base',
        SMALL: 'font-light text-sm',
        MIN: 'font-light text-xs',
    };

    useEffect(() => {
        (fragment.current as HTMLDivElement).innerHTML = `<h${TitleSize[size]}>${children}</h${TitleSize[size]}>`;
    }, []);
    
    return (
        <div className={`text-white ${classList[size]}`} ref={fragment}></div>
    );
};

export default Title;