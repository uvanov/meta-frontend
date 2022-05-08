// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { Typography } from '@ui/Typography';

// Styled Components

const StyledTabSwitchButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 8px;
  
  padding-top: 3px;
  
  height: 83px;

  background: rgba(32,31,44, 0.55);
  border-radius: 4px;
  cursor: pointer;
  
  transition: box-shadow .3s;

  path {
    transition: fill .2s;
  }
  
  ${({ active, theme }) => active && css`

    background: linear-gradient(
      138.31deg, 
      ${ theme.palette.red } -55%, 
      ${ theme.palette.orange } 206.03%
    );
    
    box-shadow: 0 0 59px -15px rgba(255,107,67,0.75);
    
    path {
      fill: white!important;
    }
  `}
`;

const TabButtonText = styled(Typography)`
  transition: color .2s;
  color: ${(props) => props.active ? 'white' : '#4C4A5B'}
`

// Exports
export const GradientButton = ({ Icon, active, children, ...remainingProps }) => {
  return (
    <StyledTabSwitchButton
      active={ active }
      { ...remainingProps }
    >
      <Icon/>
      {
        children && (
          <TabButtonText
            active={ active }
            variant='small'
            bold
            align='center'
          >
            { children }
          </TabButtonText>
        )
      }
    </StyledTabSwitchButton>
  );
};
