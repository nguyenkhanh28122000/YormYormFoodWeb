import classNames from 'classnames/bind';
import styles from './boxInfo.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BoxInfo({ to, title, src, className, hover = false, children }) {
    let Comp = 'div';

    if (to) {
        Comp = Link;
    }

    const clases = cx('wrapper', { [className]: className, hover });
    return (
        <Comp className={clases} to={to}>
            <img src={src} alt="Image Error" />
            <h3>{title}</h3>
            {children}
        </Comp>
    );
}

BoxInfo.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    hover: PropTypes.bool,
    children: PropTypes.node,
};

export default BoxInfo;
