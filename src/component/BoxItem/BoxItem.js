import classNames from 'classnames/bind';
import styles from './boxItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import configs from '~/configs';
import { Icon } from '~/component';
import { faCartShopping, faEye, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function BoxItem({ image, name, classify, priceItem, boxCart = false }) {
    // const priceItem = price;

    const [valueCart, setValueCart] = useState(1);
    const [value, setValue] = useState(1);
    const [sum, setSum] = useState(priceItem);

    const handelValueChange = (e) => {
        setValueCart(e.target.value);
    };

    useEffect(() => {
        setSum(priceItem * valueCart);
    }, [valueCart]);

    return (
        <div className={cx('box')}>
            <div className={cx('image')}>
                <img src={image} alt=""></img>
                <Icon
                    to={configs.routes.home}
                    icon={<FontAwesomeIcon icon={faEye} />}
                    border
                    className={cx('eyeBtn', 'btn')}
                />
                {boxCart ? (
                    <Icon icon={<FontAwesomeIcon icon={faXmark} />} className={cx('closeBtn', 'btn')} border />
                ) : (
                    <Icon
                        to={configs.routes.home}
                        icon={<FontAwesomeIcon icon={faCartShopping} />}
                        border
                        className={cx('shopBtn', 'btn')}
                    />
                )}
            </div>

            {boxCart ? (
                <div className={cx('content')}>
                    <h3 className={cx('namefood')}>{name}</h3>
                    <div className={cx('flex')}>
                        <div className={cx('price')}>
                            <span>$</span>
                            {priceItem}
                        </div>
                        <div className={cx('input')}>
                            <input
                                type="number"
                                value={valueCart}
                                min="1"
                                max="99"
                                onChange={handelValueChange}
                            ></input>
                            <Icon
                                icon={<FontAwesomeIcon icon={faPenToSquare} />}
                                border
                                className={cx('penBtn')}
                            ></Icon>
                        </div>
                    </div>
                    <p className={cx('total')}>
                        sub total :<span>${sum}</span>
                    </p>
                </div>
            ) : (
                <div className={cx('content')}>
                    <Link to={configs.routes.home}>{classify}</Link>
                    <h3 className={cx('namefood')}>{name}</h3>
                    <div className={cx('flex')}>
                        <div className={cx('price')}>
                            <span>$</span>
                            {priceItem}
                            <span>/-</span>
                        </div>
                        <input
                            type="number"
                            value={value}
                            min="1"
                            max="99"
                            onChange={(e) => setValue(e.target.value)}
                        ></input>
                    </div>
                </div>
            )}
        </div>
    );
}

BoxItem.propTypes = {
    image: PropTypes.node,
    name: PropTypes.string,
    classify: PropTypes.string,
    priceItem: PropTypes.number,
    boxCart: PropTypes.bool,
};

export default BoxItem;
