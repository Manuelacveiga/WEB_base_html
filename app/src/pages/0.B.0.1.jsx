import React from "react";
import Fe43D4Ae06O from "./35118014446-fe43d4ae06-o.png";
import bitmap1 from "./bitmap-1.png";
import image from "./image.svg";
import path2 from "./path-2.svg";
import path3 from "./path-3.svg";
import path4 from "./path-4.svg";
import path5 from "./path-5.svg";
import path6 from "./path-6.svg";
import path7 from "./path-7.svg";
import path from "./path.svg";
import shape2 from "./shape-2.svg";
import shape from "./shape.svg";
import "./style.css";

export const IscteBInicio = () => {
  return (
    <div className="ISCTE-b-inicio">
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
              <div className="rectangle-2" />

              <div className="text-wrapper-2">Login</div>

              <div className="group-2">
                <div className="div-wrapper">
                  <div className="margaridasantos-isct">tiothiago@iscte.pt</div>
                </div>

                <p className="text-wrapper-3">Email / Número de Aluno</p>
              </div>

              <div className="group-copy">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">**********</div>
                </div>

                <div className="text-wrapper-3">Password</div>
              </div>

              <div className="group-3">
                <div className="overlap-3">
                  <div className="text-wrapper-5">Login</div>
                </div>
              </div>

              <div className="esqueci-me-da-palavr">
                Esqueci-me da palavra-passe
              </div>

              <div className="logo-ISCTE-instituto">
                <div className="overlap-4">
                  <img className="path" alt="Path" src={path} />

                  <img className="shape" alt="Shape" src={shape} />
                </div>

                <div className="rectangle-3" />

                <img className="img" alt="Path" src={image} />

                <img className="path-2" alt="Path" src={path2} />

                <div className="rectangle-4" />

                <img className="path-3" alt="Path" src={path3} />
              </div>

              <div className="logo-ISCTE-instituto-2">
                <img className="path-4" alt="Path" src={path4} />

                <div className="rectangle-3" />

                <img className="path-5" alt="Path" src={path5} />

                <img className="path-6" alt="Path" src={path6} />

                <img className="shape-2" alt="Shape" src={shape2} />

                <div className="rectangle-4" />

                <img className="path-7" alt="Path" src={path7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};