import React, { ReactNode } from 'react';
import { Container } from './styles';

interface IFormGroup {
  children: ReactNode;
  error?: string;
  isLoading?: boolean;
}

export function FormGroup({ children, error, isLoading }: IFormGroup) {
  return (
    <Container>
      <div className="form-item">
        { children }

        {isLoading && <div className="loader" />}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
