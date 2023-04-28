import { FC, PropsWithChildren } from 'react';

import { ViewType } from '../types/common';

type Props = {
    type?: ViewType;
    value?: string;
    className?: string;
};

const Button: FC<PropsWithChildren<Props>> = (props) => {
    const { type = 'primary', value = '', className = '', children = value } = props;
    const classList: Record<ViewType, string> = {
        primary: 'pseudo-partial-border border-[rgba(255,255,255,0.25)] border min-h-[8rem]',
        secondary: 'inverse-pseudo-partial-border secondary-pseudo-partial-border',
        thirdy: '',
    };

    return (
        <button
          className={`${className} ${classList[type]} z-50`}
        >
            <div className={`inverse-${classList[type]} p-4 flex`}>
               {children} 
            </div>
        </button>
    );
};

export default Button;
