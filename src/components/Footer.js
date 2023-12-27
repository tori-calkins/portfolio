import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const Footer = () => {
  return (
    <div class="content" id="footerbar">
      <div id="footer">
        <a href="https://www.linkedin.com/in/victoria-calkins-" target="_blank">
          <FaLinkedin id="icons-3" />
        </a>
        <a href="https://github.com/tori-calkins" target="_blank">
          <IoLogoGithub id="icons-4" />
        </a>
        <a href="/contactmeform">Contact Me</a>
      </div>
    </div>
  );
};

export default Footer;