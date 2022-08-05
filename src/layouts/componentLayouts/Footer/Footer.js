import classNames from 'classnames/bind';
import styles from './footer.module.scss';

import { imagesData } from '~/assets';
import { BoxInfo } from '~/component';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <section className={cx('wrapper')}>
                <BoxInfo className={cx('boxFooter')} src={imagesData.emailIcon} title="our email">
                    <a href={'kh2000987@gmail.com'} className={cx('content')}>
                        kh2000987@gmail.com
                    </a>
                    <a href={'nguyenkhanh28122000@gmail.com'} className={cx('content')}>
                        nguyenkhanh28122000@gmail.com
                    </a>
                </BoxInfo>
                <BoxInfo className={cx('boxFooter')} src={imagesData.clockIcon} title="opening hours">
                    <p className={cx('content')}>00:07am to 00:10pm</p>
                </BoxInfo>
                <BoxInfo className={cx('boxFooter')} src={imagesData.mapIcon} title="our address">
                    <a href={'6WWJ+RX Sóc Sơn, Hà Nội, Việt Nam'} className={cx('content')}>
                        Sóc Sơn - Hà Nội
                    </a>
                </BoxInfo>
                <BoxInfo className={cx('boxFooter')} src={imagesData.phoneIcon} title="our number">
                    <a href={'tel:+84338204170'} className={cx('content')}>
                        +84338204170
                    </a>
                    <a href={'tel:+84989337699'} className={cx('content')}>
                        +84338204170
                    </a>
                </BoxInfo>
            </section>

            <div className={cx('credit')}>
                © copyright @ 2022 by
                <span> mr. web designer </span>| all rights reserved!
            </div>
        </footer>
    );
}

export default Footer;
