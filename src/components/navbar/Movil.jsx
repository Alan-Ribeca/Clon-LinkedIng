import "./movil.scss";
import { useState, useContext } from "react";
import { ClassContext } from "../../context/StateCompo";

export const Movil = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { toggleClass, active } = useContext(ClassContext);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div className="containerMovil">
        <img
          src="./img/avatare2.jpg"
          alt="foto de avatar predeterminada"
          className="imgAvatar"
          onClick={handleClick}
        />
        <div className="buscadorCelu">
          <input type="text" placeholder="Buscar" className="inputBuscador" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="BuscadorM"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="logos mensaje"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
      </div>
      {isVisible && (
        <section className="divVisible movil">
          <div className="personal">
            <img
              src="./img/avatare2.jpg"
              alt="img de perfil"
              className="imgPersonal"
            />
            <div className="info">
              <h3 className="nombre">Alan Ribeca</h3>
              <p className="habilidades">
                Desarrollardor web -- Front End | HTML5 | CSS | JavaScript |
                React...
              </p>
            </div>
          </div>
          <button className="btnPerfil">Ver perfil</button>
          <ul className="listaVisible">
            <p className="title">Cuenta</p>
            <p className="probarPremium">
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
              </span>
              Prueba un mes de premium por 0 AR$
            </p>
            <li className="liVisi">Ajustes y privacidad</li>
            <li className="liVisi">Ayuda</li>
            <li className="liVisi">Idioma</li>
            <li className="liVisi btn">
              <span>Modo oscuro</span>
              <div
                className={`toggle-container ${active ? "toggled" : ""}`}
                onClick={toggleClass}
              >
                <input
                  type="checkbox"
                  className="toggle-input"
                  checked={active}
                  readOnly
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 292 142"
                  className={`toggle ${active ? "active" : ""}`}
                >
                  <path
                    d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
                    className="toggle-background"
                  />
                  <rect
                    rx="6"
                    height="64"
                    width="12"
                    y="39"
                    x="64"
                    className="toggle-icon on"
                  />
                  <path
                    d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"
                    fillRule="evenodd"
                    className="toggle-icon off"
                  />
                  <g filter="url(#goo)">
                    <rect
                      fill="#fff"
                      rx="29"
                      height="58"
                      width="116"
                      y="42"
                      x="13"
                      className="toggle-circle-center"
                    />
                    <rect
                      fill="#fff"
                      rx="58"
                      height="114"
                      width="114"
                      y="14"
                      x="14"
                      className={`toggle-circle left ${active ? "active" : ""}`}
                    />
                    <rect
                      fill="#fff"
                      rx="58"
                      height="114"
                      width="114"
                      y="14"
                      x="164"
                      className={`toggle-circle right ${
                        active ? "active" : ""
                      }`}
                    />
                  </g>
                  <filter id="goo">
                    <feGaussianBlur
                      stdDeviation="10"
                      result="blur"
                      in="SourceGraphic"
                    />
                    <feColorMatrix
                      result="goo"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      mode="matrix"
                      in="blur"
                    />
                  </filter>
                </svg>
              </div>
            </li>
            <p className="title gestion">Gestionar</p>
            <li className="liVisi">Publicaciones y actividad</li>
            <li className="liVisi">Cuenta de anuncios de empleo</li>
            <li className="liVisi">Cerrar sesion</li>
          </ul>
        </section>
      )}
    </>
  );
};
