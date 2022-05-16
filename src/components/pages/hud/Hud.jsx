// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Header } from './components/Header';

// Exports
export const Hud = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

/*
* Требуемые экшены:
*
* Header:
*   Айди, общий онлайн
*
* Hints:
*   Открытие-закрытие меню подсказок
*
* Information:
*   Жизни, Голод, Жажда, Наличные (предусмотреть большие значения)
*   Бензин, Состояние авто, Состояние дверей ( locked / unlocked ), Состояние фар ( on / off  ),
*   Текущая скорость авто
*   ( так же реализовать возможность скрывать каждый из элементов по отдельности )
* */
