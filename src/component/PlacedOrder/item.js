import classNames from 'classnames/bind';
import styles from './placedOrder.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Item({ title, detail }) {
    let isNumber = false;
    if (typeof detail === 'number') {
        isNumber = true;
    }

    return (
        <p className={cx('itemWrapper')}>
            <span className={cx('title')}>{title}</span>
            {isNumber ? (
                <span className={cx('detail')}>${detail}/-</span>
            ) : (
                <span className={cx('detail')}>{detail}</span>
            )}
        </p>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Item;
