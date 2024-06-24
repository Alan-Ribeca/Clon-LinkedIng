import { MiCard } from "../izquierda/MiCard";
import { Medio } from "../medio/Medio";
import { Derecha } from "../derecha/Derecha";
import { ClassContext } from "../../context/StateCompo";
import { useContext } from "react";
import "./container.scss";
import "./inputMsj.scss";

export const Container = () => {
  const {
    handleNotifications,
    handleEspandido,
    mensajeEspandido,
    claseMsj,
    handleClase,
    handleAbrirPublic,
    abrirPublic,
  } = useContext(ClassContext);

  return (
    <>
      <section className="containerGrid">
        <MiCard />
        <Medio />
        <Derecha />
        <section
          className={`containerMsj ${mensajeEspandido ? "espandido" : ""}`}
        >
          <div className="mensaje">
            <div className="imgMensaje">
              <img src="./img/avatare2.jpg" alt="img de perfil del usuario" />
              <p className="pMensaje">Mensajes</p>
            </div>
            <div className="logos">
              <ul>
                <li className="logosMsj">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    className="svgMensaje"
                    fill="currentColor"
                  >
                    <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                  </svg>
                </li>
                <li className="logosMsj">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="svgMensaje"
                  >
                    <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                  </svg>
                </li>
                <li className="logosMsj flecha">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="svgMensaje"
                    onClick={handleEspandido}
                  >
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          {mensajeEspandido && (
            <>
              <div className="containerInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="search-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="lupa"
                >
                  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar mensajes"
                  className="input"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="filter-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="menu"
                >
                  <path d="M15 4H6.72a1.98 1.98 0 01-3.44 0H1V2h2.28a1.98 1.98 0 013.44 0H15v2zm0 8H6.72a1.98 1.98 0 00-3.44 0H1v2h2.28a1.98 1.98 0 003.44 0H15v-2zm0-5h-2.28a1.98 1.98 0 00-3.44 0H1v2h8.28a1.98 1.98 0 003.44 0H15V7z"></path>
                </svg>
              </div>
              <div className="p">
                <p
                  className={`prioritarios ${
                    claseMsj === "prioritarios" ? "activa" : ""
                  }`}
                  onClick={() => handleClase("prioritarios")}
                >
                  Prioritarios
                </p>
                <p
                  className={`otros ${claseMsj === "otros" ? "activa" : ""}`}
                  onClick={() => handleClase("otros")}
                >
                  Otros
                </p>
              </div>
              <div className="containerBottom">
                <img src="./img/imgMsj.svg" alt="" />
                <h3 className="pAviso">Aún no hay mensajes</h3>
                <p className="textoMensaje">
                  Comunícate y entabla una conversación para avanzar
                  profesionalmente
                </p>
                <button className="enviarMsj" onClick={handleNotifications}>
                  Enviar un mensaje
                </button>
              </div>
            </>
          )}
        </section>
      </section>
      <section className="liMovil">
        <ul className="containerLiMovil">
          <li className="liNav home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos home"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span className="nombreLogo home">Inicio</span>
          </li>
          <li className="liNav" onClick={handleNotifications}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos red"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span className="nombreLogo" translate="no">
              Mi red
            </span>
          </li>
          <li className="liNav" onClick={handleAbrirPublic}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos red"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
            </svg>
            <span className="nombreLogo">Publicar</span>
          </li>
          <li className="liNav" onClick={handleNotifications}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos notificacion"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span className="nombreLogo">Notificaciones</span>
          </li>
          <li className="liNav" onClick={handleNotifications}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos empleo"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span className="nombreLogo">Empleos</span>
          </li>
        </ul>
      </section>
      {abrirPublic && (
        <section className="publicarMovil">
          <div className="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="cerrarMovil"
              onClick={handleAbrirPublic}
            >
              <path
                d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="imgPerfil">
              <img src="./img/avatare2.jpg" alt="foto de perfil" />
              <p className="elegirLugar">Cualquiera</p>
              <span className="flechita">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="flecha"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="reloj"
            >
              <g>
                <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
              </g>
            </svg>
            <button className="btnPublicar">Publicar</button>
          </div>
          <div className="escribirMsj">
            <div className="containerInput">
              <input
                type="text"
                className="input"
                placeholder="Comparte tus ideas..."
              />
            </div>
          </div>
          <div className="svgAgregar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="svgFoto"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </div>
        </section>
      )}
    </>
  );
};
