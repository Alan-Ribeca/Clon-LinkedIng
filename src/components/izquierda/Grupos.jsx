import { Svg } from "./Svg";
import "./grupos.scss";

export const Grupos = () => {
  return (
    <section className="cardGrupos">
      <div className="recientes">
        <p className="titleRec">Recientes</p>
        <ul className="ulRecientes">
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Tips Desarrollo Web
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Front End Developers
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              MI PRIMER EMPLEO IT
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Talento IT
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Front End Empleo
            </strong>
          </li>
        </ul>
      </div>
      <div className="grupos">
        <p className="texGrup">Grupos</p>
        <ul className="ulRecientes">
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Front End Developers Argentina
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              MI PRIMER EMPLEO IT
            </strong>
          </li>
          <li className="liRec">
            <strong className="containerSvg">
              <Svg />
              Talento IT
            </strong>
          </li>
        </ul>
        <p className="texMostarMas">
          Mostrar más{" "}
          <strong className="flechaSvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="flechaMas"
            >
              <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
            </svg>
          </strong>
        </p>
      </div>

      <div className="eventos">
        <p className="texEvent">
          Eventos <strong></strong>
        </p>
        <p className="hastags">Hashtags seguidos</p>
      </div>

      <div className="verMass">
        <button className="mas">Ver más</button>
      </div>
    </section>
  );
};
