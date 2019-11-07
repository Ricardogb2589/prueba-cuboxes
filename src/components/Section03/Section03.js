import React from "react";
import "./Section03.scss";

import image from "./image.png";

function Section03() {
  return (
    <div className="container">
      <div className="admin-botton">
        <button type="submit" class="btn btn-primary">
          Quiero aplicar para ser un Cuboxer
        </button>
      </div>
      <div className="content-section03">
        <div className="content-image">
          <img src={image} />
        </div>
        <div className="content-text">
          <h3>Invierte tu tiempo en cosas más importantes</h3>
          <p>
            Administra todas tus suscripciones desde un solo lugar y paga solo
            un envío por todas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section03;
