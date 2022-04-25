// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import { FormWindow } from './FormWindow';
import {
  Typography,
  Input
} from '../../../ui';

// Assets
import UserIcon from '../../../../assets/images/authentication/authorization-button-icon.svg';
import EmailIcon from '../../../../assets/images/authentication/email-icon.svg';
import KeyIcon from '../../../../assets/images/authentication/key-icon.svg';
import DiscountIcon from '../../../../assets/images/authentication/discount-icon.svg';

// Styled Components
const StyledFormWindow = styled(FormWindow)`
  
  
 
`;

// Exports
export const Registration = () => {

  const [loginValue, setLoginValue] = useState('');

  return (
    <StyledFormWindow>
      <Typography
        variant='title'
        color='gray'
        align='center'
      >
        РЕГИСТРАЦИЯ
      </Typography>

      <Typography
        variant='small'
        color='gray'
        align='center'
      >
        ВНИМАТЕЛЬНО ВВОДИТЕ ЛИЧНЫЕ
        ДАННЫЕ, ОТВЕТСТВЕННОСТЬ ЗА ВАШ
        АККАУНТ НЕСЕТЕ ТОЛЬКО ВЫ.
      </Typography>

      <Input
        variant='text'
        label='Логин'
        Icon={ UserIcon }
        isValid={ "false" }
        value={ loginValue }
        onChange={ event => setLoginValue(event.target.value) }
      />
    </StyledFormWindow>
  );
};
