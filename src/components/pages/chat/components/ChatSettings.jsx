// Import modules
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { ChatThemeContext } from '../Chat';
import {
  Flex,
  Typography
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledChatSettings = styled(Flex)`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  
  height: 50px;
  transition: .3s background-color;
  padding: 0 35px;
  
  ${({ background }) => background && css`
     background-color: ${ addHexAlpha(background, 0.8) };
  `}
`

// Exports
export const ChatSettings = () => {
  const theme = useContext(ChatThemeContext);

  return (
    <StyledChatSettings
      justifyContent='space-between'
      alignItems='center'
      background={ theme.HEADER }
    >
      <Typography
        variant='middle'
        color='white'
        semiBold
      >
        Настройки
      </Typography>

      <Flex>

      </Flex>
    </StyledChatSettings>
  );
};
