import React, { useRef, useCallback, FormEvent } from 'react';
import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const acceptTermsRef = useRef({ value: false });
    const modalRef = useRef<ModalHandles>(null);

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        console.log(nameInputRef.current?.value);
        console.log(acceptTermsRef.current.value);
    }, []);

    const handleAcceptTerms = useCallback(() => {
        acceptTermsRef.current.value = !acceptTermsRef.current.value;
    }, []);

    const handleOpenModal = useCallback(() => {
        modalRef.current?.openModal();
    }, []);

    return (
        <div className="App">
            <form>
                <Input name="name" label="Digite o seu nome" placeholder="Name" ref={nameInputRef} />

                <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>

                <button onClick={handleSubmit}>Realizar foco</button>
            </form>

            <button onClick={handleOpenModal}>Abrir Modal</button>

            <Modal ref={modalRef} />
        </div>
    );
}

export default App;
