import React, {useState} from 'react';
import Modal2 from './Modal2'

const ModalOpen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div>
            <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal2 onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
        </Modal2>
      )}
        </div>
    );
};

export default ModalOpen;