import React from "react";
import { HeaderDefault } from "./HeaderDefault";
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
      <div className="div">
        <HeaderDefault
          bsHorNegRgb="image.png"
          className="header-default-instance"
          groupClassName="design-component-instance-node"
        />
        <div className="navigation-menu">
          <div className="overlap">
            <div className="rectangle-copy" />

            <div className="overlap-wrapper">
              <div className="overlap-group">
                <img
                  className="combined-shape"
                  alt="Combined shape"
                  src={combinedShape}
                />

                <div className="group-copy">
                  <div className="image-wrapper">
                    <img className="image" alt="Image" src={image} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pagamentos">PAGAMENTOS</div>

            <div className="group-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="path" alt="Path" src={path} />

                  <img className="img" alt="Path" src={path2} />

                  <div className="oval" />

                  <img className="line" alt="Line" src={line2} />

                  <img className="line-copy" alt="Line copy" src={line2Copy} />
                </div>
              </div>
            </div>

            <div className="curso">CURSO</div>

            <div className="div-wrapper">
              <div className="group-2">
                <div className="overlap-group-3">
                  <div className="rectangle" />

                  <div className="rectangle-copy-2" />

                  <div className="rectangle-copy-3" />

                  <div className="rectangle-copy-4" />

                  <div className="rectangle-copy-5" />

                  <div className="rectangle-copy-6" />

                  <div className="rectangle-2" />
                </div>
              </div>
            </div>

            <div className="calend-rio">CALENDÁRIO</div>

            <div className="group-3">
              <div className="div-2">
                <div className="overlap-group-4">
                  <img className="path-2" alt="Path" src={path3} />

                  <img className="path-3" alt="Path" src={path4} />

                  <div className="rectangle-3" />
                </div>
              </div>
            </div>

            <div className="home">HOME</div>

            <div className="rectangle-4" />

            <div className="group-copy-wrapper">
              <div className="div-2">
                <div className="rectangle-5" />

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
  );
};