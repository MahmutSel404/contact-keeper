import React, { useEffect, useContext } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactState from '../../context/Contact/ContactState';
import AuthContext from '../../context/Auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />{' '}
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
