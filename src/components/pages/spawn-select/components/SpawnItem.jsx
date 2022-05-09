// Import modules
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import {
  Flex, MarginContainer,
  Typography
} from '@ui/index';
import { addHexAlpha } from '@lib/utils';

// Assets
import { ReactComponent as ArrowIcon } from '@images/icons/long-arrow-right.svg'

// Styled Components
const VerticalButton = styled(Flex)`
  ${ ({ theme }) => css`
    color: ${ theme.palette.gray };
  ` }
  width: 50px;
`;

const SelectButton = styled(VerticalButton)`
  background-color: #262534;
  transition: background .3s, box-shadow .3s, width .4s;
  cursor: pointer;
  
  &:hover {
    width: 60px;
    path {
      fill: ${({ theme }) => addHexAlpha(theme.palette.black, 0.4)} !important;
    }
    background: linear-gradient(
      138.31deg, 
      ${({ theme }) => theme.palette.red} -55.79%, 
      ${({ theme }) => theme.palette.orange} 206.03%
    );
    box-shadow: 0 0 59px rgba(255, 107, 67, 0.25);
  }
`;

const BlockedSelectButton = styled(VerticalButton)`
  background: rgba(255, 255, 255, 0.04);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
`;

const SpawnItemWrapper = styled(Flex, {
  shouldForwardProp(prop){
    return prop !== 'blocked';
  }
})`
  width: fit-content;
  background: linear-gradient(
    90deg, rgba(29, 28, 40, 0.99) 0%, 
    rgba(29, 28, 40, 0.2079) 100%
  );
  border-radius: 0 38px 38px 0;
  
  ${({ blocked }) => !blocked && 'opacity: .5;'}
`

const SpawnItemBody = styled(Flex)`
  padding: 19px 23px;
`;

const SpawnImage = styled.img`
  filter: drop-shadow(
    0 4px 150px ${({ shadowColor }) => addHexAlpha(shadowColor ? shadowColor : '#ffffff', .3)}
  );
`;

const Description = styled(Typography)`
  max-width: 300px;
`;

// Exports
export const SpawnItem = (
  {
    index,
    blocked,
    title,
    description,
    imageUrl,
    children,
    imageShadowColor = 'white'
  }
) => {
  return (
    <SpawnItemWrapper
      blocked={ blocked }
      gap='23px'
    >
      {
        !blocked
          ? (
              <BlockedSelectButton
                justifyContent='center'
                alignItems='center'
              >
                <Typography
                  variant='middle'
                  color='gray'
                  bold>
                  Не доступен
                </Typography>
              </BlockedSelectButton>
            )
          : (
            <SelectButton
              justifyContent='center'
              alignItems='center'
              onClick={ () => global.mp.trigger('client.chooseSpawn',  index) }
            >
              <ArrowIcon/>
            </SelectButton>
          )
      }

      <SpawnItemBody
        gap='65px'
      >
        <div>
          <Typography
            variant='subtitle'
            color='white'
          >
            { title }
          </Typography>
          <Description
            variant='small'
            color='gray'
          >
            { description ? description : 'Отсутствует' }
          </Description>
          <MarginContainer top='19px'>
            <Flex
              direction='column'
              gap='10px'
            >
              { children }
            </Flex>
          </MarginContainer>
        </div>
        <SpawnImage
          src={ imageUrl }
          alt=''
          shadowColor={ imageShadowColor }
        />
      </SpawnItemBody>
    </SpawnItemWrapper>
  );
};
