// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { CharacterCard } from './CharacterCard';
import { GradientIcon } from './GradientIcon';
import { DataSection } from '@pages/select-character/components/DataSection';
import {
  Typography,
  Flex,
  Button
} from '@ui/index';
import { numberWithSpaces } from '@lib/utils';

// Assets
import { ReactComponent as UserIcon } from '@images/authentication/authorization-button-icon.svg'

// Styled Components
const StyledCharacterCard = styled(CharacterCard)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 30px;
  row-gap: 21px;
`;

const Name = styled(Typography)`
  width: 1px;
  max-width: 300px;
  text-overflow: fade;
  align-self: center;
`;

const VerticalText = styled(Typography)`
  position: relative; 
  writing-mode: vertical-lr; 
  transform: rotate(180deg);
  
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
`

const StyledButton = styled(Button)`
  padding-left: 0;
`;

// Exports
export const UsedCharacterCard = (
  {
    index,
    name,
    cash,
    bank,
    fraction,
    work,
    status
  }) => {

  const chooseCharacterHandler = (index) => {
    global.mp.trigger('client.choosePerson',  index);
  };

  return (
    <StyledCharacterCard>
      <Flex
        justifyContent='center'
      >
        <GradientIcon Icon={ UserIcon }/>
      </Flex>
      <Name
        variant='subtitle'
        color='white'
      >
        { name }
      </Name>
      <Flex
        justifyContent='center'
        alignItems='center'
      >
        <VerticalText
          index={ index }
          variant='title'
          color='#252333'
        >
          ПЕРСОНАЖ #{ index }
        </VerticalText>
      </Flex>
      <Flex
        direction='column'
        gap='10px'
      >
        <DataSection name='Наличные' value={ `$${ numberWithSpaces(cash) }` }/>
        <DataSection name='Деньги в банке' value={ `$${ numberWithSpaces(bank) }` }/>
        <DataSection name='Фракция' value={ fraction ? fraction.toUpperCase() : 'Отсутствует' }/>
        <DataSection name='Работа' value={ work ? work : 'Безработный' }/>
        <DataSection name='Статус' value={ status }/>

        <StyledButton
          variant='danger'
          onClick={ () => chooseCharacterHandler(index) }
        >
          Выбрать персонажа
        </StyledButton>
      </Flex>

    </StyledCharacterCard>
  );
};
