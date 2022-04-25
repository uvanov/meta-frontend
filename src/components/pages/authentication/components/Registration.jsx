// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Validator from 'validator/es/index';

// Local modules
import { FormWindow } from './FormWindow';
import {
  Input,
  Flex,
  Button
} from '../../../ui';

// Assets
import { ReactComponent as UserIcon } from '../../../../assets/images/authentication/authorization-button-icon.svg';
import { ReactComponent as EmailIcon } from '../../../../assets/images/authentication/email-icon.svg';
import { ReactComponent as KeyIcon } from '../../../../assets/images/authentication/key-icon.svg';
import { ReactComponent as DiscountIcon } from '../../../../assets/images/authentication/discount-icon.svg';

// Styled Components

// Exports
export const Registration = () => {

  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
  const [promoValue, setPromoValue] = useState('');

  let values = {loginValue, emailValue, passwordValue, repeatPasswordValue, promoValue};

  return (
    <FormWindow
      title='РЕГИСТРАЦИЯ'
      subtitle='ВНИМАТЕЛЬНО ВВОДИТЕ ЛИЧНЫЕ ДАННЫЕ, ОТВЕТСТВЕННОСТЬ ЗА ВАШ АККАУНТ НЕСЕТЕ ТОЛЬКО ВЫ.'
    >
      <Flex
        direction='column'
        gap='10px'
      >
        <Input
          variant='text'
          label='Логин'
          placeholder='Ваш логин'
          Icon={ UserIcon }
          fullWidth
          isValid={ true }
          value={ loginValue }
          onChange={ event => setLoginValue(event.target.value) }
        />
        <Input
          variant='text'
          label='Почта'
          placeholder='Ваша почта'
          Icon={ EmailIcon }
          fullWidth
          isValid={ true }
          value={ emailValue }
          onChange={ event => setEmailValue(event.target.value) }
        />
        <Input
          variant='password'
          label='Пароль'
          placeholder='Ваш пароль'
          Icon={ KeyIcon }
          fullWidth
          isValid={ true }
          value={ passwordValue }
          onChange={ event => setPasswordValue(event.target.value) }
        />
        <Input
          variant='password'
          label='Повторите пароль'
          placeholder='Ваш пароль'
          Icon={ KeyIcon }
          fullWidth
          isValid={ true }
          value={ repeatPasswordValue }
          onChange={ event => setRepeatPasswordValue(event.target.value) }
        />
        <Input
          variant='text'
          label='Промокод'
          placeholder='Ваш промокод'
          Icon={ DiscountIcon }
          fullWidth
          isValid={ true }
          value={ promoValue }
          onChange={ event => setPromoValue(event.target.value) }
          invalidErrorText='Немного текста'
        />
        <Button
          variant='danger'
          large={ true }
          fullWidth={ true }
          onClick={ () => console.log(values) }
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </Flex>
    </FormWindow>
  );
};
