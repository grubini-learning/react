import {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
  cloneElement,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";

type TModal = {
  openSection: string;
  onClose: () => void;
  onOpen: (sectionName: string) => void;
};

const ModalContext = createContext<TModal | undefined>(undefined);

const Modal = ({ children }: PropsWithChildren<{}>) => {
  const [openSection, setOpenSection] = useState("");

  const onClose = () => {
    setOpenSection("");
  };

  const onOpen = (sectionName: string) => {
    setOpenSection(sectionName);
  };

  return (
    <ModalContext.Provider value={{ openSection, onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("The modal context is undefined");
  }

  return context;
};

const Open = ({ children, opens }: PropsWithChildren<{ opens: string }>) => {
  const { onOpen } = useModalContext();

  return cloneElement(children as ReactElement, {
    onClick: () => onOpen(opens),
  });
};

const Close = ({ children }: PropsWithChildren<{}>) => {
  const { onClose } = useModalContext();
  return cloneElement(children as ReactElement, {
    onClick: () => {
      (children as ReactElement).props.onClick();
      onClose();
    },
  });
};

const Window = ({ children, name }: PropsWithChildren<{ name: string }>) => {
  const { openSection, onClose } = useModalContext();

  if (name !== openSection) return false;

  return createPortal(
    <div>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "gray",
          backdropFilter: "blur(4px)",
          opacity: 0.8,
          transition: "all 0.5s",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          inset: 40,
          padding: "10px",
          backgroundColor: "white",
          boxShadow:
            "box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}
      >
        {cloneElement(children as ReactElement, { onClose })}
      </div>
    </div>,
    document.getElementById("modal-anchor")!
  );
};

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export { Modal };
