import classNames from 'classnames/bind';
import styles from './titlePage.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import configs from '~/configs';

const cx = classNames.bind(styles);

function TitlePage({ namePage, page }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{namePage}</h2>
            <p>
                <Link to={configs.routes.home}>home</Link>
                <span>/</span>
                {page}
            </p>
        </div>
    );
}

TitlePage.propTypes = {
    namePage: PropTypes.string.isRequired,
    page: PropTypes.string,
};

export default TitlePage;
