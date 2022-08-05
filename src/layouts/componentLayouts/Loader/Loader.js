import classNames from 'classnames/bind';
import styles from './loader.module.scss';
import { useState, useEffect } from 'react';

import { imagesData } from '~/assets';
const cx = classNames.bind(styles);

function Loader() {
    const [showLoader, setShowLoader] = useState(false);

    const handleShowLoader = () => {
        setTimeout(function () {
            setShowLoader(true);
        }, 2000);
    };

    useEffect(() => {
        window.addEventListener('load', handleShowLoader);

        return () => {
            window.removeEventListener('load', handleShowLoader);
        };
    });

    return (
        <div className={cx('loader', { loaderOut: showLoader })}>
            <img src={imagesData.loader} alt=""></img>
        </div>
    );
}

export default Loader;
