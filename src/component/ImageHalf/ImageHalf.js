import classNames from 'classnames/bind';
import styles from './imageHalf.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ImageHalf({ className, image }) {
    const clases = cx('wraaper', {
        [className]: className,
    });

    return (
        <div className={clases}>
            <img src={image} alt="error"></img>
        </div>
    );
}

ImageHalf.propTypes = {
    className: PropTypes.string,
    image: PropTypes.node.isRequired,
};

export default ImageHalf;
