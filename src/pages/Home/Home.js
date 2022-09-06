import classNames from 'classnames/bind';
import styles from './home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { imagesData, productInfos } from '~/assets';
import { BoxItem, ContainerElement, Title, HeroItem, BoxInfo, Button } from '~/component';
import configs from '~/configs';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <section>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <HeroItem howOrder="order online" nameFood="delicious piza" pic={imagesData.home1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroItem howOrder="order online" nameFood="double hamburger" pic={imagesData.home2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroItem howOrder="order online" nameFood="roasted chicken" pic={imagesData.home3} />
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className={cx('category')}>
                <Title>food category</Title>
                <ContainerElement container27>
                    <BoxInfo src={imagesData.cat1} title="fast food" to={configs.routes.home} hover />
                    <BoxInfo src={imagesData.cat2} title="main dishes" to={configs.routes.home} hover />
                    <BoxInfo src={imagesData.cat3} title="drinks" to={configs.routes.home} hover />
                    <BoxInfo src={imagesData.cat4} title="desserts" to={configs.routes.home} hover />
                </ContainerElement>
            </section>
            <section>
                <Title>latest dishes</Title>
                <ContainerElement container33>
                    <BoxItem
                        image={productInfos.dessert1.img}
                        name={productInfos.dessert1.name}
                        classify={productInfos.dessert1.classify}
                        priceItem={productInfos.dessert1.price}
                    />
                    <BoxItem
                        image={productInfos.burger1.img}
                        name={productInfos.burger1.name}
                        classify={productInfos.burger1.classify}
                        priceItem={productInfos.burger1.price}
                    />
                    <BoxItem
                        image={productInfos.dessert6.img}
                        name={productInfos.dessert6.name}
                        classify={productInfos.dessert6.classify}
                        priceItem={productInfos.dessert6.price}
                    />
                    <BoxItem
                        image={productInfos.dish3.img}
                        name={productInfos.dish3.name}
                        classify={productInfos.dish3.classify}
                        priceItem={productInfos.dish3.price}
                    />
                    <BoxItem
                        image={productInfos.pizza2.img}
                        name={productInfos.pizza2.name}
                        classify={productInfos.pizza2.classify}
                        priceItem={productInfos.pizza2.price}
                    />
                    <BoxItem
                        image={productInfos.drink2.img}
                        name={productInfos.drink2.name}
                        classify={productInfos.drink2.classify}
                        priceItem={productInfos.drink2.price}
                    />
                </ContainerElement>

                <div className={cx('btn')}>
                    <Button to={configs.routes.menu}>view all</Button>
                </div>
            </section>
        </div>
    );
}

export default Home;
