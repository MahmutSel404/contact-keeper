import { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sara',
        email: 'sara@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Sara',
        email: 'sara@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Sara',
        email: 'sara@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
