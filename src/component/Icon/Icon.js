import classNames from 'classnames/bind';
import styles from './icon.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Icon({ className, icon, to, href, children, border = false, disable = false, onClick, ...passProps }) {
    let Comp = 'div';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((keyprop) => {
            if (keyprop.startsWith('on') && typeof props[keyprop] === 'function') {
                delete props[keyprop];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const clases = cx('wrapper', {
        [className]: className,
        border,
    });

    return (
        <Comp className={clases} {...props}>
            {icon}
            {children}
        </Comp>
    );
}

Icon.protoTypes = {
    className: PropTypes.string,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    border: PropTypes.bool,
    disable: PropTypes.bool,
};

export default Icon;
