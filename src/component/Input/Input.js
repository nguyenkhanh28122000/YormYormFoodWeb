import classNames from 'classnames/bind';
import styles from './input.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Input({ className, placeholder, type, selecterStyle = false, options, ...passProps }) {
    const props = {
        ...passProps,
    };

    const clases = cx('wrapper', {
        [className]: className,
        selecterStyle,
    });

    const renderOption = (option) => {
        return option.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));
    };

    return selecterStyle ? (
        <select defaultValue="select payment method" className={clases} {...props}>
            <option value>select payment method</option>
            {renderOption(options)}
        </select>
    ) : (
        <input type={type} placeholder={placeholder} className={clases} {...props}></input>
    );
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    selecterStyle: PropTypes.bool,
    options: PropTypes.array,
};

export default Input;
