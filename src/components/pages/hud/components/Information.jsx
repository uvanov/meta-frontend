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

// Assets
import { ReactComponent as MicrophoneIcon } from '@images/hud/information/microphone-icon.svg';
import { ReactComponent as WalletIcon } from '@images/hud/information/wallet-icon.svg';
import { ReactComponent as FoodIcon } from '@images/hud/information/food-icon.svg';
import CalendarImage from '@images/hud/information/calendar-icon.png';
import { Speedometer } from '@pages/hud/components/Speedometer';

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

export const Information = ({ fromLeft }) => {

  const [speed, setSpeed] = useState(1);

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
              money
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
              food
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
              date
            </Typography>
            <MarginContainer left='20px'>
              <Typography
                variant='small'
                color='white'
              >
                time
              </Typography>
            </MarginContainer>
          </Flex>
        </Flex>
      </Flex>
      <Speedometer speed={ speed } maxSpeed={ 234 }/>
    </StyledInformation>
  );
};
