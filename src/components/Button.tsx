import { FC, PropsWithChildren } from 'react';

import { ViewType } from '../types/common';

type Props = {
    type?: ViewType;
    value?: string;
};

const Button: FC<PropsWithChildren<Props>> = (props) => {
    const { type = 'primary', value = '', children = value } = props;
    const classList: Record<ViewType, string> = {
        primary: 'bg',
        secondary: '',
        thirdy: '',
    };

    const asset: Record<ViewType, string>  = {
        primary: ``,
        secondary: ``,
        thirdy: ``,
    };

    return (
        <button
          className={`w-[inherit] ${classList[type]}`}
          style={{ backgroundImage: `url(${asset[type]})`}}
        >
            {children}
        </button>
    );
};

export default Button;
