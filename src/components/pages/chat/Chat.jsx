// Import modules
import React, {
  useState,
  createContext
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { addHexAlpha } from '@lib/utils';
import {
  Flex,
  MarginContainer,
  Typography
} from '@ui/index';
import {
  ChatControls,
  CHAT_HINTS_CONFIG
} from './components/ChatControls';
import { ControlHint } from './components/ControlHint';
import { MessagesArea } from './components/MessagesArea';

// Assets
import { ReactComponent as SettingsIcon } from '@images/icons/gear-wheel-icon.svg';
import { ReactComponent as EyeIcon } from '@images/icons/eye-icon.svg';
import { ReactComponent as ExpandIcon } from '@images/icons/expand-icon.svg';
import { ChatHeader } from '@pages/chat/components/ChatHeader';

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
export const ChatThemeContext = createContext(CHAT_THEMES.BLACK);

// Exports
export const Chat = () => {

  const [isChatFocused, setIsChatFocused] = useState(true);
  const [chosenChatTheme, setChosenChatTheme] = useState('BLACK');

  return (
    <ChatThemeContext.Provider value={ CHAT_THEMES[chosenChatTheme] }>
      <ChatWindow
        gap='15px'
        direction='column'
        active={ isChatFocused }
      >
        <ChatHeader isFocused={ isChatFocused }/>
        <MessagesArea
          messages={ ['Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.', 'Lorem ipsum.'] }
        />
      </ChatWindow>
    </ChatThemeContext.Provider>
  );
};
