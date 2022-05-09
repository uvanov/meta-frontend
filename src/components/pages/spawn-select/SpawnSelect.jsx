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
import { ReactComponent as OrganizationTypeIcon } from '@images/spawn-select/organization-type-icon.svg';
import { ReactComponent as OrganizationNameIcon } from '@images/spawn-select/organization-name-icon.svg';
import { ReactComponent as OrganizationPositionIcon } from '@images/spawn-select/organization-position-icon.svg';
import { ReactComponent as HomeNumberIcon } from '@images/spawn-select/home-number-icon.svg';
import { ReactComponent as HomeClassIcon } from '@images/spawn-select/home-class-icon.svg';
import { ReactComponent as HomeTaxIcon } from '@images/spawn-select/home-tax-icon.svg';
import { ReactComponent as NearestRentIcon } from '@images/spawn-select/nearest-rent-icon.svg';
import { ReactComponent as HeartIcon } from '@images/icons/heart-icon.svg';
import { ReactComponent as FoodIcon } from '@images/icons/food-icon.svg';

// Styled Components
const SpawnSelectWrapper = styled(Flex)`
  height: 100%;
  padding-left: 88px;
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
      justifyContent='center'
      gap='18px'
    >
      <Typography variant='title' color='white'>
        ВЫБОР СПАВНА
      </Typography>

      <SpawnItem
        index={ 0 }
        title='Организация'
        description='Вы появитесь на последнем местевыхода из игры, скорее всего вы ничего не потеряете'
        blocked={ true }
        imageUrl={ OrganizationImage }
        imageShadowColor='#ffffff'
      >
        <InformationItem
          title='Тип организации'
          body='Типовая организация'
          Icon={ OrganizationTypeIcon }
        />
        <InformationItem
          title='Название организации'
          body='The Empire Street Building'
          Icon={ OrganizationNameIcon }
        />
        <InformationItem
          title='Текущая должность'
          body='Top Manager'
          Icon={ OrganizationPositionIcon }
        />
      </SpawnItem>
      <SpawnItem
        index={ 1 }
        title='Дом'
        description='Вы появитесь на последнем месте выхода из игры, скорее всего вы ничего не потеряете'
        blocked={ true }
        imageUrl={ HomeImage }
        imageShadowColor='#3EFF51'
      >
        <InformationItem
          title='Номер дома'
          body='458'
          Icon={ HomeNumberIcon }
        />
        <InformationItem
          title='Класс дома'
          body='Элитный'
          Icon={ HomeClassIcon }
        />
        <InformationItem
          title='Задолжность по дому'
          body='$650 000'
          Icon={ HomeTaxIcon }
        />
      </SpawnItem>
      <SpawnItem
        index={ 2 }
        title='Место выхода'
        description='Вы появитесь на последнем месте выхода из игры, скорее всего вы ничего не потеряете'
        blocked={ true }
        imageUrl={ LastLocationImage }
        imageShadowColor='#FF3E3E'
      >
        <InformationItem
          title='Ближайшая аренда'
          body='Billy Eilish Street'
          Icon={ NearestRentIcon }
        />
        <InformationItem
          title='Ваше здоровье'
          body='47%'
          Icon={ HeartIcon }
        />
        <InformationItem
          title='Ваш голод'
          body='55%'
          Icon={ FoodIcon }
        />
      </SpawnItem>
    </SpawnSelectWrapper>
  );
};
