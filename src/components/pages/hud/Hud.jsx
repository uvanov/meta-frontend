// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Header } from './components/Header';
import { Hints } from './components/Hints';
import { Information } from '@pages/hud/components/Information';
import { useAppSelector } from '@hooks/state';

// Styled Components
const StyledHud = styled.div`
  position: relative;
  height: 100%;
`

// Exports
export const Hud = () => {

  return (
    <StyledHud>
      <Header />
      <Hints />
      <Information />
    </StyledHud>
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
*
* Car
*   Отображение спидометра всего (on off), скорость, максимальная скорость нынешнего авто
*   Бензин, Состояние авто, Состояние дверей ( locked / unlocked ), Состояние фар ( on / off  ), поворотники
*
*   ( так же реализовать возможность скрывать каждый из элементов по отдельности )
* */
