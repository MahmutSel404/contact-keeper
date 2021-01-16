import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactState from '../../context/Contact/ContactState';
import ContactItem from './ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
