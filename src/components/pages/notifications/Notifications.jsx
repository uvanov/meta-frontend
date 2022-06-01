// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Local modules
import { formatColorTags } from '@lib/utils';
import { Flex, Typography } from '@ui/index';

// Assets
import { ReactComponent as InformationIcon } from '@images/notifications/information.svg';
import { ReactComponent as WarningIcon } from '@images/notifications/warning.svg';
import { ReactComponent as CheckIcon } from '@images/notifications/check.svg';
import { ReactComponent as CrossIcon } from '@images/notifications/cross.svg';
import { ReactComponent as SystemIcon } from '@images/notifications/lock.svg';
import { NotificationBody } from '@pages/notifications/components/NotificationBody';

// Styled Components
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  
  .Toastify__toast-container{
    width: unset;
  }
  
  .Toastify__toast-container--top-right {
    top: 30%;
    right: -5px;
  }
  
  .Toastify__progress-bar {
    background: ${ ({ theme }) => theme.gradient.orangeRed(270) };
    top: 0;
  }
  
  .Toastify__toast{
    user-select: none;
    width: 480px;
    padding: 21px 25px 25px 20px;
    background: ${ ({ theme }) => theme.palette.darkbluegray };
  }
  
  .Toastify__toast-body{
    padding: 0;
  }
`;

// Constants
const NOTIFICATION_ICON_MAP = {
  information: InformationIcon,
  warning: WarningIcon,
  success: CheckIcon,
  error: CrossIcon,
  system: SystemIcon
};

// Exports
export const Notifications = () => {

  const pushNotification = (
    type,
    title = 'Notification title',
    text = 'Notification text',
    duration
  ) => {
    toast(
      <NotificationBody
        text={ text }
        title={ title }
        Icon={ NOTIFICATION_ICON_MAP[type] }
      />,
      {
        autoClose: duration
      }
    );
  };

  return (
    <Wrapper>
      <button onClick={ () => pushNotification('success', 'Title', '<{#fe0000}Хуй тебе в рыло>, дорогой', 5000) }>
        Notify !
      </button>
      <ToastContainer/>
    </Wrapper>
  );
};
