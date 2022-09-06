import './menu.module.scss';

import { TitlePage, Title, BoxItem, ContainerElement } from '~/component';
import { productInfos } from '~/assets';

function Menu() {
    return (
        <>
            <TitlePage namePage="our menu" page="menu" />
            <section>
                <Title>latest dishes</Title>
                <ContainerElement container33>
                    <BoxItem
                        image={productInfos.dessert3.img}
                        name={productInfos.dessert3.name}
                        classify={productInfos.dessert3.classify}
                        priceItem={productInfos.dessert3.price}
                    />
                    <BoxItem
                        image={productInfos.dessert6.img}
                        name={productInfos.dessert6.name}
                        classify={productInfos.dessert6.classify}
                        priceItem={productInfos.dessert6.price}
                    />
                    <BoxItem
                        image={productInfos.dish2.img}
                        name={productInfos.dish2.name}
                        classify={productInfos.dish2.classify}
                        priceItem={productInfos.dish2.price}
                    />
                    <BoxItem
                        image={productInfos.drink1.img}
                        name={productInfos.drink1.name}
                        classify={productInfos.drink1.classify}
                        priceItem={productInfos.drink1.price}
                    />
                    <BoxItem
                        image={productInfos.pizza4.img}
                        name={productInfos.pizza4.name}
                        classify={productInfos.pizza4.classify}
                        priceItem={productInfos.pizza4.price}
                    />
                    <BoxItem
                        image={productInfos.pizza5.img}
                        name={productInfos.pizza5.name}
                        classify={productInfos.pizza5.classify}
                        priceItem={productInfos.pizza5.price}
                    />
                    <BoxItem
                        image={productInfos.dish3.img}
                        name={productInfos.dish3.name}
                        classify={productInfos.dish3.classify}
                        priceItem={productInfos.dish3.price}
                    />
                    <BoxItem
                        image={productInfos.drink3.img}
                        name={productInfos.drink3.name}
                        classify={productInfos.drink3.classify}
                        priceItem={productInfos.drink3.price}
                    />
                    <BoxItem
                        image={productInfos.drink5.img}
                        name={productInfos.drink5.name}
                        classify={productInfos.drink5.classify}
                        priceItem={productInfos.drink5.price}
                    />
                    <BoxItem
                        image={productInfos.dessert5.img}
                        name={productInfos.dessert5.name}
                        classify={productInfos.dessert5.classify}
                        priceItem={productInfos.dessert5.price}
                    />
                </ContainerElement>
            </section>
        </>
    );
}

export default Menu;
