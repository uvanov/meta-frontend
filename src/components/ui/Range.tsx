// Import modules
import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-input-slider';

// Local modules

// Styled Components
const StyledSlider = styled(Slider)`
  > div {
    transition: all .2s;
  }
`;

// Types
interface RangeProps {
  value: number,
  onChange: (values: { x: number, y: number }) => void,
  axis?: 'x' | 'y',
  step?: number,
  min?: number,
  max?: number
}

// Exports
export const Range: React.FC<RangeProps> = (
  {
    value,
    onChange,
    axis = 'x',
    step = 1,
    min = 0,
    max = 100,
    ...remainingProps
  }) => {

  const sliderSettings = axis === 'x'
    ? { x: value, xmin: min, xmax: max, xstep: step }
    : { y: value, ymin: min, ymax: max, ystep: step };

  return (
    <StyledSlider
      axis={ axis }
      { ...sliderSettings }
      { ...remainingProps }
      styles={ {
        track: {
          backgroundColor: '#16141C'
        },
        active: {
          backgroundColor: '#FFA14A'
        },
        thumb: {
          width: 12,
          height: 12
        }
      } }
      onChange={ values => {
        onChange(values);
      } }
    />
  );
};
