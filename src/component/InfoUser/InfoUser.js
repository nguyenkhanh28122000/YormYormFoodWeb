import classNames from 'classnames/bind';
import styles from './infoUser.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import configs from '~/configs';
import { Button } from '~/component';

const cx = classNames.bind(styles);

function InfoUser({ nameUser, active = false, onClick }) {
    return (
        <div className={cx('wrapper', { active })} onClick={onClick}>
            <span className={cx('name-user')}>{nameUser}</span>
            <div className={cx('content')}>
                <Button to={configs.routes.profile}>profile</Button>
                <Button to={configs.routes.home} colorRed>
                    profile
                </Button>
            </div>
            <span className={cx('accout')}>
                <Link to={configs.routes.login}>login</Link> or <Link to={configs.routes.register}>register</Link>
            </span>
        </div>
    );
}

InfoUser.propTypes = {
    nameUser: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

export default InfoUser;
