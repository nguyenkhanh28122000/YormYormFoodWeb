import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import configs from '~/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Icon, Search, InfoUser } from '~/component';
import { faMagnifyingGlass, faCartShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    // let bool = showSearch

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeSearch = () => {
        setShowSearch(false);
    };

    const handelClickMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className={cx('wrapper')}>
            <section className={cx('flex')}>
                <Link to={configs.routes.home} className={cx('logo')}>
                    yum-yum &#128525;
                </Link>

                <nav
                    className={cx('navbar', {
                        active: showMenu,
                    })}
                    onClick={handelClickMenu}
                >
                    <Link to={configs.routes.home}>home</Link>
                    <Link to={configs.routes.about}>about</Link>
                    <Link to={configs.routes.menu}>menu</Link>
                    <Link to={configs.routes.orders}>orders</Link>
                    <Link to={configs.routes.contact}>contact</Link>
                </nav>

                <div className={cx('header-icon')}>
                    <Icon
                        className={cx('icon-search')}
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => setShowSearch(true)} />}
                    />
                    <Icon
                        className={cx('icon-cart')}
                        icon={<FontAwesomeIcon icon={faCartShopping} to={configs.routes.cart} />}
                    >
                        <span>(3)</span>
                    </Icon>
                    <Icon
                        className={cx('icon-users')}
                        icon={<FontAwesomeIcon icon={faUser} onClick={() => setShowInfo(!showInfo)} />}
                    />
                    <Icon
                        className={cx('icon-menu')}
                        icon={<FontAwesomeIcon icon={faBars} onClick={handleShowMenu} />}
                    />
                </div>

                <InfoUser nameUser={'Nguyễn Ngọc Khánh'} active={showInfo} />

                <Search active={showSearch} parentCallback={closeSearch} />
            </section>
        </header>
    );
}

export default Header;
