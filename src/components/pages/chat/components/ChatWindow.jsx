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
      'fullscreen',
      'position'
    ].includes(prop);
  }
})`
  position: absolute;
  ${({ position }) => position && css`
    left: ${ position.x }px;
    top: ${ position.y }px;
  `}
  
  width: 100%;
  max-width: 650px;
  height: 500px;
  border-radius: 4px;
  transition: background .3s, 
              height .3s,
              top .05s, 
              right .05s, 
              bottom .05s, 
              left .05s,
              transform .01s
              ;
  
  ${({ active, background, backgroundOpacity }) => active && css`
    background-color: ${ addHexAlpha(background, backgroundOpacity) };
  `}
  
  ${({ fullscreen }) => fullscreen && css`
     top: 10px;
     left: 50%;
     right: 50%;
     //bottom: 30px;
     height: 98%;
     transform: translateX(-50%);
  `}
`;

// Exports
export const ChatWindow = ({ mouseDown, mouseUp, ...remainingProps }) => {

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
      position={ state.position }
      backgroundOpacity={ state.chatOpacity }
      { ...remainingProps }
    >
      <ChatHeader
        onMouseDown={ mouseDown }
        onMouseUp={ mouseUp }
        isFocused={ state.chatFocused }
      />
      <MessagesArea/>
      <ChatInput/>
    </StyledChatWindow>
  );
};
