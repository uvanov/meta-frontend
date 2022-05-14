// Import modules
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local components
import { ChatHeader } from './ChatHeader';
import { MessagesArea } from './MessagesArea';
import { ChatInput } from './ChatInput';
import { Flex } from '@ui/Flex';
import { addHexAlpha } from '@lib/utils';
import { ChatContext } from '../Chat';

// Styled Components
const StyledChatWindow = styled(Flex, {
  shouldForwardProp(prop) {
    return ![
      'active',
      'background',
      'backgroundOpacity',
      'fullscreen'
    ].includes(prop);
  }
})`
  position: absolute;
  top: 12px;
  left: 12px;
  
  width: 100%;
  max-width: 650px;
  height: 500px;
  border-radius: 4px;
  transition: background .3s, 
              height .3s,
              top .3s, 
              right .3s, 
              bottom .3s, 
              left .3s,
              transform .3s;
  
  ${({ active, background, backgroundOpacity }) => active && css`
    background-color: ${ addHexAlpha(background, backgroundOpacity) };
  `}
  
  ${({ fullscreen }) => fullscreen && css`
     left: 50%;
     right: 50%;
     //bottom: 30px;
     height: 98%;
     transform: translateX(-50%);
  `}
`;

// Exports
export const ChatWindow = () => {

  const {
    state,
    chatTheme
  } = useContext(ChatContext);

  return (
    <StyledChatWindow
      gap='15px'
      direction='column'
      fullscreen={ state.fullscreen }
      active={ state.chatFocused }
      background={ chatTheme.MESSAGE_BOX }
      backgroundOpacity={ state.chatOpacity }
    >
      <ChatHeader isFocused={ state.chatFocused }/>
      <MessagesArea/>
      <ChatInput/>
    </StyledChatWindow>
  );
};
