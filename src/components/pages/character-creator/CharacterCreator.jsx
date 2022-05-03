// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Local modules
import {
  Typography,
  Grid,
  MarginContainer
} from '@ui/index';
import { TabSwitchButton } from './components/TabSwitchButton';

// Assets
import { ReactComponent as DnaIcon } from '@images/character-creator/dna-icon.svg';
import { ReactComponent as AppearanceIcon } from '@images/character-creator/appearance-icon.svg';
import { ReactComponent as FaceIcon } from '@images/character-creator/face-icon.svg';
import { ReactComponent as FacialStructureIcon } from '@images/character-creator/facial-structure-icon.svg';
import { ReactComponent as HairIcon } from '@images/character-creator/hair-icon.svg';

// Styled Components
const CharacterCreatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 59px 76px;
  
  background-color: #393f47;
`;

const Title = styled(Typography)`
  position: relative;
  background: linear-gradient(${ ({ theme }) => theme.palette.red }, 
                              ${ ({ theme }) => theme.palette.orange });
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 64px;
  transform-style: preserve-3d;
  
  &::before {
    position: absolute;
    width: 1px;
    content: 'СОЗДАНИЕ ПЕРСОНАЖА';
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.palette.gray};
    left: 5%;
    
    transform: scale(1.2) translateZ(-1px);
    
    opacity: .2;
  }
`;


// Exports
export const CharacterCreator = () => {

  const [isActive, setActive] = useState(false);

  return (
    <CharacterCreatorWrapper>
      <Title variant='title'>
        СОЗДАНИЕ <br/> ПЕРСОНАЖА
      </Title>
      <MarginContainer
        top='23px'
        bottom='23px'
      >
        <Grid
          columns={ 5 }
          columnWidth='83px'
          columnGap={ 7 }
        >
          <TabSwitchButton
            active={ isActive }
            Icon={ DnaIcon }
          >
            ДНК
          </TabSwitchButton>
          <TabSwitchButton
            active={ isActive }
            Icon={ AppearanceIcon }
          >
            Облик
          </TabSwitchButton>
          <TabSwitchButton
            active={ isActive }
            Icon={ FaceIcon }
          >
            Лицо
          </TabSwitchButton>
          <TabSwitchButton
            active={ isActive }
            Icon={ FacialStructureIcon }
          >
            Строение
            лица
          </TabSwitchButton>
          <TabSwitchButton
            active={ isActive }
            Icon={ HairIcon }
          >
            Волосы
          </TabSwitchButton>
        </Grid>
      </MarginContainer>
    </CharacterCreatorWrapper>
  );
};
