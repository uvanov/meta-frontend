// Import modules
import React, { useState } from 'react';
import { Input } from './components/ui';
import { ReactComponent as SomeIcon } from './assets/images/arrow-right.svg';


// Exports
export const App = () => {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');


  return (
    <div style={ { maxWidth: '50%' } }>
      <Input
        Icon={ SomeIcon }
        variant='text'
        label='Логин'
        placeholder='Ваш логин'
        value={ loginValue }
        onChange={ (event) => setLoginValue(event.target.value) }
        isValid={ true }
        invalidErrorText='Этот логин уже занят, пожалуйста, придумайте другой логин.'
      />

      <Input
        Icon={ SomeIcon }
        variant='password'
        label='Пароль'
        placeholder='Ваш пароль'
        value={ passwordValue }
        onChange={ (event) => setPasswordValue(event.target.value) }
        isValid={ true }
      />


    </div>
  );
};

