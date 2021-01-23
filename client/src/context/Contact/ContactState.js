import { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: {},
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };
  //Add Contact
  const addContact = async (contact) => {
    try {
      const res = await axios.post('/api/contacts', contact, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Update Contact
  const updateContact = async (contact) => {
    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Clear contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        error: state.error,
        getContacts,
        addContact,
        deleteContact,
        clearContacts,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
