/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  overflow: hidden;
`

const ProgressIndicator = styled.div`
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  background: ${COLORS.primary};
  width: var(--width);
  height: 100%;
`
const sizeStyles = {
  'small': {
    '--border-radius': '4px',
    '--padding': '0px',
    '--height': '8px',
  },
  'medium': {
    '--border-radius': '4px',
    '--padding': '0px',
    '--height': '12px',
  },
  'large': {
    '--border-radius': '8px',
    '--padding': '4px',
    '--height': '24px',
  }
}

const ProgressBar = ({ value, size}) => {
  return (
    <Wrapper style={sizeStyles[size]}>
      <VisuallyHidden>{size} sized progress bar with {value} percentage.</VisuallyHidden>
      <ProgressIndicator style={{
        '--width': (value > 100 ? 100 : value) + '%'
      }}/>
    </Wrapper>
  );
};

export default ProgressBar;
