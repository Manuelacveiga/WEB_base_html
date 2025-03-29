import React from "react";
import Fe43D4Ae06O from "./35118014446-fe43d4ae06-o.png";
import bitmap1 from "./bitmap-1.png";
import image from "./image.svg";
import logoIscteInstitutoUniversitaRioDeLisboa from "./logo-ISCTE-instituto-universita-rio-de-lisboa.png";
import path2 from "./path-2.svg";
import path3 from "./path-3.svg";
import path from "./path.svg";
import shape from "./shape.svg";
import "./style.css";

export const IscteAInicio = () => {
  return (
    <div className="ISCTE-a-inicio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img className="element" alt="Element" src={Fe43D4Ae06O} />

              <div className="rectangle" />

              <div className="div" />

              <img className="bitmap" alt="Bitmap" src={bitmap1} />

              <div className="text-wrapper">Bem-vindo ao ISCTE</div>

              <p className="um-espa-o-para-cresc">
                Um espaço para crescer, inovar e conviver. Agora acessível
                sempre que quiseres.
              </p>
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-2">Login</div>

              <div className="group-2">
                <div className="div-wrapper">
                  <p className="text-wrapper-3">
                    Inserir email ou número de aluno
                  </p>
                </div>

                <p className="text-wrapper-4">Email / Número de Aluno</p>
              </div>

              <div className="group-copy">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Inserir password</div>
                </div>

                <div className="text-wrapper-4">Password</div>
              </div>

              <div className="group-3">
                <div className="overlap-3">
                  <div className="text-wrapper-5">Login</div>
                </div>
              </div>

              <div className="esqueci-me-da-palavr">
                Esqueci-me da palavra-passe
              </div>
            </div>
          </div>

          <img
            className="logo-ISCTE-instituto"
            alt="Logo ISCTE instituto"
            src={logoIscteInstitutoUniversitaRioDeLisboa}
          />

          <div className="logo-ISCTE-instituto-2">
            <img className="path" alt="Path" src={path} />

            <div className="rectangle-2" />

            <img className="img" alt="Path" src={image} />

            <img className="path-2" alt="Path" src={path2} />

            <img className="shape" alt="Shape" src={shape} />

            <div className="rectangle-3" />

            <img className="path-3" alt="Path" src={path3} />
          </div>
        </div>
      </div>
    </div>
  );
};
