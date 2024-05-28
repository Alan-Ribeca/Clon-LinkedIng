import { Grupos } from "./Grupos";
import "./micard.scss";

export const MiCard = () => {
  return (
    <article className="contenedorGeneral">
      <section className="miCard">
        <div className="containerImg">
          <div className="imgPortada">
            <img
              src="./img/1listo.jpeg"
              alt="foto portafa"
              className="portadaImg"
            />
          </div>
          <div className="imgPersonal">
            <div className="imgPersonal">
              <img src="./img/avatare.jpg" alt="" />
            </div>
            <h2 className="nombre">Alan Ribeca</h2>
            <p className="habilidades">
              Desarrollardor web -- Front End | HTML5 | CSS | JavaScript |
              React...
            </p>
          </div>
        </div>
        <hr className="hrCard" />
        <div className="containerSpan">
          <span className="visualizaciones">
            Visualizaciones del perfil <span className="derecha">500</span>
          </span>
          <span className="visualizaciones">
            Impresiones de la publicación <span className="derecha">+999</span>
          </span>
        </div>
        <div className="premiumCard">
          <p className="textoPremium">
            Alcanza tus objetivos profesionales con Premium
          </p>
          <span className="probarPremium">
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
            <span className="probarPremiumTexto">Probar Premium por 0 AR$</span>
          </span>
        </div>
        <div className="guardadosContainer">
          <span className="guardados">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="svgGuardado"
              width="16"
              height="16"
            >
              <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
            </svg>
            <span className="guardadoTexto">Elementos guardados</span>
          </span>
        </div>
      </section>
      <Grupos />
    </article>
  );
};
