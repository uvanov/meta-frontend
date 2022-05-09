// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Flex,
  Typography
} from '@ui/index';
import { SpawnItem } from './components/SpawnItem';
import { InformationItem } from './components/InformationItem';

// Assets
import BackgroundImage from '@images/helicopter-background.jpg';
import OrganizationImage from '@images/spawn-select/organization.png';
import HomeImage from '@images/spawn-select/house.png';
import LastLocationImage from '@images/spawn-select/last-location.png';





// Styled Components
const SpawnSelectWrapper = styled(Flex)`
  height: 100%;
  padding: 60px 90px;
  background: 
    linear-gradient(
      270.39deg, 
      rgba(17, 16, 27, 0.4998) 0.37%, 
      rgba(17,16,27,0.98) 99.7%
    ), 
    url(${ BackgroundImage }) 
    no-repeat;
  background-size: cover;
`

// Exports
export const SpawnSelect = () => {
  return (
    <SpawnSelectWrapper
      direction='column'
      gap='18px'
    >
      <Typography variant='title' color='white'>
        ВЫБОР СПАВНА
      </Typography>

      <SpawnItem
        index={ 0 }
        title='Дом'
        description='lorem lorem lorem lorem'
        blocked={ false }
        imageUrl={ OrganizationImage }
        imageShadowColor='#3EFF51'
      >
        <InformationItem
          title='Тип организации'
          body='Типовая организация'
          Icon={}
        />
      </SpawnItem>
    </SpawnSelectWrapper>
  );
};
