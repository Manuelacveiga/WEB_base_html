import React from "react";
import { Ajuda } from "./Ajuda";
import { AlimentaO } from "./AlimentaO";
import { Close } from "./Close";
import { Desporto } from "./Desporto";
import { Diretorio } from "./Diretorio";
import { Eventos } from "./Eventos";
import { Gray } from "./Gray";
import { IconNextGray } from "./IconNextGray";
import { InformaEs } from "./InformaEs";
import { Mapa } from "./Mapa";
import { Noticias } from "./Noticias";
import biblioteca from "./biblioteca.svg";
import bsHorNegRgb1 from "./bs-hor-neg-rgb-1.png";
import combinedShape from "./combined-shape.svg";
import image from "./image.svg";
import line2Copy from "./line-2-copy.svg";
import line2 from "./line-2.svg";
import path2 from "./path-2.svg";
import path3 from "./path-3.svg";
import path4 from "./path-4.svg";
import path from "./path.svg";
import "./style.css";

export const IscteBInicio = () => {
  return (
    <div className="ISCTE-b-inicio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="div">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="div-wrapper">
                    <div className="text-wrapper">08:00</div>
                  </div>

                  <p className="mudan-a-de-sala">
                    <span className="span">Mudança de Sala:</span>

                    <span className="text-wrapper-2"> 0E2</span>
                  </p>

                  <div className="text-wrapper-3">
                    Contabilidade Financeira II
                  </div>

                  <Gray className="desktop-icons" color="#0D28C2" />
                </div>
              </div>

              <div className="group-copy">
                <div className="overlap-group">
                  <Gray className="desktop-icons" color="#0D28C2" />
                  <div className="div-wrapper">
                    <div className="text-wrapper">09:00</div>
                  </div>

                  <div className="text-wrapper-4">Sala B024</div>

                  <div className="text-wrapper-3">Estatística II</div>
                </div>
              </div>

              <div className="group-copy-2">
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

            <div className="overlap-2">
              <div className="group-4">
                <div className="group-wrapper">
                  <div className="oval-copy-wrapper">
                    <div className="oval-copy" />
                  </div>
                </div>

                <img
                  className="bs-hor-neg-rgb"
                  alt="Bs hor neg rgb"
                  src={bsHorNegRgb1}
                />
              </div>

              <div className="text-wrapper-6">15 Setembro 2021</div>

              <div className="text-wrapper-7">O teu dia</div>

              <div className="group-5">
                <div className="overlap-3">
                  <div className="month-copy">A84</div>

                  <Gray className="gray-instance" color="#0D28C2" />
                  <div className="text-wrapper-8">Balcão 01</div>

                  <div className="ltima-senha">ÚLTIMA SENHA</div>
                </div>
              </div>
            </div>

            <div className="overlap-4">
              <p className="na-p-gina-inicial-po">
                Na página inicial podes ver as tuas próximas aulas,
                notificações, próximos eventos e a ementas disponíveis.
              </p>

              <p className="vai-at-ao-mapa-e-co">
                Vai até ao mapa e começa a explorar o campus!
              </p>

              <div className="text-wrapper-9">Bem-vindo ao ISCTE</div>

              <div className="group-6">
                <div className="text-wrapper-10">Começar</div>

                <Gray className="blue-right-instance" color="#0D28C2" />
              </div>
            </div>
          </div>

          <div className="rectangle" />

          <div className="group-7">
            <div className="overlap-5">
              <div className="rectangle-2" />

              <div className="group-8">
                <div className="group-9">
                  <div className="month-copy-2">Menu</div>

                  <Close className="close-instance" />
                </div>
              </div>

              <div className="group-10">
                <Eventos className="icon-instance-node" />
                <div className="text-wrapper-11">Eventos</div>
              </div>

              <div className="group-copy-3">
                <img
                  className="icon-instance-node"
                  alt="Icon menu biblioteca"
                  src={biblioteca}
                />

                <div className="text-wrapper-11">Biblioteca</div>
              </div>

              <div className="group-copy-4">
                <AlimentaO className="icon-instance-node" />
                <div className="text-wrapper-11">Alimentação</div>
              </div>

              <div className="group-copy-5">
                <Noticias className="icon-instance-node" />
                <div className="text-wrapper-11">Notícias</div>
              </div>

              <div className="group-copy-6">
                <Diretorio className="icon-instance-node" />
                <div className="text-wrapper-11">Diretório</div>
              </div>

              <div className="group-copy-7">
                <Mapa className="icon-instance-node" />
                <div className="text-wrapper-11">Mapa</div>
              </div>

              <div className="group-copy-8">
                <Ajuda className="icon-instance-node" />
                <div className="text-wrapper-11">Ajuda</div>
              </div>

              <div className="group-copy-9">
                <Desporto className="icon-instance-node" />
                <div className="text-wrapper-11">Desporto</div>
              </div>

              <div className="group-copy-10">
                <InformaEs className="icon-instance-node" />
                <div className="text-wrapper-11">Informações Úteis</div>
              </div>

              <div className="navigation-menu">
                <div className="overlap-6">
                  <div className="rectangle-copy" />

                  <div className="group-11">
                    <div className="overlap-7">
                      <img
                        className="combined-shape"
                        alt="Combined shape"
                        src={combinedShape}
                      />

                      <div className="group-copy-11">
                        <div className="image-wrapper">
                          <img className="image" alt="Image" src={image} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pagamentos">PAGAMENTOS</div>

                  <div className="group-12">
                    <div className="group-13">
                      <div className="overlap-group-2">
                        <img className="path" alt="Path" src={path} />

                        <img className="img" alt="Path" src={path2} />

                        <div className="oval" />

                        <img className="line" alt="Line" src={line2} />

                        <img
                          className="line-copy"
                          alt="Line copy"
                          src={line2Copy}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="curso">CURSO</div>

                  <div className="group-14">
                    <div className="group-15">
                      <div className="overlap-group-3">
                        <div className="rectangle-3" />

                        <div className="rectangle-copy-2" />

                        <div className="rectangle-copy-3" />

                        <div className="rectangle-copy-4" />

                        <div className="rectangle-copy-5" />

                        <div className="rectangle-copy-6" />

                        <div className="rectangle-4" />
                      </div>
                    </div>
                  </div>

                  <div className="calend-rio">CALENDÁRIO</div>

                  <div className="group-16">
                    <div className="div-2">
                      <div className="overlap-group-4">
                        <img className="path-2" alt="Path" src={path3} />

                        <img className="path-3" alt="Path" src={path4} />

                        <div className="rectangle-5" />
                      </div>
                    </div>
                  </div>

                  <div className="home">HOME</div>

                  <div className="rectangle-6" />

                  <div className="group-copy-wrapper">
                    <div className="div-2">
                      <div className="rectangle-7" />

                      <div className="rectangle-copy-7" />

                      <div className="rectangle-copy-8" />

                      <div className="rectangle-copy-9" />

                      <div className="rectangle-copy-10" />

                      <div className="rectangle-copy-11" />

                      <div className="rectangle-copy-12" />

                      <div className="rectangle-copy-13" />

                      <div className="rectangle-copy-14" />
                    </div>
                  </div>

                  <div className="menu">MENU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};