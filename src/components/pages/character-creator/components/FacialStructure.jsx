// Import modules
import React from 'react';

// Local modules
import { useAppSelector } from '@hooks/state';
import { RangeInput } from './RangeInput';

// Exports
export const FacialStructure = ({ state, setState }) => {
  const defaultValues = useAppSelector(state => state.characterCreator.values.face);

  return (
    <>
      <RangeInput
        label='Ширина челюсти'
        title='Меньше / больше'
        name='jawWidth'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.jawWidth }
        onChange={ event => setState({ ...state, jawWidth: event.x }) }
      />
      <RangeInput
        label='Высота целюсти'
        title='Меньше / больше'
        name='jawHeight'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.jawHeight }
        onChange={ event => setState({ ...state, jawHeight: event.x }) }
      />
      <RangeInput
        label='Длина подбородка'
        title='Меньше / больше'
        name='chinLength'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.chinLength }
        onChange={ event => setState({ ...state, chinLength: event.x }) }
      />
      <RangeInput
        label='Выступ подбородка'
        title='Меньше / больше'
        name='chinJut'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.chinJut }
        onChange={ event => setState({ ...state, chinJut: event.x }) }
      />
      <RangeInput
        label='Ширина подбородка'
        title='Меньше / больше'
        name='chinWidth'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.chinWidth }
        onChange={ event => setState({ ...state, chinWidth: event.x }) }
      />
      <RangeInput
        label='Форма подбородка'
        title='Меньше / больше'
        name='chinShape'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.chinShape }
        onChange={ event => setState({ ...state, chinShape: event.x }) }
      />
    </>
  );
};
