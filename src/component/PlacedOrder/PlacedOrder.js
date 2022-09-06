import classNames from 'classnames/bind';
import styles from './placedOrder.module.scss';
import PropTypes from 'prop-types';

import Item from './item';
const cx = classNames.bind(styles);

function PlacedOrder({
    className,
    children,
    time,
    name,
    number,
    email,
    address,
    orders,
    total,
    payMothod,
    payStatus = 'pending',
}) {
    const clases = cx('wrapper', { [className]: className });

    return (
        <div className={clases}>
            <Item title="places on :" detail={time} />
            <Item title="name :" detail={name} />
            <Item title="number :" detail={number} />
            <Item title="email :" detail={email} />
            <Item title="address :" detail={address} />
            <Item title="your orders :" detail={orders} />
            <Item title="total price :" detail={total} />
            <Item title="total price :" detail={payMothod} />
            <Item title="total price :" detail={payStatus} />
        </div>
    );
}

PlacedOrder.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    time: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string,
    address: PropTypes.string.isRequired,
    orders: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    payMothod: PropTypes.string,
    payStatus: PropTypes.string,
};
export default PlacedOrder;
