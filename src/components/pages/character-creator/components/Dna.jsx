// Import modules
import React from 'react';

// Local modules
import { useAppSelector } from '@hooks/state';
import { TextInput } from './TextInput';
import { RangeInput } from './RangeInput';

// Exports
export const Dna = ({ state, setState }) => {

  const defaultValues = useAppSelector(state => state.characterCreator.values.dna);
  const isNameValid = useAppSelector(state => state.characterCreator.isNameValid);
  const isSurnameValid = useAppSelector(state => state.characterCreator.isSurnameValid);

  return (
    <>
      <TextInput
        label='Придумайте имя персонажу'
        placeholder='Имя персонажа'
        valid={ isNameValid }
        value={ state.name }
        onChange={ event => setState({ ...state, name: event.target.value }) }
      />
      <TextInput
        label='Придумайте фамилию персонажу'
        placeholder='Фамилия персонажа'
        valid={ isSurnameValid }
        value={ state.surname }
        onChange={ event => setState({ ...state, surname: event.target.value }) }
      />
      <RangeInput
        label='Мать'
        title={ defaultValues.mother.list[state.motherIndex] }
        min={ defaultValues.mother.min }
        max={ defaultValues.mother.max }
        step={ defaultValues.mother.step }
        value={ state.motherIndex }
        onChange={ event => setState({ ...state, motherIndex: event.x }) }
      />
      <RangeInput
        label='Отец'
        title={ defaultValues.father.list[state.fatherIndex] }
        min={ defaultValues.father.min }
        max={ defaultValues.father.max }
        step={ defaultValues.father.step }
        value={ state.fatherIndex }
        onChange={ event => setState({ ...state, fatherIndex: event.x }) }
      />
      <RangeInput
        label='Схожесть с мамой'
        title='Меньше / Больше'
        min={ defaultValues.parentSimilarity.min }
        max={ defaultValues.parentSimilarity.max }
        step={ defaultValues.parentSimilarity.step }
        value={ state.motherSimilarity }
        onChange={ event => setState({ ...state, motherSimilarity: event.x }) }
      />
      <RangeInput
        label='Схожесть с отцом'
        title='Меньше / Больше'
        min={ defaultValues.parentSimilarity.min }
        max={ defaultValues.parentSimilarity.max }
        step={ defaultValues.parentSimilarity.step }
        value={ state.fatherSimilarity }
        onChange={ event => setState({ ...state, fatherSimilarity: event.x }) }
      />
    </>
  );
};
