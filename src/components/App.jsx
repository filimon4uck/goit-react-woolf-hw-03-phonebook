import { Component } from 'react';
// import styles from './App.module.css';
import ContactForm from './Contact_Form/Conatact_Form';
import { nanoid } from 'nanoid';
import ContactsList from './Contacts_List/Contacts_List';
import Filter from './Filter/Filter';
class App extends Component {
  state = { contacts: [], filter: '' };
  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    if (contactsFromLocalStorage) {
      this.setState({ contacts: JSON.parse(contactsFromLocalStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const nameInLowerCase = contact.name.toLowerCase().trim();
    const isExist = this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === nameInLowerCase
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [{ ...contact, id: nanoid() }, ...prev.contacts],
    }));
  };
  handlerRemoveContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  filterOnChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  filterContacts() {
    const normalValue = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalValue)
    );
  }
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h3>Contacts</h3>
        <div>
          <p>Find contacts by name</p>
          <Filter onFilterChange={this.filterOnChangeHandler} />
        </div>
        {
          <ContactsList
            contacts={this.filterContacts()}
            onRemove={this.handlerRemoveContact}
          />
        }
      </>
    );
  }
}
export default App;
