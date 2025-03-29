import React from "react";
import Fe43D4Ae06O from "./35118014446-fe43d4ae06-o.png";
import { BarsHomeIndicators } from "./BarsHomeIndicators";
import { SystemKeyboards } from "./SystemKeyboards";
import bitmap1 from "./bitmap-1.png";
import deleteButton from "./delete-button.svg";
import dictation from "./dictation.svg";
import emoji from "./emoji.svg";
import shift from "./shift.svg";
import "./style.css";

export const IscteAInicio = () => {
  return (
    <div className="ISCTE-a-inicio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="div">
              <img className="element" alt="Element" src={Fe43D4Ae06O} />

              <div className="rectangle" />

              <div className="rectangle-2" />

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
                  <div className="margaridasa">tiothiago|</div>
                </div>

                <p className="text-wrapper-3">Email / Número de Aluno</p>
              </div>

              <div className="group-copy">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Inserir password</div>
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
            </div>
          </div>

          <div className="system-keyboards-2">
            <div className="overlap-4">
              <BarsHomeIndicators
                className="bars-home-indicators-iphone-light-portrait"
                homeIndicatorClassName="bars-home-indicators-instance"
              />
              <div className="keys">
                <img className="dictation" alt="Dictation" src={dictation} />

                <img className="emoji" alt="Emoji" src={emoji} />

                <div className="return">
                  <div className="label-wrapper">
                    <div className="label">Go</div>
                  </div>
                </div>

                <div className="space">
                  <div className="overlap-5">
                    <div className="label-2">space</div>
                  </div>
                </div>

                <div className="element-2">
                  <div className="overlap-6">
                    <div className="label-3">123</div>
                  </div>
                </div>

                <div className="delete">
                  <div className="overlap-7">
                    <div className="key-light">
                      <div className="overlap-group-2">
                        <div className="label-4">{""}</div>
                      </div>
                    </div>

                    <img
                      className="delete-button"
                      alt="Delete button"
                      src={deleteButton}
                    />
                  </div>
                </div>

                <div className="shift">
                  <div className="overlap-7">
                    <SystemKeyboards
                      className="system-keyboards-iphone-x-light-keys-letter-large"
                      overlapGroupClassName="system-keyboards-instance"
                      symbolClassName="system-keyboards-iphone-x-light-keys-letter-large-instance"
                      text=""
                    />
                    <img className="img" alt="Shift" src={shift} />
                  </div>
                </div>

                <SystemKeyboards
                  className="m"
                  symbolClassName="design-component-instance-node"
                  text="M"
                />
                <SystemKeyboards
                  className="n"
                  symbolClassName="system-keyboards-3"
                  text="N"
                />
                <SystemKeyboards
                  className="b"
                  symbolClassName="system-keyboards-4"
                  text="B"
                />
                <SystemKeyboards
                  className="v"
                  symbolClassName="system-keyboards-3"
                  text="V"
                />
                <SystemKeyboards
                  className="c"
                  symbolClassName="system-keyboards-3"
                  text="C"
                />
                <SystemKeyboards
                  className="x"
                  symbolClassName="system-keyboards-3"
                  text="X"
                />
                <SystemKeyboards
                  className="z"
                  symbolClassName="system-keyboards-4"
                  text="Z"
                />
                <SystemKeyboards
                  className="l"
                  symbolClassName="system-keyboards-5"
                  text="L"
                />
                <SystemKeyboards
                  className="k"
                  symbolClassName="system-keyboards-4"
                  text="K"
                />
                <SystemKeyboards
                  className="j"
                  symbolClassName="system-keyboards-5"
                  text="J"
                />
                <SystemKeyboards
                  className="h"
                  symbolClassName="system-keyboards-3"
                  text="H"
                />
                <SystemKeyboards
                  className="g"
                  symbolClassName="system-keyboards-3"
                  text="G"
                />
                <SystemKeyboards
                  className="f"
                  symbolClassName="system-keyboards-5"
                  text="F"
                />
                <SystemKeyboards
                  className="d"
                  symbolClassName="system-keyboards-3"
                  text="D"
                />
                <SystemKeyboards
                  className="s"
                  symbolClassName="system-keyboards-4"
                  text="S"
                />
                <SystemKeyboards
                  className="a"
                  symbolClassName="system-keyboards-3"
                  text="A"
                />
                <SystemKeyboards
                  className="p"
                  symbolClassName="system-keyboards-4"
                  text="P"
                />
                <SystemKeyboards className="o" text="O" />
                <SystemKeyboards className="i" symbolClassName="i-2" text="I" />
                <SystemKeyboards
                  className="u"
                  symbolClassName="system-keyboards-3"
                  text="U"
                />
                <SystemKeyboards
                  className="y"
                  symbolClassName="system-keyboards-4"
                  text="Y"
                />
                <SystemKeyboards
                  className="t"
                  symbolClassName="system-keyboards-4"
                  text="T"
                />
                <SystemKeyboards
                  className="r"
                  symbolClassName="system-keyboards-4"
                  text="R"
                />
                <SystemKeyboards
                  className="e"
                  symbolClassName="system-keyboards-4"
                  text="E"
                />
                <SystemKeyboards className="w" symbolClassName="w-2" text="W" />
                <SystemKeyboards className="q" text="Q" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
