// Import modules
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Typography,
  MarginContainer, Flex
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';
import { useAppSelector } from '@hooks/state';

// Styled Components
const StyledMessagesArea = styled(Flex)`
  height: 100%;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.1)};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.4)};
    border-radius: 8px;
  }
`

// Constants
const COLOR_REGEX = /<{(#([a-f0-9]{6})})(.*?)>/gi;
const BOLD_REGEX = /%(.*?)%/ig;
const COMMAND_REGEX = /^\/[\w\s]+/;

// Exports
export const MessagesArea = () => {

  const messages = useAppSelector(state => state.chatSlice.messages);
  const [preparedMessageList, setPreparedMessageList] = useState([]);

  const formatColor = (message) => {

    if(!message.match(COLOR_REGEX)){
      return formatBold(message);
    }

    while(message.match(COLOR_REGEX)){
      const messageExec = COLOR_REGEX.exec(message);
      console.log(messageExec);
      message = message.replace(
        messageExec[0],
        `<span style="color: #${ messageExec[2] }">${ formatBold(messageExec[3]) }</span>`
      );
    }

    return message;
  };

  const formatBold = (message) => {
    if(!message.match(BOLD_REGEX)){
      return message;
    }

    while (message.match(BOLD_REGEX)) {
      const messageExec = BOLD_REGEX.exec(message);
      message = message.replace(
        messageExec[0],
        `<strong>${ messageExec[1] }</strong>`
      );
    }

    return message;
  }

  useEffect(() => {
    const newMessage = messages[messages.length - 1].message;
    const formattedMessage = formatColor(newMessage);

    setPreparedMessageList([...preparedMessageList, formattedMessage]);
  }, [messages]);

  return (
    <MarginContainer
      right='35px'
      left='35px'
      style={ { height: '100%' } }
    >
      <StyledMessagesArea
        direction='column'
        gap='16px'
      >
        {
          preparedMessageList.map(message => (
            <Typography
              key={ Date.now() }
              variant='small'
              color='black'
              dangerouslySetInnerHTML={ { __html: message } }
            >

            </Typography>
          ))
        }
      </StyledMessagesArea>
    </MarginContainer>
  );
};
