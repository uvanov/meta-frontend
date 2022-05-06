// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { addHexAlpha } from '@lib/utils';
import {
  Flex,
  Grid,
  Typography
} from '@ui/index';

// Assets
import { ReactComponent as CheckIcon } from '@images/icons/check-icon.svg';
import { ReactComponent as CrossIcon } from '@images/icons/cross-icon.svg';


// Styled Components
const InputWrapper = styled(Flex)`
  padding: 20px 28px;
  border-radius: 9px;
  background: ${ ({ theme }) => addHexAlpha(theme.palette.bluegray, 0.5) };
`;

const StyledTextInput = styled.input`
  border: 0;
  outline: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.typography.size.middle};
  
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray};
    font-weight: 500;
  }
`;

const InputFlex = styled(Flex)`
  grid-column: 1 / 3;
`

const ValidationFlex = styled(Flex)`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
`

const ValidationMark = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'valid';
  }
})`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  
  transition: background-color .3s, box-shadow .3s;
  
  ${({ valid }) => valid === true
    ? css`background: #88F861; box-shadow: 0px 0px 67px #88F861;`
    : css`background: #F86161; box-shadow: 0px 0px 67px #F86161;`
  }
`;

// Exports
export const TextInput = (
  {
    label = 'Input label',
    value,
    placeholder = 'Placeholder',
    onChange,
    valid, // null - пустота, false - не валид, true - валид
    ...remainingProps
  }) => {



  return (
    <InputWrapper
      alignItems='center'
    >
      <Grid
        columns={ 3 }
        fullWidth
      >
        <InputFlex
          direction='column'
          gap='7px'
        >
          <Typography variant='small' color='gray'>
            { label }
          </Typography>
          <StyledTextInput
            type='text'
            placeholder={ placeholder }
            value={ value }
            onChange={ event => onChange(event) }
            { ...remainingProps }
          />
        </InputFlex>
        <ValidationFlex
          justifyContent='flex-end'
          alignItems='center'
        >
          {
            valid !== null && (
              <ValidationMark
                justifyContent='center'
                alignItems='center'
                valid={ valid }
              >

                { valid ? <CheckIcon/> : <CrossIcon/> }
              </ValidationMark>
            )
          }
        </ValidationFlex>
      </Grid>
    </InputWrapper>
  );
};
