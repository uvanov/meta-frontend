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
  padding: 20px 28px;
  background: ${ ({ theme }) => addHexAlpha(theme.palette.bluegray, 0.5) };
  width: fit-content;
`;


// Exports
export const RangeInput = ({ label, staticTitle, value, setValue }) => {

  const [title, setTitle] = useState(staticTitle ? staticTitle : '');

  return (
    <InputWrapper
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        columns={ 2 }
        columnGap={ 16 }
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
        >
          { title }
        </Typography>

        <Slider
          axis='x'
          x={ value }
          onChange={ ({ x }) => setValue(x) }
        />
      </Grid>
    </InputWrapper>
  );
};
