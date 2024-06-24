import { useState, useContext } from "react";
import { ClassContext } from "../../context/StateCompo";
import "./publicar.scss";

export const Publicar = () => {
  const { handleAbrirPublic, abrirPublic } = useContext(ClassContext);

  const [ordenar, setOrdenar] = useState();

  const hanldeVisible = () => {
    setOrdenar(!ordenar);
  };

  const [parrafoColor, setParrafoColor] = useState("pPrincipal");

  const handleClasePublic = (tipo) => {
    setParrafoColor(tipo);
  };

  return (
    <article className="containerMid">
      <section className="buscadorContainer">
        <div className="escribir">
          <div className="img">
            <img
              src="./img/avatare2.jpg"
              alt="foto de perfil del usuario"
              className="imgMia"
            />
          </div>
          <input
            type="text"
            placeholder="Crear publicación"
            className="inputEscribir"
            onClick={handleAbrirPublic}
          />
        </div>
        <div className="contenido">
          <ul className="ulcontenido">
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="primerSvg"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>

              <strong>Contenido multimedia</strong>
            </li>
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="segundoSvg"
              >
                <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
              </svg>
              <strong>Evento</strong>
            </li>
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="tercerSvg"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <strong>Escribir artículo</strong>
            </li>
          </ul>
        </div>
      </section>

      {abrirPublic && (
        <div className="oscurecer">
          <section className="abrirPublic">
            <div className="infoPublic">
              <img src="./img/avatare2.jpg" alt="img de perfil" />
              <div className="infoP">
                <h2 className="nombre">Alan Ribeca</h2>
                <span className="ContainerFlecha">
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
                <p className="lugarPublic">Publicar en Cualquiera</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="cerrar"
              onClick={handleAbrirPublic}
            >
              <path
                d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"
                fill="currentColor"
              />
            </svg>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="¿Sobre qué quieres hablar?"
              />
            </div>
            <div className="bottomContainer">
              <svg xmlns="http://www.w3.org/2000/svg" className="svgFeliz">
                <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
              </svg>
              <div className="losSvg">
                <strong className="uno">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                </strong>
                <strong className="dos">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                  </svg>
                </strong>
                <strong className="tres">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                  </svg>
                </strong>
                <strong className="cuatro">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                  </svg>
                </strong>
              </div>
            </div>
            <div className="publicar">
              <button className="btnPublicar">Publicar</button>
              <svg xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                  <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                </g>
              </svg>
            </div>
          </section>
        </div>
      )}

      <div className="lineaSeparadora">
        <hr className="hrSepara" />
        <p className="orden" onClick={hanldeVisible}>
          Ordenar por:{" "}
          <strong>
            Principal{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="flechita"
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </strong>{" "}
        </p>

        {ordenar && (
          <div className="ordenarContainer">
            <p
              className={`pPrincipal ${
                parrafoColor === "pPrincipal" ? "ordenarPubli" : ""
              }`}
              onClick={() => handleClasePublic("pPrincipal")}
            >
              Principal
            </p>
            <p
              className={`recientes ${
                parrafoColor === "recientes" ? "ordenarPubli" : ""
              }`}
              onClick={() => handleClasePublic("recientes")}
            >
              Recientes
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
