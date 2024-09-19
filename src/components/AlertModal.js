import { useState } from "react";

const AlertModal = ({ icon, text, action, closeOnAcept }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcept = () => {
    action();
    if (closeOnAcept) setTimeout(closeModal, 500);
  };

  const closeModal = () => {
    setIsVisible(false); // Cierra el modal
  };

  if (!isVisible) return null;

  return (
    <section id="alertModal" className="modal-Container">
      <div className="modal-window">
        <span onClick={closeModal} className="modal-exit">
          X
        </span>
        <span className={`modal-icon modal-icon-${icon}`}></span>
        <p className="modal-text">{text}</p>
        {action && (
          <div className="modal-button-container">
            <button onClick={handleAcept} className="modal-acept-button">
              Aceptar
            </button>
            <button onClick={closeModal} className="modal-cancel-button">
              Cancelar
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlertModal;
