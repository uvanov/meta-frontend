// Import modules
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { ChatContext } from '../Chat';
import {
  CHAT_HINTS_CONFIG,
  ChatControls
} from './ChatControls';
import { ControlHint } from './ControlHint';
import { Flex } from '@ui/index';
import { ChatSettings } from '@pages/chat/components/ChatSettings';

// Styled Components
const StyledChatHeader = styled(Flex, {
  shouldForwardProp(prop) {
    return ![
      'showBackground',
      'background'
    ].includes(prop);
  }
})`
  position: relative;
  padding: 8px 24px;
  transition: background-color .3s;
  
  ${({ showBackground, background }) => showBackground && css`
    background-color: ${ background };
  `}
`;

// Exports
export const ChatHeader = ({ isFocused }) => {
  const { chatTheme } = useContext(ChatContext);

  return (
    <StyledChatHeader
      alignItems='center'
      justifyContent='space-between'
      showBackground={ isFocused }
      background={ chatTheme.HEADER }
    >
      {
        isFocused
          ? <ChatControls/>
          : <ControlHint
            Icon={ CHAT_HINTS_CONFIG.VISIBILITY.ICON }
            text={ CHAT_HINTS_CONFIG.VISIBILITY.TEXT_TO_OPEN }
            buttonKey={ CHAT_HINTS_CONFIG.VISIBILITY.KEY }
          />
      }
      <ChatSettings/>
    </StyledChatHeader>
  );
};
