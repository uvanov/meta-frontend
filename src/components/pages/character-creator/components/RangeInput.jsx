// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-input-slider';

// Local modules
import {
  Flex,
  Grid,
  Typography
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';

// Styled Components
const InputWrapper = styled(Flex)`
  padding: 20px 28px 33px 28px;
  background: ${ ({ theme }) => addHexAlpha(theme.palette.bluegray, 0.5) };
  border-radius: 9px;
`;

const StyledSlider = styled(Slider)`
  width: unset;
  grid-column: 1 / 3;
  
  > div {
    transition: all .2s;
  }
`;

// Exports
export const RangeInput = (
  {
    label,
    name,
    title,
    value,
    onChange,
    axis = 'x',
    step = 1,
    min = 0,
    max = 100
  }) => {

  const sliderSettings = axis === 'x'
    ? { x: value, xmin: min, xmax: max, xstep: step }
    : { y: value, ymin: min, ymax: max, ystep: step };

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

        <Typography
          variant='small'
          color='white'
          align='right'
        >
          { title }
        </Typography>

        <StyledSlider
          axis={ axis }
          { ...sliderSettings }

          styles={ {
            track: {
              backgroundColor: '#16141C'
            },
            active: {
              backgroundColor: '#FFA14A'
            },
            thumb: {
              width: 12,
              height: 12
            }
          } }
          onChange={ event => {
            onChange(event);
            let data = JSON.stringify({ title: name, data: event[axis].toFixed(1) });
            global.mp.trigger('client.changesCharacter', data);
          } }
        />
      </Grid>
    </InputWrapper>
  );
};
