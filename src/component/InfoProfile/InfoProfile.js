import classNames from 'classnames/bind';
import styles from './infoProfile.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function InfoProfile({ className, icon, detail, children }) {
    const clases = cx('wrapper', {
        [className]: className,
    });

    return (
        <p className={clases}>
            {icon}
            <span>{detail}</span>
        </p>
    );
}

InfoProfile.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    detail: PropTypes.string,
    children: PropTypes.node,
};

export default InfoProfile;
