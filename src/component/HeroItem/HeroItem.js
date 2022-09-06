import classNames from 'classnames/bind';
import styles from './heroItem.module.scss';
import PropTypes from 'prop-types';

import configs from '~/configs';
import { Button, ImageHalf } from '~/component';
const cx = classNames.bind(styles);

function HeroItem({ howOrder, nameFood, pic }) {
    return (
        <div className={cx('slide')}>
            <div className={cx('content')}>
                <span>{howOrder}</span>
                <h3>{nameFood}</h3>
                <Button to={configs.routes.menu}>see menu</Button>
            </div>
            <ImageHalf image={pic} />
        </div>
    );
}

HeroItem.propTypes = {
    howOrder: PropTypes.string.isRequired,
    nameFood: PropTypes.string.isRequired,
    pic: PropTypes.node.isRequired,
};
export default HeroItem;
