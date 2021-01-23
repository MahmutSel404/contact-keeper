import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactState from '../../context/Contact/ContactState';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, getContacts } = contactContext;
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
