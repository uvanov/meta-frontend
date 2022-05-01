// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Local modules
import { FormWindow } from './FormWindow';
import {
  Input,
  Flex,
  Button
} from '@ui/index';
import { useCheckForErrors } from '@hooks/index';
import { useAppDispatch } from '@hooks/state';
import { authenticationSlice } from '@store/slices/AuthenticationSlice';

// Assets
import { ReactComponent as EmailIcon } from '@images/icons/email-icon.svg';
import { ReactComponent as CodeIcon } from '@images/icons/code-icon.svg';

// Styled Components
const StyledFormWindow = styled(FormWindow)`
  padding-top: 98px;
  padding-bottom: 98px;
`;

// Constants
const MAX_CODE_CHARACTERS = 6;
const CODE_REGEX = /^[a-zA-Z0-9_.-]*$/;

const VALIDATION_TEXT_ERRORS = {
  EMAIL_REQUIRED: 'Введите почту',
  EMAIL_WRONG_FORMAT: 'Неверный формат почты',
  CODE_REQUIRED: 'Введите код',
  WRONG_CODE_FORMAT: 'Код содержит только цифры',
  MAX_CODE_SYMBOLS_ERROR: `Код не может быть длинее ${ MAX_CODE_CHARACTERS } символов`,
};

const submitHandler = (values) => {
  global.mp.trigger('someEvent', JSON.stringify(values));
}

// Exports
export const Recovery = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      code: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.EMAIL_REQUIRED)
        .email(VALIDATION_TEXT_ERRORS.EMAIL_WRONG_FORMAT),
      code: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.CODE_REQUIRED)
        .max(MAX_CODE_CHARACTERS, VALIDATION_TEXT_ERRORS.MAX_CODE_SYMBOLS_ERROR)
        .matches(CODE_REGEX, VALIDATION_TEXT_ERRORS.WRONG_CODE_FORMAT)
    }),
    onSubmit: (values) => {
      submitHandler(values);
    }
  });

  const [isEmailValid, emailErrorText] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'email',
    interface: 'recovery'
  });
  const [isCodeValid, codeErrorText] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'code',
    interface: 'recovery'
  });

  const dispatch = useAppDispatch();
  const { setAuthenticationView } = authenticationSlice.actions;

  const switchToAuthorization = () => {
    dispatch(setAuthenticationView({ view: 'authorization' }));
  };

  return (
    <StyledFormWindow
      title='ВОССТАНОВЛЕНИЕ'
      subtitle='ВНИМАТЕЛЬНО ВВОДИТЕ ЛИЧНЫЕ ДАННЫЕ, ОТВЕТСТВЕННОСТЬ ЗА ВАШ АККАУНТ НЕСЕТЕ ТОЛЬКО ВЫ.'
    >
      <form
        onSubmit={ formik.handleSubmit }
        autoComplete='off'
      >
        <Flex
          direction='column'
          gap='10px'
        >
          <Input
            id='email'
            name='email'
            variant='text'
            label='Почта'
            placeholder='Ваша почта'
            value={ formik.values.email }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            Icon={ EmailIcon }
            fullWidth
            isValid={ isEmailValid }
            errorText={ emailErrorText }
          />
          <Input
            id='code'
            name='code'
            variant='text'
            label='Код из письма'
            value={ formik.values.code }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            placeholder='Код'
            Icon={ CodeIcon }
            fullWidth
            isValid={ isCodeValid }
            errorText={ codeErrorText }
          />
          <Button
            type='submit'
            variant='danger'
            large={ true }
            fullWidth={ true }
          >
            ОТПРАВИТЬ КОД
          </Button>
          <Button
            variant='default'
            fullWidth={ true }
            onClick={ () => switchToAuthorization() }
          >
            НАЗАД
          </Button>
        </Flex>
      </form>
    </StyledFormWindow>
  );
};
