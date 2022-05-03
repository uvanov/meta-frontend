// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { addHexAlpha } from '@lib/utils';
import {
  Flex,
  Grid,
  Typography
} from '@ui/index';


// Styled Components
const InputWrapper = styled(Flex)`
  padding: 20px 28px;
  background: ${ ({ theme }) => addHexAlpha(theme.palette.bluegray, 0.5) };
  width: fit-content;
`;

const StyledTextInput = styled.input`
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.typography.size.middle};
  
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray};
  }
`;

const ValidationMark = styled(Flex)`
  width: 26px;
  height: 26px;
  border-radius: 100%;
`;

// Exports
export const TextInput = (
  {
    label,
    value,
    onChange,
    valid
  }) => {



  return (
    <InputWrapper
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        columns={ 2 }
      >
        <Flex
          direction='column'
          gap='7px'
        >
          <Typography variant='small' color='gray'>
            { label }
          </Typography>
          <StyledTextInput
            type='text'
            value={ value }
            onChange={ onChange }
          />
        </Flex>
        <Flex
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          lox
        </Flex>
      </Grid>
    </InputWrapper>
  );
};
