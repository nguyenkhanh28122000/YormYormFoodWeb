import classNames from 'classnames/bind';
import styles from './about.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import configs from '~/configs';
import { imagesData } from '~/assets';
import comments from '~/data/comments';
import { TitlePage, Button, ImageHalf, Title, ContainerElement, BoxInfo, BoxReview } from '~/component';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <TitlePage namePage="about us" page="about" />
            <section>
                <div className={cx('headerAbout')}>
                    <ImageHalf image={imagesData.about} />
                    <div className={cx('content')}>
                        <h3>Why Choose Us?</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit incidunt quidem, aspernatur
                            magni expedita dicta suscipit amet ad debitis ipsa asperiores fugit, consectetur
                            consequuntur recusandae at, labore possimus! Eligendi unde velit fugiat, quaerat ea
                            perferendis veniam tenetur eveniet eum veritatis!
                        </p>

                        <Button to={configs.routes.menu}>our menu</Button>
                    </div>
                </div>
            </section>
            <section>
                <Title>3 simple steps</Title>
                <ContainerElement container33>
                    <BoxInfo title="select food" src={imagesData.step1} className={cx('step')}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolores.</p>
                    </BoxInfo>
                    <BoxInfo title="30 minutes delivery" src={imagesData.step2} className={cx('step')}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolores.</p>
                    </BoxInfo>
                    <BoxInfo title="enjoy food!" src={imagesData.step3} className={cx('step')}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolores.</p>
                    </BoxInfo>
                </ContainerElement>
            </section>
            <section>
                <Title>customer's reviews</Title>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {comments.map((comment) => (
                        <SwiperSlide>
                            <BoxReview
                                key={comment.id}
                                image={comment.avatar}
                                name={comment.name}
                                content={comment.content}
                            ></BoxReview>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
}

export default About;
