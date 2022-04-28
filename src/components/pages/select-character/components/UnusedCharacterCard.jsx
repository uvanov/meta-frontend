// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { CharacterCard } from './CharacterCard';
import {
  Button,
  Flex,
  MarginContainer,
  Typography
} from '@ui/index';

// Assets
import { ReactComponent as UserIcon } from '@images/authentication/authorization-button-icon.svg';
import { GradientIcon } from '@pages/select-character/components/GradientIcon';

// Styled Components
const StyledCharacterCard = styled(CharacterCard)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 3fr 1fr;
  align-self: stretch;
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

// Exports
export const UnusedCharacterCard = ({ variant, index }) => {
  return (
    <StyledCharacterCard>

      <VerticalText
        index={ index }
        variant='title'
        color='#252333'
      >
        ПЕРСОНАЖ #2
      </VerticalText>

      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <MarginContainer bottom='26px'>
          <GradientIcon Icon={ UserIcon }/>
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
            Новый персонаж
          </Typography>
          <Typography
            variant='small'
            color='gray'
            align='center'
          >
            Создайте нового персонажа
            и пишите новую историю
            с чистого листа.
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
            Бесплатно
          </Typography>
        </Flex>
        <MarginContainer top='18px'>
          <Button
            variant='danger'
            fullWidth
          >
            Создать персонажа
          </Button>
        </MarginContainer>
      </SecondRowWrapper>
    </StyledCharacterCard>
  );
};
