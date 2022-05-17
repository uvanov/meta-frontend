// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import ArcProgress from 'react-arc-progress';
import { css } from '@emotion/react';

// Local modules
import {
  Flex,
  MarginContainer,
  Typography
} from '@ui/index';
import { Speedometer } from './Speedometer';
import { useAppSelector } from '@hooks/state';
import { numberWithSpaces } from '@lib/utils';

// Assets
import { ReactComponent as MicrophoneIcon } from '@images/hud/information/microphone-icon.svg';
import { ReactComponent as WalletIcon } from '@images/hud/information/wallet-icon.svg';
import { ReactComponent as FoodIcon } from '@images/hud/information/food-icon.svg';
import CalendarImage from '@images/hud/information/calendar-icon.png';

// Styled Components
const StyledInformation = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'fromLeft'
  }
})`
  position: absolute;
  bottom: 23px;
  right: 20px;
  left: 0;
  
  ${({ fromLeft }) => fromLeft && css`
    left: ${ fromLeft };
  `}
`;

// Exports

export const Information = () => {

  const fromLeft = useAppSelector(state => state.hudSlice.safeZone.fromLeft);
  const informationState = useAppSelector(state => state.hudSlice.information);

  return (
    <StyledInformation
      justifyContent='space-between'
      alignItems='flex-end'
      fromLeft={ fromLeft }
    >
      <Flex
        direction='column'
        gap='30px'
      >
        <MicrophoneIcon/>
        <Flex
          direction='column'
          gap='20px'
        >
          <Flex
            alignItems='center'
            gap='7px'
          >
            <WalletIcon/>
            <Typography
              variant='middle'
              color='white'
              semiBold
            >
              { numberWithSpaces(informationState.money) }
            </Typography>
          </Flex>
          <Flex
            alignItems='center'
            gap='7px'
          >
            <FoodIcon/>
            <Typography
              variant='middle'
              color='white'
              semiBold
            >
              { informationState.food } %
            </Typography>
          </Flex>
          <Flex
            alignItems='center'
            gap='7px'
          >
            <img src={ CalendarImage } alt=''/>
            <Typography
              variant='middle'
              color='white'
              semiBold
            >
              { informationState.date.day }
            </Typography>
            <MarginContainer left='20px'>
              <Typography
                variant='small'
                color='white'
              >
                { informationState.date.time }
              </Typography>
            </MarginContainer>
          </Flex>
        </Flex>
      </Flex>
      <Speedometer />
    </StyledInformation>
  );
};
