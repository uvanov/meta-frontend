// Import modules
import React from 'react';
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

// Assets
import { ReactComponent as UserIcon } from '@images/icons/user-icon.svg';
import { ReactComponent as EmailIcon } from '@images/icons/email-icon.svg';
import { ReactComponent as KeyIcon } from '@images/icons/key-icon.svg';
import { ReactComponent as DiscountIcon } from '@images/icons/discount-icon.svg';

// Styled Components

// Constants
const US_LOCALES_SPECIAL_CHARACTERS_REGEX = /^[a-zA-Z$@$!%*?&#^-_. +]+$/;
const US_LOCALES_REGEX = /^[A-Za-z]+$/;

const MAX_SYMBOLS = 6;
const MAX_PASSWORD_SYMBOLS = 30;

const VALIDATION_TEXT_ERRORS = {
  LOGIN_REQUIRED: 'Введите логин',
  EMAIL_REQUIRED: 'Введите почту',
  EMAIL_WRONG_FORMAT: 'Неверный формат почты',
  PASSWORD_REQUIRED: 'Введите пароль',
  PASSWORD_REPEAT_REQUIRED: 'Повторите свой пароль',
  PASSWORDS_MUST_MATCH: 'Пароль должны совпадать',
  MAX_SYMBOLS_ERROR: `Максимум ${ MAX_SYMBOLS } символов`,
  MAX_PASSWORD_SYMBOLS_ERROR: `Серьёзно? У тебя пароль больше ${ MAX_PASSWORD_SYMBOLS } символов? `,
  ONLY_US_LOCALES: 'Только английские буквы',
  ONLY_US_AND_SPECIAL_SYMBOLS: 'Только английские буквы и спец. символы'
};

const submitHandler = (values) => {
  global.mp.trigger('client.userRegistration', JSON.stringify(values))
};

// Exports
export const Registration = () => {

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      repeatPassword: '',
      promo: ''
    },
    // Схема может выглядеть чутка пиздецово, но я вынес все тексты в конфиг выше.
    validationSchema: Yup.object({
      login: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.LOGIN_REQUIRED)
        .max(MAX_SYMBOLS, VALIDATION_TEXT_ERRORS.MAX_SYMBOLS_ERROR)
        .matches(US_LOCALES_REGEX, VALIDATION_TEXT_ERRORS.ONLY_US_LOCALES),
      email: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.EMAIL_REQUIRED)
        .email(VALIDATION_TEXT_ERRORS.EMAIL_WRONG_FORMAT),
      password: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.PASSWORD_REQUIRED)
        .max(MAX_PASSWORD_SYMBOLS, VALIDATION_TEXT_ERRORS.MAX_PASSWORD_SYMBOLS_ERROR)
        .matches(US_LOCALES_SPECIAL_CHARACTERS_REGEX, VALIDATION_TEXT_ERRORS.ONLY_US_AND_SPECIAL_SYMBOLS),
      repeatPassword: Yup.string()
        .required(VALIDATION_TEXT_ERRORS.PASSWORD_REPEAT_REQUIRED)
        .oneOf([Yup.ref('password')], VALIDATION_TEXT_ERRORS.PASSWORDS_MUST_MATCH),
      promo: Yup.string()
        .max(MAX_SYMBOLS, VALIDATION_TEXT_ERRORS.MAX_SYMBOLS_ERROR)
        .matches(US_LOCALES_REGEX, VALIDATION_TEXT_ERRORS.ONLY_US_LOCALES)

    }),
    onSubmit: (values) => {
      submitHandler(values);
    }
  });

  const [ isLoginValid, loginErrorText ] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'login',
    interface: 'registration'
  });
  const [ isEmailValid, emailErrorText ] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'email',
    interface: 'registration'
  });
  const [ isPasswordValid, passwordErrorText ] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'password',
    interface: 'registration'
  });
  const [ isRepeatPasswordValid, repeatPasswordErrorText ] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'repeatPassword',
    interface: 'registration'
  });
  const [ isPromoValid, promoErrorText ] = useCheckForErrors({
    errors: formik.errors,
    touched: formik.touched,
    input: 'promo',
    interface: 'registration'
  });

  return (
    <FormWindow
      title='РЕГИСТРАЦИЯ'
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
            Icon={ UserIcon }
            fullWidth
            isValid={ isLoginValid }
            errorText={ loginErrorText }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
          />
          <Input
            id='email'
            name='email'
            variant='text'
            label='Почта'
            placeholder='Ваша почта'
            Icon={ EmailIcon }
            fullWidth
            isValid={ isEmailValid }
            errorText={ emailErrorText }
            value={ formik.values.email }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
          />
          <Input
            id='password'
            name='password'
            variant='password'
            label='Пароль'
            placeholder='Ваш пароль'
            Icon={ KeyIcon }
            fullWidth
            isValid={ isPasswordValid }
            errorText={ passwordErrorText }
            value={ formik.values.password }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
          />
          <Input
            id='repeatPassword'
            name='repeatPassword'
            variant='password'
            label='Повторите пароль'
            placeholder='Ваш пароль'
            Icon={ KeyIcon }
            fullWidth
            isValid={ isRepeatPasswordValid }
            errorText={ repeatPasswordErrorText }
            value={ formik.values.repeatPassword }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
          />
          <Input
            id='promo'
            name='promo'
            variant='text'
            label='Промокод'
            placeholder='Ваш промокод'
            Icon={ DiscountIcon }
            fullWidth
            isValid={ isPromoValid }
            errorText={ promoErrorText }
            value={ formik.values.promo }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
          />
          <Button
            type='submit'
            variant='danger'
            large={ true }
            fullWidth={ true }
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </Flex>
      </form>
    </FormWindow>
  );
};
