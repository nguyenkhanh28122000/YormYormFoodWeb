import classNames from 'classnames/bind';
import styles from './contact.module.scss';

import { TitlePage, ImageHalf, ContainerElement, Button } from '~/component';
import { imagesData } from '~/assets';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <TitlePage namePage="contact us" page="contact" />
            <section>
                <ContainerElement className={cx('wrapper')} container40>
                    <ImageHalf image={imagesData.contact} />
                    <form className={cx('body')}>
                        <h3>tell us something!</h3>
                        <div className={cx('bodyInput')}>
                            <input type="text" className={cx('inputItem')} placeholder="enter you name"></input>
                            <input type="number" className={cx('inputItem')} placeholder="enter you number"></input>
                            <input type="text" className={cx('inputItem')} placeholder="enter you gmail"></input>
                            <textarea
                                className={cx('inputItem')}
                                placeholder="enter you message"
                                cols="25"
                                rows="7"
                                maxLength="400"
                            ></textarea>
                        </div>
                        <Button>send messages</Button>
                    </form>
                </ContainerElement>
            </section>
        </>
    );
}

export default Contact;
