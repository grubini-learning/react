import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

/*
  NOTE: This is NOT a very robust modal implementation.
  Please use something like Reach UI! This is a quick and
  dirty implementation to teach the animation concept.
*/
const Modal = ({
  title,
  isOpen,
  handleDismiss,
  children,
  contentStyles,
  ...delegated
}) => {
  // Close modal on "Escape"
  useEffect(() => {
    function handleKeydown(ev) {
      if (ev.key === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const { backdropStyles, modalStyles, closeButtonStyles } =
    getTransitionStyles(isOpen);

  return createPortal(
    <ModalWrapper
      {...delegated}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <ModalBackdrop
        onClick={handleDismiss}
        style={{
          opacity: isOpen ? 0.75 : 0,
          ...backdropStyles,
        }}
      />
      <ModalContent
        style={{
          transform: isOpen ? "translateY(0vh)" : "translateY(100vh)",
          ...modalStyles,
          ...contentStyles,
        }}
      >
        <ButtonWrapper>
          <CloseButton
            onClick={handleDismiss}
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(25%)",
              ...closeButtonStyles,
            }}
          >
            Close
          </CloseButton>
        </ButtonWrapper>
        {title && <Title>{title}</Title>}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("portal-root")
  );
};

function getTransitionStyles(isOpen) {
  return {
    backdropStyles: {
      transition: "opacity",
      transitionDuration: isOpen ? "1000ms" : "500ms",
      transitionDelay: isOpen ? "0ms" : "100ms",
    },
    modalStyles: {
      transition: "transform",
      transitionDuration: isOpen ? "400ms" : "250ms",
      transitionDelay: isOpen ? "250ms" : "0ms",
      transitionTimingFunction: isOpen ? "ease-out" : "ease-in",
    },
    closeButtonStyles: {
      transition: "opacity, transform",
      transitionDuration: "250ms",
      transitionDelay: isOpen ? "600ms" : "0ms",
    },
  };
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*
    Don't allow the slid-down modal to
    introduce a scrollbar.
  */
  overflow: hidden;
`;

const ModalBackdrop = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: max-content;
  margin: auto;
  background: white;
  padding: 24px;
  border-radius: 8px;
  pointer-events: auto;
`;

const ModalBody = styled.div`
  overflow: auto;
  max-height: max-content;
  min-height: fit-content;
  height: 100%;
  padding: 12px;
`;

const Title = styled.h1`
  /* font-size: 2rem; */
  margin-bottom: 24px;
  padding-left: 12px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
`;

const CloseButton = styled.button`
  display: grid;
  place-content: center;
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
  color: white;
`;

export default Modal;
