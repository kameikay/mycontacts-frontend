import React, { ReactNode } from 'react';
import { Container } from './styles';

interface IFormGroup {
  children: ReactNode;
}

export function FormGroup({ children }: IFormGroup) {
  return (
    <Container>
      { children }
    </Container>
  );
}
