import { nanoid } from "nanoid";
import { Component } from "react";
import ContactList from "./ContactList/ContactList";
import  ContactForm  from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import s from './App.module.css'


export class App extends Component {

 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}  }

  handleChanheName = e => {
    this.setState({ name: e.target.value })
  }
  
  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

     if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts. Try again! `);
      return;
    }

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }))

  }

  deleteContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

   getVisibleContacts = () => {
     const { contacts, filter } = this.state;
     const normalizedFilter = filter.toLowerCase();
     return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  }

  render() {
    const { filter } = this.state;
    const visible = this.getVisibleContacts();
    return ( 
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

  <h1 className={s.title}>Contacts</h1>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visible} onDeleteContact={this.deleteContact} />
        
    </div>
  );}
  
};
