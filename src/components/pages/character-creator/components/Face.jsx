// Import modules
import React from 'react';

// Local modules
import { useAppSelector } from '@hooks/state';
import { RangeInput } from './RangeInput';

// Exports
export const Face = ({ state, setState }) => {
  const defaultValues = useAppSelector(state => state.characterCreator.values.face);

  return (
    <>
      <RangeInput
        label='Ширина носа'
        title='Меньше / больше'
        name='noseWidth'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.noseWidth }
        onChange={ event => setState({ ...state, noseWidth: event.x }) }
      />
      <RangeInput
        label='Высота носа'
        title='Меньше / больше'
        name='noseHeight'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.noseHeight }
        onChange={ event => setState({ ...state, noseHeight: event.x }) }
      />
      <RangeInput
        label='Длина носа'
        title='Меньше / больше'
        name='noseLength'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.noseLength }
        onChange={ event => setState({ ...state, noseLength: event.x }) }
      />
      <RangeInput
        label='Переносица'
        title='Меньше / больше'
        name='noseBridge'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.noseBridge }
        onChange={ event => setState({ ...state, noseBridge: event.x }) }
      />
      <RangeInput
        label='Разрез глаз'
        title='Меньше / больше'
        name='eyeSection'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.eyeSection }
        onChange={ event => setState({ ...state, eyeSection: event.x }) }
      />
      <RangeInput
        label='Объём губ'
        title='Меньше / больше'
        name='lipsSize'
        min={ defaultValues.min }
        max={ defaultValues.max }
        step={ defaultValues.step }
        value={ state.lipsSize }
        onChange={ event => setState({ ...state, lipsSize: event.x }) }
      />
    </>
  );
};
