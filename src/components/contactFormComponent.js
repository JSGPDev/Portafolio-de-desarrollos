import React, { useState } from "react";
import AlertModal from "./AlertModal";
import sendEmail from "../constants/functions/mailer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    icon: "",
    text: "",
    action: () => {},
    closeOnAccept: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalContent({
      icon: "warning",
      text: `Se enviará bajo el correo ${formData.email} \n ¿estás seguro?`,
      action: async () => {
        setModalContent({
          icon: "warning",
          text: `Se enviará bajo el correo ${formData.email} \n ¿estás seguro?`,
        });
        try {
          await sendEmail(formData);
          setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
          setModalContent({
            icon: "success",
            text: "Tu mensaje ha sido enviado con éxito.",
            action: () => setShowModal(false),
            closeOnAccept: true,
          });
        } catch (error) {
          setModalContent({
            icon: "error",
            text: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
            action: () => setShowModal(false),
            closeOnAccept: true,
          });
        }
      },
      closeOnAccept: false,
    });
    setShowModal(true);
  };

  return (
    <div className="floating-box sixth-size flex-center direction-column bottom-center">
      <h1 className="title">Contáctame</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group flex-center direction-row big-size center-center">
          <div className="col medium-size">
            <input
              type="text"
              name="name"
              className="big-size form-control medium-radius"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col medium-size">
            <input
              type="email"
              name="email"
              className="big-size form-control medium-radius"
              placeholder="Tu Correo"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group flex-center direction-row big-size center-center">
          <textarea
            placeholder="Tu Mensaje"
            className="form-control medium-radius"
            name="message"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Enviar
        </button>
      </form>

      {showModal && (
        <AlertModal
          icon={modalContent.icon}
          text={modalContent.text}
          action={modalContent.action}
          closeOnAccept={modalContent.closeOnAccept}
        />
      )}
    </div>
  );
};

export default ContactForm;
