import classNames from 'classnames/bind';
import styles from './title.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Title({ children }) {
    return <h2 className={cx('title')}>{children}</h2>;
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Title;
