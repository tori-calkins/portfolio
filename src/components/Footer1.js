import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const Footer1 = () => {
  return (
    <div class="content" id="footerbar">
      <div id="footer">
        <a href="https://www.linkedin.com/in/victoria-calkins-" target="_blank">
          <FaLinkedin id="icons-3" />
        </a>
        <a href="https://github.com/tori-calkins" target="_blank">
          <IoLogoGithub id="icons-4" />
        </a>
        <a href="https://docs.google.com/document/d/1fNNWa324GOWl8CfxzxyMXu4IaLdDclG32TQjGIxsb0w/edit?usp=sharing" target="_blank"> My Resume </a>
      </div>
    </div>
  );
};

export default Footer1;