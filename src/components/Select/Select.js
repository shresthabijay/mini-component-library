import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <Icon id='chevron-down'size={24} strokeWidth={1}/>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const PresentationalBit = styled.div`
  background: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  gap: 24px;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 1px solid ${COLORS.primary}
  }
`

export default Select;
