// Import modules
import React, { useState } from 'react';
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

const ChatHeader = styled(Flex, {
  shouldForwardProp(prop) {
    return prop !== 'showBackground';
  }
})`
  padding: 8px 24px;
  transition: background-color .3s;
  
  ${({ showBackground, theme }) => showBackground && css`
    background-color: ${ theme.palette.bluegray };
  `}
`;


export const Chat = () => {

  const [isChatActive, setIsChatActive] = useState(true);

  return (
    <ChatWindow
      gap='15px'
      direction='column'
      active={ isChatActive }
    >
      <ChatHeader
        alignItems='center'
        justifyContent='space-between'
        showBackground={ isChatActive }
      >
        {
          isChatActive
            ? <ChatControls/>
            : <ControlHint
                Icon={ CHAT_HINTS_CONFIG.VISIBILITY.ICON }
                text={ CHAT_HINTS_CONFIG.VISIBILITY.TEXT_TO_OPEN }
                buttonKey={ CHAT_HINTS_CONFIG.VISIBILITY.KEY }
              />
        }
      </ChatHeader>

      <MessagesArea
        messages={ ['Lorem ipsum.','Lorem ipsum.','Lorem ipsum.','Lorem ipsum.','Lorem ipsum.','Lorem ipsum.',] }
      />
    </ChatWindow>
  );
};
