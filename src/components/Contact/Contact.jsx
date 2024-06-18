import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({id, name, number, onDelete}) => {
    return (
        <div className={styles.contact}>
            <ul className={styles.contactList}>
                <li className={styles.contactName}>{name}</li>
                <li className={styles.contactNumber}>{number}</li>
            </ul>
            <button className={styles.deleteBtn} onClick={() => onDelete(id)}>Delete</button>
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