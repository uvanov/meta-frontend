import { useAppSelector } from './state';

/*
* Хук, возвращающий состояние валидности того или иногда инпута в форме
* @ [valid, errorText]
* */
export const useCheckForErrors = (params) => {

  let errorFromStore = useAppSelector(state => state.authentication.inputs[params.interface][params.input].errorText);

  // Если ошибка в валидации на клиенте
  if(params.errors[params.input] && params.touched[params.input]){
    return [false, params.errors[params.input]];
  }

  // Если ошибка пришла с сервера в Редакс-стор
  if(errorFromStore){
    return [false, errorFromStore];
  }

  return [true, ''];
};