import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.contactList}>
      {filteredContacts.map(contact => (
                <>
                <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number} />
              <button onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
              </button>
              </>
            ))}
    </div>
  );
};

export default ContactList;
