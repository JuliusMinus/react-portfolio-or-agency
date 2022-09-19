import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i>
              <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" />
            </i>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/julien-petit-a4162b17/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
            </i>
          </li>
        </a>
        <a
          href="https://github.com/JuliusMinus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i>
              <FontAwesomeIcon icon="fa-brands fa-github-alt" size="2x" />
            </i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
