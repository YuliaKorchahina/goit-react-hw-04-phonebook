import { useState } from 'react';
import { Phonebook } from './Phonebook';
import { ContactsList } from './Contacts';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';
import data from './data.json';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(data);
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

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts?.length) {
  //     this.setState({
  //       contacts,
  //     });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts.length !== contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // addContact = newContact => {
  //   this.state.contacts.filter(contact => contact.name === newContact.name)
  //     .length
  //     ? alert(`${newContact.name} is already in contacts 👀`)
  //     : this.setState(prevState => ({
  //         contacts: [...prevState.contacts, newContact],
  //       }));
  // };

  // onDelete = id => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(contact => contact.id !== id),
  //     };
  //   });
  // };

  // onFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // render() {
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
