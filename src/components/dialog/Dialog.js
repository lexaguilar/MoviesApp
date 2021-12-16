import React from 'react';
import Modal from 'react-modal'
import { customStyles } from './customStyles';

const Dialog = ({ isOpen, close, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={close}
            style={customStyles}
        >
            {children}
            <button type='button' onClick={close}>Cerrar</button>
        </Modal>
    );
}

export default Dialog;
