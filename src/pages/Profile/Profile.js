import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { TitlePage, Button, InfoProfile } from '~/component';
import { imagesData } from '~/assets';
import configs from '~/configs';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <>
            <TitlePage namePage="my profile" page="profile" />
            <section>
                <div className={cx('body')}>
                    <img src={imagesData.userIcon} alt="error" className={cx('image')}></img>
                    <div className={cx('bodyContent')}>
                        <InfoProfile icon={<FontAwesomeIcon icon={faUser} />} detail="nguyễn khánh" />
                        <InfoProfile icon={<FontAwesomeIcon icon={faPhone} />} detail="+84 338204180" />
                        <InfoProfile icon={<FontAwesomeIcon icon={faEnvelope} />} detail="kh2000987@gmail.com" />
                        <Button className={cx('btn')} to={configs.routes.updateProfile}>
                            update info
                        </Button>
                        <InfoProfile
                            icon={<FontAwesomeIcon icon={faLocationDot} />}
                            detail="Lương Phúc - Việt Long - Sóc Sơn - Hà Nội"
                        />
                        <Button className={cx('btn')} to={configs.routes.updateAddress}>
                            update address
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
