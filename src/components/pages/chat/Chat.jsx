// Import modules
import React, {
  useCallback,
  createContext,
  useReducer,
  useEffect
} from 'react';

// Local modules
import { ChatWindow } from './components/ChatWindow';

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

export const ChatContext = createContext();

const KEY_CODES = {
  SETTINGS: 'F7',
  CHAT_FOCUS: ['y', 'Y', 'н', 'Н'], // Для независимости от раскладки и регистра
  FULLSCREEN: 'F3'
};

// Exports
export const Chat = () => {
  const [chatState, dispatch] = useReducer(
    (state, action) => {
      if (action.type === 'setChatFocus') return { ...state, chatFocused: action.focus };
      if (action.type === 'setChatOpacity') return { ...state, chatOpacity: action.opacity };
      if (action.type === 'setChatTheme') return { ...state, chosenChatTheme: action.theme };
      if (action.type === 'setSettingsOpen') return { ...state, settingsOpened: action.open };
      if (action.type === 'setFullscreen') return { ...state, fullscreen: action.fullscreen };
      if (action.type === 'setPosition') return { ...state, position: action.position };
      if (action.type === 'setControlBlock') return { ...state, blockKeyboardControl: action.block };
      throw new Error();
    }, {
      chatFocused: false,
      chatOpacity: 0.7,
      chosenChatTheme: 'BLACK',
      settingsOpened: false,
      fullscreen: false,
      position: { x: 10, y: 10 },
      blockKeyboardControl: false
  });

  const context = {
    chatTheme: CHAT_THEMES[chatState.chosenChatTheme],
    state: chatState,
    dispatch: dispatch
  };

  const keyDownListener = event => {
    const key = event.key;

    if(chatState.blockKeyboardControl){
      return;
    }

    if(KEY_CODES.CHAT_FOCUS.includes(key)){
      dispatch({ type: 'setChatFocus', focus: !chatState.chatFocused })
    }

    if(chatState.chatFocused){
      if(key === KEY_CODES.SETTINGS){
        dispatch({ type: 'setSettingsOpen', open: !chatState.settingsOpened })
      }

      if(key === KEY_CODES.FULLSCREEN){
        dispatch({ type: 'setFullscreen', fullscreen: !chatState.fullscreen })
      }
    }
  }

  const changePosition = (x, y) => {
    if(x <= 0){ x = 0 }
    if(y <= 0){ y = 0 }
    dispatch({ type: 'setPosition', position: { x, y } })
  };

  const onMouseMove = useCallback(event => {
    changePosition(event.pageX, event.pageY)
  }, [])

  const onMouseDown = () => {
    if(chatState.fullscreen || !chatState.chatFocused){
      return;
    }
    window.addEventListener('mousemove', onMouseMove, true)
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove, true)
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);

    return () => {
      window.removeEventListener('keydown', keyDownListener)
    }
  }, [chatState.settingsOpened, chatState.chatFocused, chatState.fullscreen, chatState.blockKeyboardControl]);

  return (
    <ChatContext.Provider value={ context }>
      <ChatWindow
        mouseDown={ onMouseDown }
        mouseUp={ onMouseUp }
      />
    </ChatContext.Provider>
  );
};
