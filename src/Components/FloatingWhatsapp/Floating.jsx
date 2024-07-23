import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Floating = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+91 7892650335"
      accountName="Thirty40"
      statusMessage="Online"
      notification="true"
      allowClickAway
      notificationSound
      style={{ zIndex: "100000" }}
    />
  );
};

export default Floating;
