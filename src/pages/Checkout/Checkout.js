import classNames from 'classnames/bind';
import styles from './checkout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TitlePage, Title, TotalItem, Button, InfoProfile, Input } from '~/component';
import configs from '~/configs';
import { faUser, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const options = ['cash on delivery', 'credit card', 'paytm', 'paypal'];

function Checkout() {
    return (
        <>
            <TitlePage namePage="checkout" page="checkout" />
            <section>
                <Title>order summary</Title>
                <form className={cx('wrapper')}>
                    <div className={cx('bodyTotal')}>
                        <h3 className={cx('title')}>cart items</h3>
                        <TotalItem name="delicious pizza" amount={2} price={4} />
                        <TotalItem name="main dish" amount={2} price={4} />

                        <TotalItem name="delicious dessert" amount={2} price={4} />
                        <TotalItem name="grand total :" priceTotal={24} totalStyle />

                        <Button to={configs.routes.cart}>view cart</Button>
                    </div>
                    <div className={cx('info')}>
                        <h3 className={cx('title')}>your info</h3>
                        <InfoProfile
                            className={cx('infoItem')}
                            icon={<FontAwesomeIcon icon={faUser} />}
                            detail="nguyễn khánh"
                        />
                        <InfoProfile
                            className={cx('infoItem')}
                            icon={<FontAwesomeIcon icon={faPhone} />}
                            detail="+84 338204180"
                        />
                        <InfoProfile
                            className={cx('infoItem')}
                            icon={<FontAwesomeIcon icon={faEnvelope} />}
                            detail="kh2000987@gmail.com"
                        />
                        <Button className={cx('btn')} to={configs.routes.updateProfile}>
                            update info
                        </Button>
                        <h3 className={cx('title')}>delivery address</h3>
                        <InfoProfile
                            className={cx('infoItem')}
                            icon={<FontAwesomeIcon icon={faLocationDot} />}
                            detail="Lương Phúc - Việt Long - Sóc Sơn - Hà Nội"
                        />
                        <Button className={cx('btn')} to={configs.routes.updateAddress}>
                            update address
                        </Button>
                        <Input selecterStyle options={options} className={cx('inputSelect')} />
                        <Button className={cx('orderBtn')}>place order</Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Checkout;
