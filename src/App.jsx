import { useState, useEffect } from 'react';
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import contact from '../contact.json'


const App = () => {
  const [contacts, setContacts] = useState(() => {
      const savedContacts = localStorage.getItem('contacts');
      return savedContacts ? JSON.parse(savedContacts) : contact;
    });

  const [filter, setFilter] = useState('');

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
      setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = (id) => {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleSearchChange = (e) => {
      setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
      );
  };

  return (
      <div className='mainContainer'>
          <h1>Phonebook</h1>
          <ContactForm onAdd={addContact} />
          <SearchBox value={filter} onChange={handleSearchChange} />
          <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
      </div>
  );
};

export default App
