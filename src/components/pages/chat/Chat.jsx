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
  Flex,
} from '@ui/index';
import { ChatHeader } from '@pages/chat/components/ChatHeader';
import { MessagesArea } from './components/MessagesArea';
import { ChatInput } from './components/ChatInput';

// Assets


// Styled Components
const ChatWindow = styled(Flex, {
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
  const [inputValue, setInputValue] = useState('');
  const [chatState, dispatch] = useReducer(
    (state, action) => {
      if (action.type === 'setChatFocus') return { ...state, isChatFocused: action.focus };
      if (action.type === 'setChatOpacity') return { ...state, chatOpacity: action.opacity };
      if (action.type === 'setChatTheme') return { ...state, chosenChatTheme: action.theme };
      throw new Error();
    }, {
      chatFocused: true,
      chatOpacity: 0.7,
      chosenChatTheme: 'BLACK',
      settingsOpened: false,
      fullscreen: false
  });

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
        fullscreen={ chatState.fullscreen }
        active={ chatState.chatFocused }
        background={ CHAT_THEMES[chatState.chosenChatTheme].MESSAGE_BOX }
        backgroundOpacity={ chatState.chatOpacity }
      >
        <ChatHeader isFocused={ chatState.chatFocused }/>
        <MessagesArea />

        <ChatInput/>
      </ChatWindow>
    </ChatContext.Provider>
  );
};
