// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useFormik } from 'formik';

// Local modules
import {
  Flex,
  Typography,
  Grid,
  MarginContainer
} from '@ui/index';
import { GradientButton } from './components/GradientButton';
import { Dna } from './components/Dna';
import { Skin } from './components/Skin';
import { Face } from './components/Face';
import { FacialStructure } from './components/FacialStructure';
import { Hair } from './components/Hair';

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
  box-sizing: border-box;
  
  background-color: #393f47;
`;

const Container = styled(MarginContainer)`
  max-width: 480px;
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
    -webkit-text-stroke-color: ${ ({ theme }) => theme.palette.gray };
    left: 5%;
    
    transform: scale(1.2) translateZ(-1px);
    
    opacity: .2;
  }
`;

// Exports
export const CharacterCreator = () => {


  const [val, setVal] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    motherIndex: 0,
    fatherIndex: 0,
    motherSimilarity: 0,
    fatherSimilarity: 0,
    skinDefect: 0,
    skinAging: 0,
    skinType: 0,
    noseWidth: 0,
    noseHeight: 0,
    noseLength: 0,
    noseBridge: 0,
    eyeSection: 0,
    lipsSize: 0,
    jawWidth: 0,
    jawHeight: 0,
    chinLength: 0,
    chinJut: 0,
    chinWidth: 0,
    chinShape: 0,
    hair: 0,
    eyebrows: 0,
    facialHair: 0
  });

  return (
    <CharacterCreatorWrapper>
      <Container>
        <Title variant='title'>
          СОЗДАНИЕ <br/> ПЕРСОНАЖА
        </Title>
        <MarginContainer
          top='23px'
          bottom='23px'
        >
          <Grid
            columns={ 5 }
            columnGap={ 7 }
          >
            <GradientButton
              active={ true }
              Icon={ DnaIcon }
            >
              ДНК
            </GradientButton>
            <GradientButton
              active={ true }
              Icon={ AppearanceIcon }
            >
              Облик
            </GradientButton>
            <GradientButton
              active={ true }
              Icon={ FaceIcon }
            >
              Лицо
            </GradientButton>
            <GradientButton
              active={ true }
              Icon={ FacialStructureIcon }
            >
              Строение
              лица
            </GradientButton>
            <GradientButton
              active={ true }
              Icon={ HairIcon }
            >
              Волосы
            </GradientButton>
          </Grid>
        </MarginContainer>
        <Flex
          direction='column'
          gap='10px'
        >
          <Hair state={ formState } setState={ setFormState }/>
        </Flex>
      </Container>
    </CharacterCreatorWrapper>
  );
};
