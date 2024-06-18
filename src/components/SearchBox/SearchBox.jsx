import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({value, onChange}) => {
    return(
        <input
            type="text"
            className={styles.searchBox}
            placeholder="Search contacts"
            value={value}
            onChange={onChange}
        />
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;