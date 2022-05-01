// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import { addHexAlpha } from '@lib/utils';
import {
  Flex,
  MarginContainer,
  Typography
} from '@ui/index';

// Styled Components
const ModalBackground = styled(Flex, {
  shouldForwardProp(prop) {
    return prop !== 'isModalShown';
  }
})<Omit<ModalProps, 'title'>>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.8)};
  transition: opacity .3s;
  opacity: 0;
  z-index: -1000;
  
  ${({ isModalShown }) => isModalShown && css`
    opacity: 1;
    z-index: 1000;
  `};
`;

const StyledModal = styled(Flex)`
  padding: 29px 90px 32px;
  border-radius: 38px;
  background: linear-gradient(180deg, ${({ theme }) => theme.palette.bluegray},
                                      ${({ theme }) => addHexAlpha(theme.palette.bluegray, 0.1)});
`;

// Types
interface ModalProps {
  title: string;
  isModalShown: boolean;
}

// Exports
export const Modal: React.FC<ModalProps> = (
  {
    children,
    title,
    isModalShown,
    ...remainingProps
  }) => {

  return (
    <ModalBackground
      direction='column'
      justifyContent='center'
      alignItems='center'
      isModalShown={ isModalShown }
    >
      <StyledModal
        direction='column'
        justifyContent='center'
        alignItems='center'
        { ...remainingProps }
      >
        <Typography variant='title' color='gray'>
          { title }
        </Typography>
        <MarginContainer
          top='16px'
          bottom='30px'
        >
          { children }
        </MarginContainer>
      </StyledModal>
    </ModalBackground>
  );
};
