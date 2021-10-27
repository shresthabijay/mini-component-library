import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const Wrapper = styled.label`
  position: relative;
  display: inline-block;
`

const Input = styled.input`
  width: var(--width, 100%);
  border: none;
  padding: var(--padding-vertical) 2px;
  border-bottom: var(--border-size) solid ${COLORS.black};
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  padding-left: var(--padding-left);
   
  &:placeholder {
    color: ${COLORS.gray500};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`

const sizeStyles = {
  'small': {
    '--font-size': '14px',
    '--border-size': '1px',
    '--padding-vertical': '4px',
  },
  'large': {
    '--font-size': '18px',
    '--border-size': '2px',
    '--padding-vertical': '7px',
  }
}

const iconSizes = {
  'small': 11,
  'large': 16,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {

  return (
    <Wrapper>
      <VisuallyHidden>
        Icon input
      </VisuallyHidden>
      <IconWrapper style={{
        '--size': iconSizes[size] + 'px'
      }}>
        <Icon id={icon} size={iconSizes[size]}/>
      </IconWrapper>
      <Input placeholder={placeholder} {...delegated} style={{
        '--width': width + 'px',
        '--padding-left': (iconSizes[size] + 15) + 'px',
        ...sizeStyles[size]
      }}/>
    </Wrapper>
  )
};

export default IconInput;
