import React, { useState } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Section from "./components/Section";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCuboOpen, setModalCuboOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function openModalCubo() {
    setModalCuboOpen(true);
  }

  function closeModalCubo() {
    setModalCuboOpen(false);
  }

  return (
    <div className="App">
      <div>
        <Navbar />
        {/*
        <button onClick={openModal}>Abrir</button>
        <button onClick={openModalCubo}>Abrir Cubo</button>

        <Modal title="hola" open={modalOpen} onClose={closeModal} />

        <Modal
          title="Quiero ser Cuboxero"
          open={modalCuboOpen}
          onClose={closeModalCubo}
        >
          <ContactForm />
        </Modal>
        */}

        <Section />
        <Section02 />
        <Section03 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
