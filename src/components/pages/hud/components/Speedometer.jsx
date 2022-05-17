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
import { useAppSelector } from '@hooks/state';

// Styled Components
const SpeedometerWrapper = styled(Flex)`
  position: absolute;
  width: 416px;
  height: 416px;
  bottom: 0;
  right: 10px;
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

export const Speedometer = () => {
  const visible = useAppSelector(state => state.hudSlice.vehicle.visible);
  const maximumVehicleSpeed = useAppSelector(state => state.hudSlice.vehicle.maximumVehicleSpeed);

  const speedometerState = useAppSelector(state => state.hudSlice.vehicle.speedometer);
  const speed = speedometerState.speed;
  const engineTurnedOn = speedometerState.engine.turnedOn;
  const engineHealth = speedometerState.engine.health;
  const fuelLevel = speedometerState.fuel;
  const isDoorsUnlocked = speedometerState.doors;
  const headlights = speedometerState.headlights;
  const seatBelt = speedometerState.seatBelt;


  // Создаётся из-за особенности библиотеки прогресс-баров. Она, для значения прогресса требует значение от 0.0 до 1.0
  const preparedSpeed = usePreparedSpeed(speed, maximumVehicleSpeed);

  return (
    <>
      {
        visible && (
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
                  active={ headlights === 'left' || headlights === 'both' }
                />
                <Speed
                  variant='small'
                  color='#D5D4D2'
                  semiBold
                >
                  { speed }
                </Speed>
                <RotatedTurnSignal
                  active={ headlights === 'right' || headlights === 'both' }
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
                  toggle={ headlights === 'low' }
                />
                <MarginContainer top='20px'>
                  <CarDetailStatus
                    Icon={ ShortLightIcon }
                    toggle={ headlights === 'high' }
                  />
                </MarginContainer>
                <MarginContainer top='30px'>
                  <CarDetailStatus
                    Icon={ SeatBeltIcon }
                    toggle={ seatBelt }
                  />
                </MarginContainer>
                <MarginContainer top='20px'>
                  <CarDetailStatus
                    Icon={ KeyIcon }
                    toggle={ engineTurnedOn }
                  />
                </MarginContainer>
                <CarDetailStatus
                  Icon={ DoorIcon }
                  toggle={ isDoorsUnlocked }
                />
              </CarNavigationWrapper>
            </Relative>
            <FuelBarWrapper>
              <IconProgressBar
                backgroundIcon={ FuelIcon }
                fillIcon={ FilledFuelIcon }
                progress={ fuelLevel }
              />
            </FuelBarWrapper>

            <EngineBarWrapper>
              <IconProgressBar
                backgroundIcon={ EngineIcon }
                fillIcon={ FilledEngineIcon }
                progress={ engineHealth }
              />
            </EngineBarWrapper>
          </SpeedometerWrapper>
        )
      }
    </>
  );
};
