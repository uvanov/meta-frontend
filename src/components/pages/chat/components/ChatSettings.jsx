// Import modules
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { ChatContext } from '../Chat';
import {
  Flex,
  Grid,
  Typography,
  Range
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';

// Styled Components
const StyledChatSettings = styled(Grid)`
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;
  
  height: ${({ toggle }) => toggle ? '50px' : '0px'};
  overflow: hidden;
  transition: background-color .3s, height .3s;
  padding: 0 35px;
  
  ${({ background }) => background && css`
     background-color: ${ addHexAlpha(background, 0.8) };
  `}
`;

const StyledRange = styled(Range)`
  width: 100px;
`;

const ThemeSelector = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.palette.orange};
  cursor: pointer;
  transition: box-shadow .3s, border-color .3s;
  
  ${({ background }) => background && css`
    background-color: ${ background }
  `}
  
  ${({ selected, theme }) => selected && css`
     border-color: transparent;
     box-shadow: 0 0 7px ${ theme.palette.white };
  `}
`;

// Constants
const THEME_SELECTOR_COLOR_MAP = {
  BLACK: '#1D1C28',
  GREEN: '#1DB854',
  PURPLE: '#623EA0',
  BLUE: '#2D357D',
  RED: '#E21805'
};

// Exports
export const ChatSettings = () => {
  const {
    chatTheme,
    dispatch,
    state
  } = useContext(ChatContext);

  const chooseChatTheme = (themeName) => {
    dispatch({ type: 'setChatTheme', theme: themeName });
  };

  const setChatOpacity = (value) => {
    let preparedValue = parseFloat(value.toFixed(1));
    dispatch({ type: 'setChatOpacity', opacity: preparedValue });
  };

  return (
    <StyledChatSettings
      columnLayout='1.3fr 2fr 2fr'
      alignItems='center'
      background={ chatTheme.HEADER }
      toggle={ state.settingsOpened }
    >
      <Typography
        variant='middle'
        color='white'
        semiBold
      >
        Настройки
      </Typography>

      <Flex
        alignItems='center'
        gap='12px'
      >
        <Typography
          variant='small'
          color='white'
          semiBold
          italic
        >
          Прозрачность
        </Typography>
        <StyledRange
          value={ state.chatOpacity }
          onChange={ values => setChatOpacity(values.x) }
          min={ 0 }
          max={ 1 }
          step={ 0.1 }
        />
      </Flex>
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        gap='11px'
      >
        <Typography
          variant='small'
          color='white'
          semiBold
          italic
        >
          Фон
        </Typography>
        <ThemeSelector
          onClick={ () => chooseChatTheme('BLACK') }
          selected={ state.chosenChatTheme === 'BLACK' }
          background={ THEME_SELECTOR_COLOR_MAP.BLACK }
        />
        <ThemeSelector
          onClick={ () => chooseChatTheme('GREEN') }
          selected={ state.chosenChatTheme === 'GREEN' }
          background={ THEME_SELECTOR_COLOR_MAP.GREEN }
        />
        <ThemeSelector
          onClick={ () => chooseChatTheme('PURPLE') }
          selected={ state.chosenChatTheme === 'PURPLE' }
          background={ THEME_SELECTOR_COLOR_MAP.PURPLE }
        />
        <ThemeSelector
          onClick={ () => chooseChatTheme('BLUE') }
          selected={ state.chosenChatTheme === 'BLUE' }
          background={ THEME_SELECTOR_COLOR_MAP.BLUE }
        />
        <ThemeSelector
          onClick={ () => chooseChatTheme('RED') }
          selected={ state.chosenChatTheme === 'RED' }
          background={ THEME_SELECTOR_COLOR_MAP.RED }
        />
      </Flex>
    </StyledChatSettings>
  );
};
