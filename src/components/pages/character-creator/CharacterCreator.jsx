// Import modules
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import {
  Flex,
  Typography,
  Grid,
  MarginContainer, Button
} from '@ui/index';
import { GradientButton } from './components/GradientButton';
import { Dna } from './components/Dna';
import { Skin } from './components/Skin';
import { Face } from './components/Face';
import { FacialStructure } from './components/FacialStructure';
import { Hair } from './components/Hair';
import {
  useAppDispatch,
  useAppSelector
} from '@hooks/state';
import { characterCreatorSlice } from '@store/slices/CharacterCreatorSlice';
import {
  getRandomFromRange,
  matchToEnglishAlphabet
} from '@lib/utils';

// Assets
import { ReactComponent as DnaIcon } from '@images/character-creator/dna-icon.svg';
import { ReactComponent as AppearanceIcon } from '@images/character-creator/appearance-icon.svg';
import { ReactComponent as FaceIcon } from '@images/character-creator/face-icon.svg';
import { ReactComponent as FacialStructureIcon } from '@images/character-creator/facial-structure-icon.svg';
import { ReactComponent as HairIcon } from '@images/character-creator/hair-icon.svg';
import { ReactComponent as RandomizeIcon } from '@images/icons/randomize-icon.svg';


// Styled Components
const CharacterCreatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 59px 76px;
  box-sizing: border-box;
  background-color: #393f47;
`;

const Container = styled(Flex)`
  height: 100%;
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

const RandomizeButton = styled(Flex)`
  min-width: 75px;
  height: 75px;
  border-radius: 9px;
  background: linear-gradient(
      138.31deg, 
      ${({ theme }) => theme.palette.red} -55%, 
      ${({ theme }) => theme.palette.orange} 206.03%
  );
  cursor: pointer;
`

// Exports
export const CharacterCreator = () => {

  // TODO: Переделать все компоненты нахуй. Перевести этот стейт на useReducer, перенести все страницы формы на диспатчи.
  const dispatch = useAppDispatch();
  const {
    setNameValid,
    setSurnameValid
  } = characterCreatorSlice.actions;

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
  const [activeTab, setActiveTab] = useState('dna');
  const isShown = useAppSelector(state => state.characterCreator.isShown);

  const randomizeFormData = () => {
    let randomizedData = {
      motherIndex: getRandomFromRange(0, MOTHER_INDEX_MAX, true),
      fatherIndex: getRandomFromRange(0, FATHER_INDEX_MAX, true),
      motherSimilarity: getRandomFromRange(0, PARENT_SIMILARITY_MAX),
      fatherSimilarity: getRandomFromRange(0, PARENT_SIMILARITY_MAX),
      skinDefect: getRandomFromRange(0, DEFECTS_MAX, true),
      skinAging: getRandomFromRange(0, AGING_MAX, true),
      skinType: getRandomFromRange(0, TYPES_MAX, true),
      noseWidth: getRandomFromRange(0, FACE_MAX),
      noseHeight: getRandomFromRange(0, FACE_MAX),
      noseLength: getRandomFromRange(0, FACE_MAX),
      noseBridge: getRandomFromRange(0, FACE_MAX),
      eyeSection: getRandomFromRange(0, FACE_MAX),
      lipsSize: getRandomFromRange(0, FACE_MAX),
      jawHeight: getRandomFromRange(0, FACE_MAX),
      jawWidth: getRandomFromRange(0, FACE_MAX),
      chinWidth: getRandomFromRange(0, FACE_MAX),
      chinLength: getRandomFromRange(0, FACE_MAX),
      chinJut: getRandomFromRange(0, FACE_MAX),
      chinShape: getRandomFromRange(0, FACE_MAX),
      hair: getRandomFromRange(0, HAIR_MAX, true),
      eyebrows: getRandomFromRange(0, HAIR_MAX, true),
      facialHair: getRandomFromRange(0, HAIR_MAX, true)
    };
    setFormState(randomizedData);
    global.mp.trigger('client.randomCharacter',  JSON.stringify(randomizedData));
  };

  const changeTab = (tabName, tabIndex) => {
    setActiveTab(tabName);
    global.mp.trigger('client.changeTab', tabIndex);
  };

  const submitCharacter = () => {
    let isNameValid = formState.name.trim().length > 3 && matchToEnglishAlphabet(formState.name.trim());
    let isSurnameValid = formState.surname.trim().length > 3 && matchToEnglishAlphabet(formState.surname.trim());

    if( !isNameValid || !isSurnameValid ){
      if( !isNameValid ){
        dispatch(setNameValid({ valid: false }));
      } else {
        dispatch(setNameValid({ valid: true }));
      }

      if( !isSurnameValid ){
        dispatch(setSurnameValid({ valid: false }));
      } else {
        dispatch(setSurnameValid({ valid: true }));
      }

      return;
    } else {
      dispatch(setNameValid({ valid: true }));
      dispatch(setSurnameValid({ valid: true }));
      return global.mp.trigger('client.saveCharacter',  JSON.stringify(formState));
    }
  };

  const MOTHER_INDEX_MAX = useAppSelector(state => state.characterCreator.values.dna.mother.max);
  const FATHER_INDEX_MAX = useAppSelector(state => state.characterCreator.values.dna.father.max);
  const PARENT_SIMILARITY_MAX = useAppSelector(state => state.characterCreator.values.dna.parentSimilarity.max);
  const AGING_MAX = useAppSelector(state => state.characterCreator.values.skin.aging.max);
  const DEFECTS_MAX = useAppSelector(state => state.characterCreator.values.skin.defects.max);
  const TYPES_MAX = useAppSelector(state => state.characterCreator.values.skin.types.max);
  const FACE_MAX = useAppSelector(state => state.characterCreator.values.face.max);
  const HAIR_MAX = useAppSelector(state => state.characterCreator.values.hair.max);

  const FORM_PAGES_MAP = {
    dna: <Dna state={ formState } setState={ setFormState }/>,
    skin: <Skin state={ formState } setState={ setFormState }/>,
    face: <Face state={ formState } setState={ setFormState }/>,
    facialStructure: <FacialStructure state={ formState } setState={ setFormState }/>,
    hair: <Hair state={ formState } setState={ setFormState }/>,
  };

  return (
    <>
      {
        isShown && (
          <CharacterCreatorWrapper>
            <Container
              direction='column'
              justifyContent='space-between'
              gap='17px'
            >
              <div>
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
                      active={ activeTab === 'dna' }
                      Icon={ DnaIcon }
                      onClick={ () => changeTab('dna', 0) }
                    >
                      ДНК
                    </GradientButton>
                    <GradientButton
                      active={ activeTab === 'skin' }
                      Icon={ AppearanceIcon }
                      onClick={ () => changeTab('skin', 1) }
                    >
                      Облик
                    </GradientButton>
                    <GradientButton
                      active={ activeTab === 'face' }
                      Icon={ FaceIcon }
                      onClick={ () => changeTab('face', 2) }
                    >
                      Лицо
                    </GradientButton>
                    <GradientButton
                      active={ activeTab === 'facialStructure' }
                      Icon={ FacialStructureIcon }
                      onClick={ () => changeTab('facialStructure', 3) }
                    >
                      Строение
                      лица
                    </GradientButton>
                    <GradientButton
                      active={ activeTab === 'hair' }
                      Icon={ HairIcon }
                      onClick={ () => changeTab('hair', 4) }
                    >
                      Волосы
                    </GradientButton>
                  </Grid>
                </MarginContainer>
                <Flex
                  direction='column'
                  gap='10px'
                >
                  { FORM_PAGES_MAP[activeTab] }
                </Flex>
              </div>
              <Flex gap='13px'>
                <Button
                  variant='danger'
                  fullWidth
                  onClick={ submitCharacter }
                >
                  СОХРАНИТЬ ПЕРСОНАЖА
                </Button>
                <RandomizeButton
                  justifyContent='center'
                  alignItems='center'
                  onClick={ () => randomizeFormData() }
                >
                  <RandomizeIcon/>
                </RandomizeButton>
              </Flex>
            </Container>
          </CharacterCreatorWrapper>
        )
      }
    </>
  );
};
