import classNames from 'classnames/bind';
import styles from './boxReview.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function BoxReview({ image, name, content }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={image} alt="error"></img>
            </div>

            <div className={cx('content')}>
                <p>{content}</p>
                <div className={cx('boxStar')}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

BoxReview.propTypes = {
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    content: PropTypes.string,
};

export default BoxReview;
