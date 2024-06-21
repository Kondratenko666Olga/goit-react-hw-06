import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({name, number}) => {
    return (
        <div className={styles.contact}>
            <ul className={styles.contactList}>
                <li className={styles.contactName}>{name}</li>
                <li className={styles.contactNumber}>{number}</li>
            </ul>
        </div>
    )
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;