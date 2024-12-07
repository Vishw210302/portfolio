import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialmediaLinks = () => {
  return (
    <div className="flex items-center mt-1 space-x-3 content-center">
      <a
        href="https://www.instagram.com/prajapati_vishw/"
        className="text-2xl text-white transition-all hover:scale-125 shadow-xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/vishw-prajapati-916354253/"
        className="text-2xl text-white transition-all hover:scale-125 shadow-xl"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialmediaLinks;
