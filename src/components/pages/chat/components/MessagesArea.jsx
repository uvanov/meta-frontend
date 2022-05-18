// Import modules
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Typography,
  MarginContainer, Flex
} from '@ui/index';
import {
  addHexAlpha,
  formatColorTags
} from '@lib/utils';
import { useAppSelector } from '@hooks/state';

// Styled Components
const MessagesAreaContainer = styled(MarginContainer)`
  height: 100%;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.4)};
    border-radius: 8px;
  }
`

const StyledMessagesArea = styled(Flex)`
  height: 100%;
`

// Constants
const COLOR_REGEX = /<{(#([a-f0-9]{6})})(.*?)>/gi;
const BOLD_REGEX = /%(.*?)%/ig;

// Exports
export const MessagesArea = () => {
  const messages = useAppSelector(state => state.chatSlice.messages);
  const [preparedMessageList, setPreparedMessageList] = useState([]);

  useEffect(() => {
    if(messages.length){
      const newMessage = messages[messages.length - 1];
      console.log(newMessage);
      const formattedMessage = formatColorTags(newMessage.message);

      preparedMessageList.unshift({
        timestamp: newMessage.timestamp,
        message: formattedMessage
      });

      setPreparedMessageList([...preparedMessageList]);
    }
  }, [messages]);

  return (
    <MessagesAreaContainer
      right='35px'
      left='35px'
    >
      <StyledMessagesArea
        direction='column'
        gap='16px'
      >
        {
          preparedMessageList.map((message, index) => (
            <Flex
              key={ index }
              gap='15px'
            >
              <Typography
                variant='small'
                color='#14131B'
                semiBold
              >
                { message.timestamp }
              </Typography>
              <Typography
                variant='small'
                color='white'
                dangerouslySetInnerHTML={ { __html: message.message } }
              />
            </Flex>
          ))
        }
      </StyledMessagesArea>
    </MessagesAreaContainer>
  );
};
