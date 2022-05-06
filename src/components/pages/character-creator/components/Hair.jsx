// Import modules
import React, { useState } from 'react';

// Local modules
import { useAppSelector } from '@hooks/state';
import { SliderInput } from './SliderInput';

// Exports
export const Hair = ({ state, setState }) => {
  const defaultValues = useAppSelector(state => state.characterCreator.values.hair);

  const increment = (stateFieldName) => {
    if(state[stateFieldName] < defaultValues.max){
      setState(oldState => ({ ...oldState, [stateFieldName]: oldState[stateFieldName] + 1 }))
    }
  }

  const decrement = (stateFieldName) => {
    if(state[stateFieldName] > defaultValues.min){
      setState(oldState => ({ ...oldState, [stateFieldName]: oldState[stateFieldName] - 1 }))
    }
  }

  return (
    <>
      <SliderInput
        label='Причёска'
        name='hair'
        value={ state.hair }
        max={ defaultValues.max }
        onDecrement={ () => decrement('hair') }
        onIncrement={ () => increment('hair') }
      />
      <SliderInput
        label='Брови'
        name='eyebrows'
        value={ state.eyebrows }
        max={ defaultValues.max }
        onDecrement={ () => decrement('eyebrows') }
        onIncrement={ () => increment('eyebrows') }
      />
      <SliderInput
        label='Растительность на лице'
        name='facialHair'
        value={ state.facialHair }
        max={ defaultValues.max }
        onDecrement={ () => decrement('facialHair') }
        onIncrement={ () => increment('facialHair') }
      />
    </>
  );
};
