import "./micard.scss";

export const MiCard = () => {
  return (
    <section className="miCard">
      <div className="containerImg">
        <div className="imgPortada"></div>
        <div className="imgPersonal"></div>
      </div>
      <h2 className="nombre">Alan Ribeca</h2>
      <p className="habilidades">
        Desarrollardor web -- Front End | HTML5 | CSS | JavaScript | React...
      </p>
      <hr className="hrCard" />
      <div className="containerSpan">
        <span className="visualizaciones">Visualizaciones del perfil <span>500</span> </span>
        <span className="visualizaciones">Impresiones de la publicación <span>+999</span> </span>
      </div>
      <hr className="hrCard"/>
      <p className="textoPremium">Alcanza tus objetivos profesionales con Premium</p>
      
    </section>
  );
};
