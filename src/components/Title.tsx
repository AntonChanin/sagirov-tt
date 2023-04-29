import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { TitleSize } from '../types/common';

type Props = {
    size?: keyof typeof TitleSize;
    className?: string;
};

const Title: FC<PropsWithChildren<Props>> = (props) => {
    const { size = 'REGULAR', className = '', children } = props;
    const fragment = useRef<HTMLDivElement>(null);
    const classList: Record<keyof typeof TitleSize, string> = {
        MAX: 'font-semibold text-6xl tracking-wider',
        EXTRA: 'font-semibold text-5xl',
        MEDIUM: 'font-normal text-[1.7rem]',
        REGULAR: 'font-normal text-base',
        SMALL: 'font-light text-sm',
        MIN: 'font-light text-xs',
    };

    useEffect(() => {
        (fragment.current as HTMLDivElement).innerHTML = `<h${TitleSize[size]}>${children}</h${TitleSize[size]}>`;
    }, []);
    
    return (
        <div className={`${classList[size]} ${className}`.trimEnd()} ref={fragment}></div>
    );
};

export default Title;