import { useState, useEffect } from 'react';
import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import data from './data.json';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value || data;
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    isDublicate(contacts, newContact)
      ? alert(`${newContact.name} is already in contacts 👀`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const isDublicate = (contacts, newContact) => {
    return contacts.some(contact => contact.name === newContact.name);
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLocaleLowerCase();

  const filtredData = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Phonebook onSave={addContact} />
      <Filter onChange={onFilter} value={filter} />
      <ContactsList contacts={filtredData} onDelete={onDelete} />
      <GlobalStyle />
    </Container>
  );
};
