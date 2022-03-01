import React from 'react';
import { StyledSpinner } from './styles';

interface ISpinner {
  size?: number;
}

export function Spinner({ size }: ISpinner) {
  return <StyledSpinner size={size} />;
}

Spinner.defaultProps = {
  size: 32,
};
