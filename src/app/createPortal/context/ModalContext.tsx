"use client";
import { createContext, useContext, useState } from "react";
import { ClientOnlyPortal } from "../components/ClientOnlyPortal";

type ModalContextType =
  | {
      openModal: (content: React.ReactNode) => void;
      closeModal: () => void;
    }
  | undefined;

const ModalContext = createContext<ModalContextType>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && <ClientOnlyPortal>{modalContent}</ClientOnlyPortal>}
    </ModalContext.Provider>
  );
};
