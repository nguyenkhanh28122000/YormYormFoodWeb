import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';

import { Header, Footer, Loader } from '~/layouts/componentLayouts';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
            <Loader />
        </div>
    );
}

export default DefaultLayout;
