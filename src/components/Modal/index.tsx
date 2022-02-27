import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Container, Footer, Overlay } from './styles';

interface IModal {
  danger?: boolean;
}
const portalDiv = document.getElementById('modal-root') as Element;

export function Modal({ danger = false }: IModal) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>
            Texto
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    portalDiv,
  );
}

Modal.defaultProps = {
  danger: false,
};
