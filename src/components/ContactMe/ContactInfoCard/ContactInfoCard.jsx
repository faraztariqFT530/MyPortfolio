// ContactInfoCard.jsx
import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text, type }) => {
  const handleClick = () => {
    if (type === "whatsapp") {
      window.open(`https://wa.me/${text}`, "_blank");
    } else if (type === "email") {
      window.location.href = `mailto:${text}`;
    } else if (type === "github") {
      window.open(text, "_blank");
    }
  };

  return (
    <div
      className="contact-details-card"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <div className="icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
