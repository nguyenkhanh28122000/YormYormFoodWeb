import classNames from 'classnames/bind';
import styles from './totalItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TotalItem({ className, name, amount, price, priceTotal, totalStyle = false }) {
    const sum = price * amount;
    const clases = cx('wrapper', {
        [className]: className,
        totalStyle,
    });

    return (
        <p className={clases}>
            <span className={cx('nameItem')}>
                {name} {amount}
            </span>
            <span className={cx('priceTotal')}>${totalStyle ? priceTotal : sum}</span>
        </p>
    );
}

TotalItem.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
    priceTotal: PropTypes.number,
    totalStyle: PropTypes.bool,
};

export default TotalItem;
