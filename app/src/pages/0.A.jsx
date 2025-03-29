import React from "react";
import Fe43D4Ae06O from "./35118014446-fe43d4ae06-o.png";
import { BlueRight } from "./BlueRight";
import bitmap1 from "./bitmap-1.png";
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

              <div className="text-wrapper">Bem-vindo ao ISCTE</div>

              <p className="um-espa-o-para-cresc">
                Um espaço para crescer, inovar e conviver. Agora acessível
                sempre que quiseres.
              </p>

              <img className="bitmap" alt="Bitmap" src={bitmap1} />
            </div>
          </div>

          <div className="group-copy">
            <div className="overlap-2">
              <div className="text-wrapper-2">Como chegar ao ISCTE</div>

              <BlueRight className="desktop-icons" />
              <div className="text-wrapper-3">Sou um novo aluno</div>
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-2">Quero fazer o login.</div>

              <BlueRight className="blue-right" />
              <div className="text-wrapper-3">Já sou aluno</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
