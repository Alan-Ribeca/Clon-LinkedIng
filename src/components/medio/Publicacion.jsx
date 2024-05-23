import "./publicacion.scss";

export const Publicacion = () => {
  const publicaciones = [
    {
      img: "./img/proyecFamily.png1",
      nombre: "Jorge Bumann",
      descripcion: "Software Engineer | Creador de contenido",
      hora: "10 horas",
      titulo: "La confianza en la nube y en Google, ahora queda en duda.",
      imgPublicada: "./img/proyecFamily.png1",
      id: 1,
    },
    {
      img: "./img/EducacionIT.jpg",
      nombre: "EducacionIT",
      descripcion: "163.661 segudores",
      hora: "5 días",
      titulo: `Aprovecha esta oportunidad para conocer los mejores tips de armado de CV y despejar todas tus dudas, junto a Camila Pernas, experta y Career Advisor en EducacionIT. 😎
      Inscríbete gratis ingresando al siguiente link: https://lnkd.in/dSYZngvS
      ¡Te esperamos! 🙌"`,
      imgPublicada: "./img/educationItImg.jpg",
      id: 2,
    },
    {
      img: "./img/proyecFamily.png1",
      nombre: "Codigo Facilito",
      descripcion: "56.200 segudores",
      hora: "10 horas",
      titulo: "Quedan pocos días de la #FeriaDeCursosGratis 🎡",
      imgPublicada: "./img/proyecFamily.png1",

      id: 3,
    },
    {
      img: "./img/proyecFamily.png1",
      nombre: "freeCodeCamp",
      descripcion: "1.556.200 segudores",
      hora: "19 horas",
      titulo:
        "CSS Flexbox is a powerful tool that can help you create appealing and responsive webpage layouts.",
      imgPublicada: "./img/proyecFamily.png1",

      id: 4,
    },
  ];
  return (
    <>
      {publicaciones.map(
        ({
          img,
          nombre,
          descripcion,
          hora,
          titulo,
          imgPublicada,
          timeLenctura,
          id,
        }) => (
          <div key={id} className="publicacionContainer">
            <div className="publiTop">
              <img
                src={img}
                alt="img de la foto de perfil de la persona que publico"
              />
              <div className="infoPersonal">
                <h3 className="Name">{nombre}</h3>
                <spanp className="descripcion">{descripcion}</spanp>
                <span className="hora">{hora}</span>
              </div>
            </div>
            <p className="titlePublic">{titulo}</p>
            <div className="imgPublicada">
              <img src={imgPublicada} alt="img de la publicacion" />
            </div>
            <div className="infoImg">
              <span>{timeLenctura}</span>
            </div>
            <div className="reacciones">
              <div className="detalles">
                <span className="mg">1</span>
                <span className="comentario">2 comentarios</span>
                <span className="compartido">4 veces compartido</span>
              </div>
              <hr />
              <div className="abajo">
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="thumbs-up-outline-medium"
                    aria-hidden="true"
                    role="none"
                    data-supported-dps="24x24"
                    fill="currentColor"
                  >
                    <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                  </svg>
                  Recomendar
                </button>
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="none"
                    fill="currentColor"
                  >
                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                  </svg>
                  Comentar
                </button>
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
                  </svg>
                  Compartir
                </button>
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
