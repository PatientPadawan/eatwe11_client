import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
  children,
  viewStyle,
  node,
}) => (
  ReactDOM.createPortal(
    <div ref={node} className={`${viewStyle}`}>
      {children}
    </div>,
    document.getElementById('modal-root'),
  )
);

export default Modal;
