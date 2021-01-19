import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login confirm');
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
