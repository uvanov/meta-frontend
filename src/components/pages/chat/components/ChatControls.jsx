// Import modules
import React from 'react';

// Local modules
import {
  Flex,
  Typography
} from '@ui/index';
import { ControlHint } from './ControlHint';

// Assets
import { ReactComponent as EyeIcon } from '@images/icons/eye-icon.svg';
import { ReactComponent as SettingsIcon } from '@images/icons/gear-wheel-icon.svg';
import { ReactComponent as ExpandIcon } from '@images/icons/expand-icon.svg';

// Constants
export const CHAT_HINTS_CONFIG = {
  VISIBILITY: {
    ICON: EyeIcon,
    TEXT_TO_OPEN: 'Открыть чат',
    TEXT_TO_CLOSE: 'Скрыть чат',
    KEY: 'Y'
  },
  SETTINGS: {
    ICON: SettingsIcon,
    TEXT: 'Настройки',
    KEY: 'F7'
  },
  FULLSCREEN: {
    ICON: ExpandIcon,
    TEXT_TO_EXPAND: 'Полный экран',
    TEXT_TO_DECREASE: 'Уменьшить',
    KEY: 'F3'
  }
};

// Exports
export const ChatControls = () => {
  return (
    <>
      <Typography
        variant='middle'
        color='white'
        bold
      >
        Чат
      </Typography>
      <Flex
        gap='40px'
      >
        <ControlHint
          Icon={ CHAT_HINTS_CONFIG.SETTINGS.ICON }
          text={ CHAT_HINTS_CONFIG.SETTINGS.TEXT }
          buttonKey={ CHAT_HINTS_CONFIG.SETTINGS.KEY }
        />
        <ControlHint
          Icon={ CHAT_HINTS_CONFIG.VISIBILITY.ICON }
          text={ CHAT_HINTS_CONFIG.VISIBILITY.TEXT_TO_CLOSE }
          buttonKey={ CHAT_HINTS_CONFIG.VISIBILITY.KEY }
        />
        <ControlHint
          Icon={ CHAT_HINTS_CONFIG.FULLSCREEN.ICON }
          text={ CHAT_HINTS_CONFIG.FULLSCREEN.TEXT_TO_EXPAND }
          buttonKey={ CHAT_HINTS_CONFIG.FULLSCREEN.KEY }
        />
      </Flex>
    </>
  );
};
