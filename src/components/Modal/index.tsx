import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
    openModal(): void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
    const [visible, setVisible] = useState(true);

    useImperativeHandle(ref, () => {
        return {
            openModal,
        };
    });

    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false)
    }, []);

    if(!visible) return null;

    return (
        <div>
            <h1>Modal aberto</h1>

            <button onClick={handleCloseModal}>fechar modal</button>
        </div>
    );
}

export default forwardRef(Modal);
