import React from 'react';
import Modal from 'react-modal'
import { customStyles } from './customStyles';

const Dialog = ({ isOpen, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
            {children}
        </Modal>
    );
}

export default Dialog;
