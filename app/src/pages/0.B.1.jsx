import React from "react";
import { Gray } from "./Gray";
import { IconNextGray } from "./IconNextGray";
import bsHorNegRgb1 from "./bs-hor-neg-rgb-1.png";
import group6 from "./group-6.svg";
import group8 from "./group-8.svg";
import group10 from "./group-10.svg";
import group13 from "./group-13.svg";
import group from "./group.svg";
import "./style.css";

export const IscteBInicio = () => {
  return (
    <div className="ISCTE-b-inicio">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div-wrapper">
                  <div className="text-wrapper">09:30</div>
                </div>

                <p className="mudan-a-de-sala">
                  <span className="span">Mudança de Sala:</span>

                  <span className="text-wrapper-2"> P1.02</span>
                </p>

                <div className="text-wrapper-3">Programação para Internet</div>

                <Gray className="desktop-icons" color="#0D28C2" />
              </div>
            </div>

            <div className="group-copy">
              <div className="overlap-group">
                <Gray className="desktop-icons" color="#0D28C2" />
                <div className="div-wrapper">
                  <div className="text-wrapper">14:00</div>
                </div>

                <div className="text-wrapper-4">Sala P3.03</div>

                <div className="text-wrapper-3">Bases de Dados</div>
              </div>
            </div>

            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="div-wrapper">
                  <div className="text-wrapper">10:00</div>
                </div>

                <div className="text-wrapper-4">Sala E48</div>

                <div className="text-wrapper-3">Estratégia Empresarial</div>

                <IconNextGray className="icon-next-gray" />
              </div>
            </div>

            <div className="group-2">
              <div className="hor-rio">HORÁRIO</div>

              <div className="group-3">
                <div className="text-wrapper-5">Ver tudo</div>

                <Gray className="blue-right" color="#696E77" />
              </div>
            </div>
          </div>

          <div className="navigation-menu">
            <div className="overlap-2">
              <div className="rectangle-copy" />

              <img className="img" alt="Group" src={group10} />

              <div className="pagamentos">PAGAMENTOS</div>

              <img className="group-4" alt="Group" src={group13} />

              <div className="curso">CURSO</div>

              <img className="group-5" alt="Group" src={group6} />

              <div className="calend-rio">CALENDÁRIO</div>

              <div className="rectangle" />

              <img className="group-6" alt="Group" src={group} />

              <div className="home">HOME</div>

              <div className="rectangle-2" />

              <img className="group-7" alt="Group" src={group8} />

              <div className="menu">MENU</div>
            </div>
          </div>
        </div>

        <div className="overlap-3">
          <div className="group-wrapper">
            <div className="group-8">
              <div className="oval-copy-wrapper">
                <div className="oval-copy" />
              </div>

              <img
                className="bs-hor-neg-rgb"
                alt="Bs hor neg rgb"
                src={bsHorNegRgb1}
              />
            </div>
          </div>

          <div className="element-setembro">15 Março 2025</div>

          <div className="text-wrapper-6">O teu dia</div>
        </div>

        <div className="overlap-4">
          <p className="na-p-gina-inicial-po">
            Na página inicial podes ver as tuas próximas aulas, notificações,
            próximos eventos e a ementas disponíveis.
          </p>

          <p className="vai-at-ao-mapa-e-co">
            Vai até ao mapa e começa a explorar o campus!
          </p>

          <div className="text-wrapper-7">Bem-vindo ao ISCTE</div>

          <div className="group-9">
            <div className="text-wrapper-8">Começar</div>

            <Gray className="gray-instance" color="#0D28C2" />
          </div>
        </div>
      </div>
    </div>
  );
};