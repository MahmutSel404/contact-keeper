import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/Auth/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  });
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </label>
        </div>
        <input
          type='submit'
          value='login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
