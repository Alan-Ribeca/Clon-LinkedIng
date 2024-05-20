/* eslint-disable no-unused-vars */
import { Publicar } from './Publicar'
import './medio.scss'

export const Medio = () => {
  const publicaciones = [
    {
      img: './img/proyecFamily.png1',
      nombre: 'Jorge Bumann',
      descripcion: 'Software Engineer | Creador de contenido',
      hora: '10 horas',
      titulo: 'La confianza en la nube y en Google, ahora queda en duda.',
      imgPublicada: './img/proyecFamily.png1',
      pImg: `Google accidentally deleted a $125 billion pension fund's account`,
      timeLenctura: '2 min de lectura',
    }
  ]
  return (
    <Publicar />
  )
}
