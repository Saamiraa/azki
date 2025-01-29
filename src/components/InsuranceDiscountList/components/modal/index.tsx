import React from "react"
import Backdrop from "./backdrop/backdrop"
import ModalOverlay from "./modalOverlay"

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  )
}

export default Modal