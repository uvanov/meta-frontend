// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Flex, Typography } from '@ui/index';

// Styled Components
const StyledIconProgressBar = styled.div`
  position:relative;
  
  width: 31px;
  height: 29px;
  
  background-position: center;
  background-image: url(${ ({ bgIcon }) => bgIcon });
  background-repeat: no-repeat;
  
  &::before{
    content: '';
    display: block;
    
    background-position: center;
    background-image: url(${ ({ fillIcon }) => fillIcon });
    background-repeat: no-repeat;
                      // Тут для взаимодействия с эконкой, манипулируем вторым параметров 1 и 2 аргумента. 
    transition: clip-path .5s;
    clip-path: ${({ progress }) => `polygon(0 ${progress}%, 100% ${progress}%, 100% 100%, 0 100%)`};
    width: 100%;
    height: 100%;
`

// Exports
export const IconProgressBar = ({ backgroundIcon, fillIcon, progress }) => {
  return (
    <Flex
      direction='column'
      justifyContent='center'
      gap='5px'
    >
      <StyledIconProgressBar
        bgIcon={ backgroundIcon }
        fillIcon={ fillIcon }
        progress={ 100 - progress }
      />
      <Typography
        variant='small'
        color='white'
      >
        { progress }%
      </Typography>
    </Flex>
  );
};
