// Import modules
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Flex,
  MarginContainer
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';
import { ChatContext } from '../Chat';

// Assets
import { ReactComponent as SendIcon } from '@images/chat/send-icon.svg';

// Styled Components
const ChatInputWrapper = styled(Flex)`
  padding: 16px;
  background-color: ${ ({ background }) => addHexAlpha(background, 0.7) };
`;

const StyledChatInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: 0;
  border: 0;
  font-weight: 600;
  color: ${ ({ theme }) => theme.palette.white };
  font-size: ${ ({ theme }) => theme.typography.size.small };
  
  &::placeholder {
    font-weight: normal;
    color: ${ ({ theme }) => addHexAlpha(theme.palette.white, 0.5) };
  }
`;

const StyledSendIcon = styled(SendIcon)`
  cursor: pointer;
`;

// Constants
const COMMAND_REGEX = /^\/[\w\s]+/;
const MESSAGE_REGEX = /<{(#([a-f0-9]{6})})(.*?!*)>/gi;

// Exports
export const ChatInput = () => {
  const {
    chatTheme,
    state
  } = useContext(ChatContext);
  const [message, setMessage] = useState('');

  const onMessageSend = () => {

    if(!message.trim().length > 1){
      return;
    }

    if(message.match(COMMAND_REGEX)){
      global.mp.invoke(message);
    }

    global.mp.trigger('client.chatMessage', message);
    return setMessage('');
  };

  const handleEnterDown = (event) => {
    if (event.key === 'Enter') {
      onMessageSend();
    }
  };

  return (
    <>
      {
        state.chatFocused && (
          <MarginContainer
            top='27px'
            right='35px'
            left='35px'
            bottom='20px'
          >
            <ChatInputWrapper
              alignItems='center'
              gap='13px'
              background={ chatTheme.HEADER }
            >
              <StyledChatInput
                value={ message }
                onChange={ event => setMessage(event.target.value) }
                placeholder='Сообщение...'
                spellCheck='false'
                onKeyDown={ handleEnterDown }
              />
              <StyledSendIcon onClick={ () => onMessageSend() }/>
            </ChatInputWrapper>
          </MarginContainer>
        )
      }
    </>
  );
};
