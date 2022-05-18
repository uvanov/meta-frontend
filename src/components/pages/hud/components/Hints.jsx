// Import modules
import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local components
import {
  Flex,
  Typography
} from '@ui/index';
import { useAppSelector } from '@hooks/state';

// Styled Components
const HintButtonWrapper = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'primary'
  }
})`
  width: 75px;
  height: 30px;
  
  padding-right: 11px;
  
  box-sizing: border-box;
  border-radius: 4px;
  
  ${({ primary, theme }) => primary 
  ? css`
    background-color: ${ theme.palette.red };
  `
  : css`
    background: linear-gradient(260deg, rgba(32, 31, 44, 0.8) -2.25%, rgba(32, 31, 44, 0) 89.89%);
  ` }
`;

const StyledHints = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'fromBottom'
  }
})`
  position: absolute;
  transform: translateX(-30px);
  
  ${({ fromBottom }) => fromBottom && css`
    bottom: ${ fromBottom };
  `}
`;

const HintsSection = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'opened'
  }
})`
  transform: translateX(-200px);
  transition: transform .3s ease;
  
  ${({ opened }) => opened && css`
    transform: translateX(0);
  `}
`;

// Exports
const Hint = ({ isPrimary, button, text }) => (
  <Flex
    alignItems='center'
    gap='11px'
  >
    <HintButtonWrapper
      alignItems='center'
      justifyContent='flex-end'
      primary={ isPrimary }
    >
      <Typography
        variant='small'
        color='white'
        bold
      >
        { button }
      </Typography>
    </HintButtonWrapper>
    <Typography
      variant='small'
      color='white'
      bold
    >
      { text }
    </Typography>
  </Flex>
);

export const Hints = () => {

  const fromBottom = useAppSelector(state => state.hudSlice.safeZone.fromBottom);
  const [isHintsOpenedFromKeyboard, setIsHintsOpenedFromKeyboard] = useState(false);
  const isHintsOpenedFromServer = useAppSelector(state => state.hudSlice.hints.opened);

  const keyDownHandler = useCallback((event) => {
    const { key } = event;

    if(key === 'F1'){
      event.preventDefault();
      setIsHintsOpenedFromKeyboard(prevState => !prevState);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    }
  }, [])

  return (
    <StyledHints
      direction='column'
      gap='38px'
      fromBottom={ fromBottom }
    >
      <HintsSection
        direction='column'
        gap='5px'
        opened={ isHintsOpenedFromKeyboard || isHintsOpenedFromServer }
      >
        <Hint
          button='F2'
          text='Чат'
        />
        <Hint
          button='T'
          text='Анимации'
        />
        <Hint
          button='I'
          text='Инвентарь'
        />
        <Hint
          button='М'
          text='Меню'
        />
        <Hint
          button='F7'
          text='Скрыть худ'
        />
        <Hint
          button='U'
          text='Скрыть чат'
        />
        <Hint
          button='2'
          text='Премиум'
        />
      </HintsSection>
      <Hint
        button='F1'
        text='Подсказки'
        isPrimary
      />
    </StyledHints>
  );
};
