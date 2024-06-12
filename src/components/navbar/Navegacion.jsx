import "./navegacion.scss";
import "./modoOscuro.scss";
import { ClassContext } from "../../context/StateCompo";
import { useContext, useState } from "react";

export const Navegacion = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  const { toggleClass, active } = useContext(ClassContext);

  return (
    <>
      <ul className="ulNav">
        <li className="liNav home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="logos home"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
          </svg>
          <span className="nombreLogo inicio">Inicio</span>
        </li>
        <li className="liNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="logos red"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
          <span className="nombreLogo">Mi red</span>
        </li>
        <li className="liNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="logos empleo"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
          <span className="nombreLogo">Empleos</span>
        </li>
        <li className="liNav">
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
          <span className="nombreLogo">Mensajes</span>
        </li>
        <li className="liNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="logos notificacion"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>
          <span className="nombreLogo">Notificaciones</span>
        </li>
        <li className="liNav yo" onClick={handleClick}>
          <img
            src="./img/avatare2.jpg"
            alt="foto de avatar predeterminada"
            className="imgAvatar"
          />
          <div className="divAvatar">
            <span className="nombreLogo">Yo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              fill="currentColor"
              className="flechaAvatar"
              viewBox="-1 6 16 1"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </li>
        <li className="liNav negocio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="logos svgNegocio"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
          </svg>
          <div className="divNegocio">
            <span className="nombreLogo">Para negocios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              fill="currentColor"
              className="flechaAvatar"
              viewBox="-1 6 16 1"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </li>
        <li className="premium">Obten Premium durante un mes, gratis</li>
        {isVisible && (
          <section className="divVisible">
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
                        className={`toggle-circle left ${
                          active ? "active" : ""
                        }`}
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
      </ul>
    </>
  );
};
