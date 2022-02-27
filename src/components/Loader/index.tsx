import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

const portalDiv = document.getElementById('loader-root') as Element;

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay><div className="loader" /></Overlay>,
    portalDiv,
  );
}
