import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={s.landing}>
      <Link to="/home">
          <h3>Las mejores recetas en un solo lugar</h3>
        <button className={s.btnLanding}>Ingresar</button>
      </Link>
    </div>
  );
}


