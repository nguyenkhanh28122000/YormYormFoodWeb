import classNames from 'classnames/bind';
import styles from './cart.module.scss';

import { TitlePage, Title, BoxItem, Button, ContainerElement } from '~/component';
import configs from '~/configs';
import { productInfos } from '~/assets';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <>
            <TitlePage namePage="shopping cart" page="cart" />
            <section>
                <Title>your cart</Title>
                <div className={cx('totalPrice')}>
                    <p className={cx('total')}>
                        grand total :<span>$9/-</span>
                    </p>
                    <Button to={configs.routes.checkout}>checkout orders</Button>
                </div>

                <ContainerElement container33>
                    <BoxItem
                        image={productInfos.dessert5.img}
                        name={productInfos.dessert5.name}
                        priceItem={productInfos.dessert5.price}
                        boxCart
                    />
                    <BoxItem
                        image={productInfos.dish3.img}
                        name={productInfos.dish3.name}
                        priceItem={productInfos.dish3.price}
                        boxCart
                    />
                    <BoxItem
                        image={productInfos.drink4.img}
                        name={productInfos.drink4.name}
                        priceItem={productInfos.drink4.price}
                        boxCart
                    />
                    <BoxItem
                        image={productInfos.pizza3.img}
                        name={productInfos.pizza3.name}
                        priceItem={productInfos.pizza3.price}
                        boxCart
                    />
                </ContainerElement>
            </section>
        </>
    );
}

export default Cart;
