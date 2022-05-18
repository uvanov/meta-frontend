// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Flex,
  Typography
} from '@ui/index';

// Assets
import Logotype from '@images/hud/header/logotype.png';
import ServerOnlineImage from '@images/hud/header/server-online.png';
import PlayerIcon from '@images/hud/header/player-icon.svg';

// Styled Components
const StyledHeader = styled(Flex)`
  padding-top: 33px;
  padding-right: 42px;
  user-select: none;
  pointer-events: none;
`;

// Exports
export const Header = () => {
  return (
    <StyledHeader
      alignItems='center'
      justifyContent='flex-end'
      gap='48px'
    >
      <Flex
        alignItems='center'
        gap='8px'
      >
        <img src={ PlayerIcon } alt=''/>
        <Typography
          variant='middle'
          color='white'
          semiBold
        >
          ID: 1
        </Typography>
      </Flex>
      <Flex
        alignItems='center'
        gap='8px'
      >
        <img src={ ServerOnlineImage } alt=''/>
        <Typography
          variant='middle'
          color='white'
          semiBold
        >
          1200
        </Typography>
      </Flex>
      <img src={ Logotype } alt=''/>
    </StyledHeader>
  );
};
