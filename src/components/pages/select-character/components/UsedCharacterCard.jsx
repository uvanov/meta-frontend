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
import { numberWithSpaces, capitalizeFirstLetter } from '@lib/utils';

// Assets
import { ReactComponent as UserIcon } from '@images/icons/user-icon.svg'
import { useAppDispatch } from '@hooks/state';
import { selectCharacterSlice } from '@store/slices/SelectCharacterSlice';

// Styled Components
const StyledCharacterCard = styled(CharacterCard)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 30px;
  row-gap: 21px;
`;

const Name = styled(Typography)`
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

  const dispatch = useAppDispatch();
  const {
    setSelectedCharacterIndex,
    setModalVisibility
  } = selectCharacterSlice.actions;

  const chooseCharacterHandler = (index) => {
    dispatch(setSelectedCharacterIndex({ index: index }));
    dispatch(setModalVisibility({ modalVisibility: true }));
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
          index={ index + 1 }
          variant='title'
          color='#252333'
        >
          ПЕРСОНАЖ #{ index + 1 }
        </VerticalText>
      </Flex>
      <Flex
        direction='column'
        gap='10px'
      >
        <DataSection name='Наличные' value={ `$${ numberWithSpaces(cash) }` }/>
        <DataSection name='Деньги в банке' value={ `$${ numberWithSpaces(bank) }` }/>
        <DataSection name='Фракция' value={ fraction ? fraction.toUpperCase() : 'Отсутствует' }/>
        <DataSection name='Работа' value={ work ? capitalizeFirstLetter(work) : 'Безработный' }/>
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
