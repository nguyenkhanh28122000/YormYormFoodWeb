import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { Icon } from '~/component';
const cx = classNames.bind(styles);

function Search({ active = false, parentCallback }) {
    const clases = cx('search', {
        active,
    });

    return (
        <div className={clases}>
            <div className={cx('search-input')}>
                <input type="text" placeholder="enter here..."></input>
                <Icon className={cx('icon-search')} icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            </div>
            <Icon
                className={cx('search-icon--close')}
                icon={<FontAwesomeIcon icon={faXmark} onClick={() => parentCallback()} />}
            />
        </div>
    );
}

Search.propTypes = {
    active: PropTypes.bool,
    parentCallback: PropTypes.func,
};
export default Search;
