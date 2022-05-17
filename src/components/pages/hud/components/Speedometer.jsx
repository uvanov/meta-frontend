// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ArcProgress from 'react-arc-progress';

// Local modules
import {
  Relative,
  Flex,
  Typography,
  MarginContainer
} from '@ui/index';
import { IconProgressBar } from '@pages/hud/components/IconProgressBar';

// Assets
import { ReactComponent as TurnSignalIcon } from '@images/hud/speedometer/turn-signal-left-icon.svg'
import { ReactComponent as LongLightIcon } from '@images/hud/speedometer/long-light-icon.svg'
import { ReactComponent as ShortLightIcon } from '@images/hud/speedometer/short-light-icon.svg'
import { ReactComponent as SeatBeltIcon } from '@images/hud/speedometer/seat-belt-icon.svg'
import { ReactComponent as KeyIcon } from '@images/hud/speedometer/key-icon.svg'
import { ReactComponent as DoorIcon } from '@images/hud/speedometer/door-icon.svg'
import FuelIcon from '@images/hud/speedometer/fuel-icon.svg'
import FilledFuelIcon from '@images/hud/speedometer/filled-fuel-icon.svg'
import EngineIcon from '@images/hud/speedometer/engine-icon.svg'
import FilledEngineIcon from '@images/hud/speedometer/filled-engine-icon.svg'

// Styled Components
const SpeedometerWrapper = styled(Flex)`
  position: relative;
  width: 416px;
  height: 416px;
  margin-bottom: -40px;
  border-radius: 100%;
  user-select: none;
  background: linear-gradient(
    180deg, 
    rgba(20, 19, 27, 0) 0%, 
    rgba(20, 19, 27, 0.5) 44.44%, 
    rgba(20, 19, 27, 0) 
    80.5%
  );
`

const StyledSpeedometer = styled(ArcProgress)`
  
`;

const SpeedWrapper = styled(Flex)`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 230px;
`

const Speed = styled(Typography)`
  font-size: 80px;
  
  &::before{
    content: 'КМ/Ч';
    width: max-content;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${({ theme }) => theme.typography.size.small};
    color: ${({ theme }) => theme.palette.white};
  }
`;

const CarNavigationWrapper = styled(Flex)`
  position: absolute;
  top: 85%;
`

const FuelBarWrapper = styled.div`
  position:absolute;
  left: 19px;
  top: 50%;
  transform: translateY(-50%);
`
const EngineBarWrapper = styled.div`
  position:absolute;
  right: 19px;
  top: 50%;
  transform: translateY(-50%);
`

const StyledTurnSignalIcon = styled(TurnSignalIcon, {
  shouldForwardProp(prop){
    return prop !== 'active'
  }
})`
  path { 
    transition: fill .1s, opacity .1s;
  }
  
  ${({ active }) => active && css`
    path {
      opacity: 1;
      fill: #e1c868;
    }
  `}
`;

const RotatedTurnSignal = styled(StyledTurnSignalIcon)`
  transform: rotate(180deg);
`;

const DetailStatusMark = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  transition: background-color .2s;
  background-color: ${({ toggle, theme }) => toggle ? '#23e568' : theme.palette.red};
`;

// Hooks
const usePreparedSpeed = (speed, maxSpeed) => {
  return speed / maxSpeed;
};

// Exports
const CarDetailStatus = ({ Icon, toggle }) => (
  <Flex
    direction='column'
    justifyContent='center'
    alignItems='center'
    gap='5px'
  >
    <Icon/>
    <DetailStatusMark toggle={ toggle }/>
  </Flex>
);

export const Speedometer = (
  {
    speed,
    maxSpeed,
    leftTurnSignal,
    rightTurnSignal
  }) => {
  const preparedSpeed = usePreparedSpeed(speed, maxSpeed);

  return (
    <SpeedometerWrapper
      alignItems='center'
      justifyContent='center'
    >
      <Relative>
        <StyledSpeedometer
          size={ 300 }
          progress={ preparedSpeed }
          thickness={ 10 }
          lineCap='square'
          fillColor='#FFA14A'
          emptyColor='rgba(255, 255, 255, 0.5)'
          speed={ 50 }
        />
        <SpeedWrapper
          justifyContent='space-between'
          alignItems='center'
        >
          <StyledTurnSignalIcon
            active={ leftTurnSignal }
          />
          <Speed
            variant='small'
            color='#D5D4D2'
            semiBold
          >
            { speed }
          </Speed>
          <RotatedTurnSignal
            active={ rightTurnSignal }
          />
        </SpeedWrapper>
        <CarNavigationWrapper
          alignItems='flex-start'
          justifyContent='center'
          gap='12px'
          fullWidth
        >
          <CarDetailStatus
            Icon={ LongLightIcon }
            toggle={ false }
          />
          <MarginContainer top='20px'>
            <CarDetailStatus
              Icon={ ShortLightIcon }
              toggle={ false }
            />
          </MarginContainer>
          <MarginContainer top='30px'>
            <CarDetailStatus
              Icon={ SeatBeltIcon }
              toggle={ false }
            />
          </MarginContainer>
          <MarginContainer top='20px'>
            <CarDetailStatus
              Icon={ KeyIcon }
              toggle={ false }
            />
          </MarginContainer>
          <CarDetailStatus
            Icon={ DoorIcon }
            toggle={ false }
          />
        </CarNavigationWrapper>
      </Relative>
      <FuelBarWrapper>
        <IconProgressBar
          backgroundIcon={ FuelIcon }
          fillIcon={ FilledFuelIcon }
          progress={ 50 }
        />
      </FuelBarWrapper>

      <EngineBarWrapper>
        <IconProgressBar
          backgroundIcon={ EngineIcon }
          fillIcon={ FilledEngineIcon }
          progress={ 50 }
        />
      </EngineBarWrapper>
    </SpeedometerWrapper>
  );
};
