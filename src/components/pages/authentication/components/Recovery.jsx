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
import { ReactComponent as EmailIcon } from '../../../../assets/images/authentication/email-icon.svg';
import { ReactComponent as CodeIcon } from '../../../../assets/images/authentication/code-icon.svg';

// Styled Components
const StyledFormWindow = styled(FormWindow)`
  padding-top: 98px;
  padding-bottom: 98px;
`;

// Exports
export const Recovery = () => {

  const [emailValue, setEmailValue] = useState('');
  const [codeValue, setCodeValue] = useState('');

  return (
    <StyledFormWindow
      title='ВОССТАНОВЛЕНИЕ'
      subtitle='ВНИМАТЕЛЬНО ВВОДИТЕ ЛИЧНЫЕ ДАННЫЕ, ОТВЕТСТВЕННОСТЬ ЗА ВАШ АККАУНТ НЕСЕТЕ ТОЛЬКО ВЫ.'
    >
      <Flex
        direction='column'
        gap='10px'
      >
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
          variant='text'
          label='Код из письма'
          placeholder='Код'
          Icon={ CodeIcon }
          fullWidth
          isValid={ true }
          value={ codeValue }
          onChange={ event => setCodeValue(event.target.value) }
        />
        <Button
          variant='danger'
          large={ true }
          fullWidth={ true }
          onClick={ () => console.log() }
        >
          ОТПРАВИТЬ КОД
        </Button>
        <Button
          variant='default'
          fullWidth={ true }
          onClick={ () => console.log() }
        >
          НАЗАД
        </Button>
      </Flex>
    </StyledFormWindow>
  );
};
