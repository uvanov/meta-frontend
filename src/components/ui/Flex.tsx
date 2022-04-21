// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Функция-проверяющий на то, нужно ли прокидывать проп на сам html-элемент, или это проп для стилей.
function shouldForwardProp(prop: string) {
  return !([
    'gap',
    'wrap',
    'inline',
    'alignItems',
    'direction',
    'fullWidth',
    'fullHeight',
    'justifyContent'
  ].includes(prop));
}

// Constants.
const DEFAULT_GAP = '0px';

// Styled Components
interface FlexProps {
  inline?: boolean;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  wrap?: boolean | string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  gap?: { x: number; y: number } | string;
}

/*
  Конструкция может показаться сложной.
  Значит мы создаём стилизованный div, накидываем туда нашу функцию-проверщик, чтобы у нас на html-элементе
  не было атрибутов типо "justifyContent="1px", дальше прокидываем типизацию наших пропсов.

  Сам копомнент из себя представляет "флекс-конструктор", для того чтобы не повторять каждый раз стили флекса.
 */
const StyledFlex = styled('div', { shouldForwardProp })<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ wrap }) => ((typeof wrap === 'boolean' && wrap) ? 'wrap' : wrap)};
  ${({ fullHeight }) => fullHeight && `height: 100%;`};
  ${({ fullWidth }) => fullWidth && `width: 100%;`};
  
  ${({ gap }) => gap !== DEFAULT_GAP && css`
    --gapX: ${(typeof gap === 'object' ? gap.x : gap) || DEFAULT_GAP};
    --gapY: ${(typeof gap === 'object' ? gap.y : gap) || DEFAULT_GAP};
    gap: var(--gapY) var(--gapX);
  `}
`;

// Exports
export const Flex: React.FC<FlexProps> = (
  {
    children,
    fullWidth,
    fullHeight,
    alignItems,
    direction,
    gap,
    inline,
    justifyContent,
    wrap,
    ...remainingProps
  }) => {

  let flexPropsObject = {
    fullWidth,
    fullHeight,
    alignItems,
    direction,
    gap,
    inline,
    justifyContent,
    wrap
  };

  return (
    <StyledFlex
      { ...flexPropsObject }
      { ...remainingProps }
    >
      {children}
    </StyledFlex>
  )
};