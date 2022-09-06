import classNames from 'classnames/bind';
import styles from './formInput.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import configs from '~/configs';
import { Button } from '~/component';
const cx = classNames.bind(styles);

function FormInput({ className, title, titleBtn, login = false, register = false, children }) {
    const clases = cx('wrapper', {
        [className]: className,
    });
    return (
        <form className={clases}>
            <h2>{title}</h2>
            {children}
            <Button className={cx('btn')}>{titleBtn}</Button>
            {login && (
                <p>
                    don't have an account?
                    <Link to={configs.routes.register}>register now</Link>
                </p>
            )}
            {register && (
                <p>
                    already have an account?
                    <Link to={configs.routes.login}>login now</Link>
                </p>
            )}
        </form>
    );
}

FormInput.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleBtn: PropTypes.string,
    login: PropTypes.bool,
    register: PropTypes.bool,
    children: PropTypes.node,
};

export default FormInput;
