import "./publicacion.scss";
import { useState } from "react";

export const Publicacion = () => {


  const [post, setPost] = useState([
    {
      img: "./img/public5Perf.jpeg",
      nombre: "Miguel Ángel Durán García",
      descripcion:
        "Programación JavaScript y Desarrollo Web. Reconocido Google Developer Expert, Microsoft MVP y GitHub Star. ⭐",
      hora: "17 horas",
      titulo: `Libros de Programación Gratuitos y en Español
        JavaScript, Python, Go, Java, Kotlin, PHP y más:
        → https://lnkd.in/eyqr2_H9`,
      imgPublicada: "./img/public5.jpeg",
      mg: 158,
      comentario: "26 comentarios",
      compartido: "311 veces compartido",
      liked: false,
      id: 5,
    },
    {
      img: "./img/public6Perf.jpeg",
      nombre: "Brais Moure",
      descripcion: "Freelance full-stack Dev | iOS &amp; Android Engineer | Divulgador sobre programación de Apps",
      hora: "23 horas",
      titulo:
        "Un framework de código abierto para crear UI Web con PYTHON y componentes de ANGULAR.",
      imgPublicada: "./img/public6.jpeg",
      mg: 220,
      comentario: "1 comentarios",
      compartido: "4 veces compartido",
      liked: false,
      id: 6,
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
      mg: 41,
      comentario: "5 comentarios",
      compartido: "1 veces compartido",
      liked: false,
      id: 2,
    },
    {
      img: "./img/public1Perf.jpeg",
      nombre: "Jorge Baumann",
      descripcion: "Software Engineer | Creador de contenido",
      hora: "10 horas",
      titulo: "La confianza en la nube y en Google, ahora queda en duda.",
      imgPublicada: "./img/public1.jpeg",
      mg: 87,
      comentario: "44 comentarios",
      compartido: "12 veces compartido",
      id: 1,
    },
    {
      img: "./img/public3Perf.jpeg",
      nombre: "Codigo Facilito",
      descripcion: "56.200 segudores",
      hora: "21 horas",
      titulo: "Quedan pocos días de la #FeriaDeCursosGratis 🎡",
      imgPublicada: "./img/public3.jpeg",
      mg: 213,
      comentario: "8 comentarios",
      compartido: "1 veces compartido",
      liked: false,
      id: 3,
    },
    {
      img: "./img/public4Perf.jpeg",
      nombre: "freeCodeCamp",
      descripcion: "1.556.200 segudores",
      hora: "19 horas",
      titulo:
        "CSS Flexbox is a powerful tool that can help you create appealing and responsive webpage layouts.",
      imgPublicada: "./img/public4.jpeg",
      mg: 66,
      comentario: "4 comentarios",
      compartido: "33 veces compartido",
      liked: false,
      id: 4,
    },
    {
      img: "./img/public5Perf.jpg",
      nombre: "Abraham John",
      descripcion: "UI/UX Design | Visual design, Prototype, User research | I Help e-commerce",
      hora: "7 horas",
      titulo:
        "Diseñadores de UI/UX, aquí hay tipos de pestañas que deben conocer al diseñar su próximo proyecto de diseño de UI.",
      imgPublicada: "./img/public5.jpg",
      mg: 23,
      comentario: "1 comentarios",
      compartido: "4 veces compartido",
      liked: false,
      id: 7,
    },
  ]);

  const handleLike = (postId) => {
    setPost(
      post.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            mg: post.liked ? post.mg - 1 : post.mg + 1,
            liked: !post.liked,
          };
        }

        return post;
      })
    );
  };

  return (
    <>
      {post.map(
        ({
          img,
          nombre,
          descripcion,
          hora,
          titulo,
          imgPublicada,
          timeLenctura,
          mg,
          comentario,
          compartido,
          id,
          liked,
        }) => (
          <div key={id} className="publicacionContainer">
            <div className="publiTop">
              <img
                src={img}
                alt="img de la foto de perfil de la persona que publico"
                className="imgPubli"
              />
              <div className="infoPersonal">
                <h3 className="name">{nombre}</h3>
                <span className="descripcion">{descripcion}</span>
                <span className="hora">{hora}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
                role="none"
                className="opciones"
              >
                <g transform="rotate(90 8 8)">
                  <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                aria-hidden="true"
                fill="currentColor"
                className="delete"
              >
                <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
              </svg>
            </div>
            <p className="titlePublic">{titulo}</p>
            <div className="imgPublicada">
              <img
                src={imgPublicada}
                alt="img de la publicacion"
                className="imgDeLaPublicacion"
              />
            </div>
            <div className="infoImg">
              <span>{timeLenctura}</span>
            </div>
            <div className="reacciones">
              <div className="detalles">
                <span className="mg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g>
                      <circle cx="8" cy="8" r="7" fill="#378fe9" />
                      <path
                        d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z"
                        fill="#d0e8ff"
                        fillRule="evenodd"
                      />
                      <path
                        d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08"
                        fill="none"
                        stroke="#004182"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  <span className={`numero ${post.liked ? "like" : ""}`}>
                    {mg}
                  </span>
                </span>
                <div className="detallesCom">
                  <span className="spanButtom comentario">{comentario}</span>
                  <span className="spanButtom compartido">{compartido}</span>
                </div>
              </div>
              <div className="abajo">
                <button
                  className={`btnReaccion ${liked ? "likeado" : ""}`}
                  onClick={() => handleLike(id)}
                >
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
                  <span className="textoBtn">Recomendar</span>
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
                  <span className="textoBtn">Comentar</span>
                </button>
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
                  </svg>
                  <span className="textoBtn">Compartir</span>
                </button>
                <button className="btnReaccion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                  </svg>
                  <span className="textoBtn">Enviar</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
