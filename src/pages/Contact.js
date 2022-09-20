import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },

    out: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>Adresse</h4>
              <p>27 rue Trébois</p>
              <p>92300 Levallois-Perret</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0650559720" className="hover">
                <p
                  style={{ cursor: "pointer " }}
                  className="clipboard"
                  onClick={() => alert("Télephone copié !")}
                >
                  06 50 55 97 20
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="julienpetit1@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer " }}
                  className="clipboard"
                  onClick={() => alert("email copié !")}
                >
                  julienpetit1@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Indé-Codable - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-8"} />
      </motion.div>
    </main>
  );
};

export default Contact;
