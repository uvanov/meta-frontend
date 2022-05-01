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
} from '../../../ui';

// Assets
import { ReactComponent as UserIcon } from '@images/icons/user-icon.svg';
import { ReactComponent as KeyIcon } from '@images/icons/key-icon.svg';
import { useAppDispatch } from '../../../../hooks/state';
import { authenticationSlice } from '../../../../store/slices/AuthenticationSlice';
import { useCheckForErrors } from '../../../../hooks';


// Styled Components
const StyledFormWindow = styled(FormWindow)`
  padding-top: 98px;
  padding-bottom: 98px;
`;

// Constants
const US_LOCALES_SPECIAL_CHARACTERS_REGEX = /^[a-zA-Z$@$!%*?&#^-_. +]+$/;
const US_LOCALES_REGEX = /^[A-Za-z]+$/;

const MAX_SYMBOLS = 6;
const MAX_PASSWORD_SYMBOLS = 30;

const VALIDATION_TEXT_ERRORS = {
  LOGIN_REQUIRED: 'Введите логин',
  PASSWORD_REQUIRED: 'Введите пароль',
  PASSWORD_REPEAT_REQUIRED: 'Повторите свой пароль',
  PASSWORDS_MUST_MATCH: 'Пароль должны совпадать',
  MAX_SYMBOLS_ERROR: `Максимум ${ MAX_SYMBOLS } символов`,
  MAX_PASSWORD_SYMBOLS_ERROR: `Серьёзно? У тебя пароль больше ${ MAX_PASSWORD_SYMBOLS } символов? `,
  ONLY_US_LOCALES: 'Только английские буквы',
  ONLY_US_AND_SPECIAL_SYMBOLS: 'Только английские буквы и спец. символы'
};

const submitHandler = (values) => {
  global.mp.trigger('client.userLogin', JSON.stringify(values));
};

// Exports
export const Authorization = () => {

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.LOGIN_REQUIRED)
        .max(MAX_SYMBOLS, VALIDATION_TEXT_ERRORS.MAX_SYMBOLS_ERROR)
        .matches(US_LOCALES_REGEX, VALIDATION_TEXT_ERRORS.ONLY_US_LOCALES),
      password: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.PASSWORD_REQUIRED)
        .max(MAX_PASSWORD_SYMBOLS, VALIDATION_TEXT_ERRORS.MAX_PASSWORD_SYMBOLS_ERROR)
        .matches(US_LOCALES_SPECIAL_CHARACTERS_REGEX, VALIDATION_TEXT_ERRORS.ONLY_US_AND_SPECIAL_SYMBOLS),
    }),
    onSubmit: (values) => {
      submitHandler(values);
    }
  });

  const [isLoginValid, loginErrorText] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'login',
    interface: 'authorization'
  });
  const [isPasswordValid, passwordErrorText] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'password',
    interface: 'authorization'
  });

  const dispatch = useAppDispatch();
  const { setAuthenticationView } = authenticationSlice.actions;

  const switchToRecovery = () => {
    dispatch(setAuthenticationView({ view: 'recovery' }));
  };

  return (
    <StyledFormWindow
      title='АВТОРИЗАЦИЯ'
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
            id='login'
            name='login'
            variant='text'
            label='Логин'
            value={ formik.values.login }
            placeholder='Ваш логин'
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            Icon={ UserIcon }
            fullWidth
            isValid={ isLoginValid }
            errorText={ loginErrorText }
          />
          <Input
            id='password'
            name='password'
            variant='password'
            label='Пароль'
            value={ formik.values.password }
            placeholder='Ваш пароль'
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            Icon={ KeyIcon }
            fullWidth
            isValid={ isPasswordValid }
            errorText={ passwordErrorText }
          />
          <Button
            variant='danger'
            large={ true }
            fullWidth={ true }
          >
            ВОЙТИ
          </Button>
          <Button
            variant='default'
            fullWidth={ true }
            onClick={ () => switchToRecovery() }
          >
            ЗАБЫЛ ПАРОЛЬ
          </Button>
        </Flex>
      </form>

    </StyledFormWindow>
  );
};
