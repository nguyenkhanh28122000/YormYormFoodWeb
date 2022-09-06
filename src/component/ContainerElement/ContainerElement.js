import classNames from 'classnames/bind';
import styles from './containerElement.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ContainerElement({
    className,
    children,
    container40 = false,
    container33 = false,
    container30 = false,
    container27 = false,
}) {
    const clases = cx('container', {
        [className]: className,
        container40,
        container33,
        container30,
        container27,
    });

    return <div className={clases}>{children}</div>;
}

ContainerElement.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    container40: PropTypes.bool,
    container33: PropTypes.bool,
    container30: PropTypes.bool,
    container27: PropTypes.bool,
};

export default ContainerElement;
