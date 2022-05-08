// Import modules
import React from 'react';

// Local modules
import { useAppSelector } from '@hooks/state';
import { RangeInput } from './RangeInput';

// Exports
export const Skin = ({ state, setState }) => {
  const defaultValues = useAppSelector(state => state.characterCreator.values.skin);

  return (
    <>
      <RangeInput
        label='Дефекты кожи'
        title={ `${ state.skinDefect } (${ defaultValues.defects.max })` }
        name='skinDefect'
        min={ defaultValues.defects.min }
        max={ defaultValues.defects.max }
        step={ defaultValues.step }
        value={ state.skinDefect }
        onChange={ event => setState({ ...state, skinDefect: event.x }) }
      />
      <RangeInput
        label='Старение кожи'
        title={ `${ state.skinAging } (${ defaultValues.aging.max })` }
        name='skinAging'
        min={ defaultValues.aging.min }
        max={ defaultValues.aging.max }
        step={ defaultValues.step }
        value={ state.skinAging }
        onChange={ event => setState({ ...state, skinAging: event.x }) }
      />
      <RangeInput
        label='Тип кожи'
        title={ `${ state.skinType } (${ defaultValues.types.max })` }
        name='skinType'
        min={ defaultValues.types.min }
        max={ defaultValues.types.max }
        step={ defaultValues.step }
        value={ state.skinType }
        onChange={ event => setState({ ...state, skinType: event.x }) }
      />
    </>
  );
};
