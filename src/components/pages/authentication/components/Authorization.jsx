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
const StyledFormWindow = styled(FormWindow)`
  padding-top: 98px;
  padding-bottom: 98px;
`;

// Exports
export const Authorization = () => {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  let values = {loginValue, passwordValue};

  return (
    <StyledFormWindow
      title='АВТОРИЗАЦИЯ'
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
          variant='password'
          label='Пароль'
          placeholder='Ваш пароль'
          Icon={ KeyIcon }
          fullWidth
          isValid={ true }
          value={ passwordValue }
          onChange={ event => setPasswordValue(event.target.value) }
        />
        <Button
          variant='danger'
          large={ true }
          fullWidth={ true }
          onClick={ () => console.log(values) }
        >
          ВОЙТИ
        </Button>
        <Button
          variant='default'
          fullWidth={ true }
          onClick={ () => console.log(values) }
        >
          ЗАБЫЛ ПАРОЛЬ
        </Button>
      </Flex>
    </StyledFormWindow>
  );
};
