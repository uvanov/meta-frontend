// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { addHexAlpha } from "@lib/utils";
import {
  Flex,
  Typography
} from "@ui/index";
import {useAppSelector} from "@hooks/state";

// Styled Components
const ModalBackground = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => addHexAlpha(theme.palette.black, 0.8)};
`;

const StyledModal = styled(Flex)`
  background: linear-gradient(${({ theme }) => theme.palette.bluegray} ${({ theme }) => addHexAlpha(theme.palette.bluegray, 0.1)});
`

// Types
interface ModalProps {
  title: string;
  subtitle: string | React.ReactNode;
  isModalShown: boolean;
}

// Exports
export const Modal: React.FC<ModalProps> = ({ children, title, subtitle, isModalShown }) => (
  <>
  {
    isModalShown && (
      <ModalBackground
        justifyContent='center'
        alignItems='center'
      >
        <StyledModal>
          { children }
        </StyledModal>
      </ModalBackground>
    )
  }
  </>
);
