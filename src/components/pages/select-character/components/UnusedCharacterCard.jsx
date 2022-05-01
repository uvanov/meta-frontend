// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { CharacterCard } from './CharacterCard';
import { GradientIcon } from './GradientIcon';
import {
  Button,
  Flex,
  MarginContainer,
  Typography
} from '@ui/index';

// Assets
import { ReactComponent as UserIcon } from '@images/icons/user-icon.svg';
import { ReactComponent as LockIcon } from '@images/icons/lock-icon.svg';
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledCharacterCard = styled(CharacterCard)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 3fr 1fr;
  align-self: stretch;
  padding-right: 77px;
`;

const VerticalText = styled(Typography)`
  position: relative; 
  writing-mode: vertical-lr; 
  transform: rotate(180deg);
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
  
  &::before{
    display: inline-block;
    content: "#${ ({ index }) => index }";
    margin-bottom: 10px;
    white-space: nowrap;
    color: transparent;
    opacity: .5;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(68,65,93);
  }
`;

const SecondRowWrapper = styled.div`
  align-self: flex-end;
  grid-column: 2 / 3;
  height: min-content;
`;

const UnlockButton = styled(Button)`
  background-color: ${({ theme }) => addHexAlpha(theme.palette.white, 0.1)};
  box-shadow: unset;
`;

// Exports
export const UnusedCharacterCard = ({ variant, index }) => {

  const isSlotUnlocked = variant !== 'locked';

  return (
    <StyledCharacterCard>
      <VerticalText
        index={ index + 1 }
        variant='title'
        color='#252333'
      >
        ПЕРСОНАЖ #{ index + 1 }
      </VerticalText>
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <MarginContainer bottom='26px'>
          <GradientIcon Icon={ isSlotUnlocked ? UserIcon : LockIcon }/>
        </MarginContainer>
        <Flex
          direction='column'
          gap='10px'
        >
          <Typography
            variant='middle'
            color='white'
            align='center'
            bold
          >
            { isSlotUnlocked ? 'Новый персонаж' : 'Этот персонаж пока заблокирован' }
          </Typography>
          <Typography
            variant='small'
            color='gray'
            align='center'
          >
            {
              isSlotUnlocked
              ?
                'Создайте нового персонажа и пишите новую историю с чистого листа.'
              :
                'Вы можете разблокировать этого персонажа за виртуальную валюту'
            }
          </Typography>
        </Flex>
      </Flex>
      <SecondRowWrapper>
        <Flex
          direction='column'
          gap='10px'
        >
          <Typography
            variant='small'
            color='gray'
            align='center'
          >
            Цена создания
          </Typography>
          <Typography
            variant='middle'
            color='white'
            align='center'
            bold
          >
            {  isSlotUnlocked ? 'Бесплатно' : '700 M-Coins'}
          </Typography>
        </Flex>
        <MarginContainer top='18px'>
          {
            isSlotUnlocked
            ?
              (
                <Button
                  variant='danger'
                  fullWidth
                >
                Создать персонажа
                </Button>
              )
            :
              (
                <UnlockButton
                  variant='danger'
                  fullWidth
                >
                  Создать персонажа
                </UnlockButton>
              )
          }
        </MarginContainer>
      </SecondRowWrapper>
    </StyledCharacterCard>
  );
};
