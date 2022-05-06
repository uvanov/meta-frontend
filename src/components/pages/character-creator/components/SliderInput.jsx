// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import {
  Flex,
  Grid,
  Typography
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';
import { GradientButton } from './GradientButton';

// Assets
import { ReactComponent as Arrow } from '@images/icons/arrow-left-icon.svg';

// Styled Components
const InputWrapper = styled(Flex)`
  padding: 20px 28px 23px 28px;
  background: ${ ({ theme }) => addHexAlpha(theme.palette.bluegray, 0.5) };
  border-radius: 9px;
`;

const Slider = styled(Flex)`
  grid-column: 1 / 3;
`;

const Button = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'rotated'
  }
})`
  width: 28px;
  height: 28px;
  border-radius: 3px;
  background: ${({ theme }) => css`
    linear-gradient(
      138.31deg, 
      ${ theme.palette.red } -55%, 
      ${ theme.palette.orange } 206.03%
    );
  `}
  cursor: pointer;
  ${({ rotated }) => rotated && 'transform: rotate(180deg);'}
  
  &:hover{
    background: ${({ theme }) => theme.palette.white};
  }
`

// Exports
export const SliderInput = (
  {
    label,
    value,
    name,
    max,
    onDecrement,
    onIncrement
  }) => {

  return (
    <InputWrapper
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        columns={ 2 }
        rowGap={ 13 }
        fullWidth
      >
        <Typography
          variant='small'
          color='gray'
        >
          { label }
        </Typography>

        <Slider
          justifyContent='space-between'
        >
          <Button
            justifyContent='center'
            alignItems='center'
            onClick={ () => {
              onDecrement();
              let data = JSON.stringify({ title: name, data: value.toFixed(1) });
              global.mp.trigger('client.changesCharacter', data);
            } }
          >
            <Arrow/>
          </Button>

          <Typography
            variant='small'
            color='white'
          >
            { `${value} (${max})` }
          </Typography>

          <Button
            justifyContent='center'
            alignItems='center'
            rotated
            onClick={ () => {
              onIncrement();
              let data = JSON.stringify({ title: name, data: value });
              global.mp.trigger('client.changesCharacter', data);
            } }
          >
            <Arrow/>
          </Button>
        </Slider>
      </Grid>
    </InputWrapper>
  );
};
