import styled from "styled-components";

import { Modal } from "../component";

export const AppModal = ({
  isOpen = false,
  title = "Welcome back",
  children,
  registration = false,
  handleDismiss,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      handleDismiss={handleDismiss}
      contentStyles={{ width: "50%" }}
    >
      <div style={{ display: "flex", gap: "32px" }}>
        <div id="placeholder-img" style={{ flex: 1 }}>
          {" "}
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="login form"
            className="img-fluid"
            style={{
              borderRadius: "2rem 0 0 2rem",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <article
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            id="logo"
            style={{
              display: "inline-block",
              width: "185px",
              marginTop: "-32px",
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{ width: "100%", height: "100%" }}
              alt="logo"
            />
          </div>
          <h2 style={{ marginTop: 0 }}>{title}</h2>
          {children}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "100%",
              marginTop: "32px",
              lineHeight: 1,
            }}
          >
            {!registration && (
              <>
                <Link href="#">Forgot password?</Link>
                <span style={{ display: "block" }}>
                  Don't have an account? <Link href="#">Register here</Link>
                </span>
              </>
            )}
            <Link href="#">Terms of use privacy policy</Link>
          </div>
        </article>
      </div>
    </Modal>
  );
};

const Link = styled.a`
  --anchor-color: rgb(24, 115, 204);
  text-decoration: none;
  color: var(--anchor-color);

  &:hover {
    --anchor-color: rgb(52, 155, 255);
  }
`;

export default AppModal;
