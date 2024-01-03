import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div
    style={{
      background: "#000",
      color: "#fff",
      paddingInline: "8px",
      paddingBlock: "1rem",
      borderRadius: "8px",
    }}
  >
    <p>A visitor with email address {email} said</p>
    <br />
    <br />
    <div style={{
      background: "#232323",
      color: "#F8F8F8",
      padding: "16px"
    }}>
    {message}
    </div>
  </div>
);
