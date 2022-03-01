import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from '../Spinner';

import { Overlay } from './styles';

const portalDiv = document.getElementById('loader-root') as Element;

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    portalDiv,
  );
}
