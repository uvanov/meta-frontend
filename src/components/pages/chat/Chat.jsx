// Import modules
import React, {
  useState,
  createContext,
  useReducer
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { addHexAlpha } from '@lib/utils';
import {
  Flex
} from '@ui/index';
import { ChatHeader } from '@pages/chat/components/ChatHeader';
import { MessagesArea } from './components/MessagesArea';

// Assets

// Styled Components
const ChatWindow = styled(Flex, {
  shouldForwardProp(prop) {
    return prop !== 'active';
  }
})`
  width: 100%;
  max-width: 700px;
  height: 500px;
  border-radius: 4px;
  transition: background .3s;
  
  ${ ({ active, theme }) => active && css`
    background: linear-gradient(
      ${ addHexAlpha(theme.palette.bluegray, 0.1) },
      ${ theme.palette.bluegray }
    );
  ` }
`;

// Constants
const CHAT_THEMES = {
  BLACK: {
    HEADER: '#14131b',
    MESSAGE_BOX: '#1D1C28'
  },
  GREEN: {
    HEADER: '#05120a',
    MESSAGE_BOX: '#0E351C'
  },
  PURPLE: {
    HEADER: '#180F28',
    MESSAGE_BOX: '#180F28'
  },
  BLUE: {
    HEADER: '#21254D',
    MESSAGE_BOX: '#21254D'
  },
  RED: {
    HEADER: '#3F1410',
    MESSAGE_BOX: '#3F1410'
  }
};
export const ChatContext = createContext(CHAT_THEMES.BLACK);

// Exports
export const Chat = () => {

  const [chatState, dispatch] = useReducer(
    (state, action) => {
    if(action.type === 'setChatFocus') return { ...state, isChatFocused: action.focus };
    if(action.type === 'setChatOpacity') return { ...state, chatOpacity: action.opacity };
    if(action.type === 'setChatTheme') return { ...state, chosenChatTheme: action.theme };
    throw new Error();
  }, {
    isChatFocused: true,
    chatOpacity: 0.7,
    chosenChatTheme: 'BLACK'
  })

  const context = {
    chatTheme: CHAT_THEMES[chatState.chosenChatTheme],
    state: chatState,
    dispatch: dispatch
  };

  return (
    <ChatContext.Provider value={ context }>
      <ChatWindow
        gap='15px'
        direction='column'
        active={ chatState.isChatFocused }
      >
        <ChatHeader isFocused={ chatState.isChatFocused }/>
        <MessagesArea
          messages={ ['Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.'] }
        />
      </ChatWindow>
    </ChatContext.Provider>
  );
};
