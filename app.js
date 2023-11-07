import React from 'react';
import { createRoot } from 'react-dom/client';
import peliculas from './peliculas.json';

function colorMeta(peliculas) {
  if (peliculas.metascore >= 60) {
    return 'green';
  } else if (peliculas.metascore >= 50 && peliculas.metascore < 60) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function App() {
  return (
    <div>
      <div className="titulo-pagina">Cuevana 5</div>
      <ul>
        {peliculas.map((pelicula) => (
          <div key={pelicula}>
            <div className="pelicula-container">
              <div className="peliculas-poster">
                <img src={pelicula.poster} />{' '}
              </div>
              <div className="pelicula-info">
                <strong>
                  <h2>{pelicula.title}</h2>
                </strong>
                <p className="informacion-pelicula">
                  {pelicula.releaseDate} | {pelicula.duration} |{' '}
                  {pelicula.maturity}| {pelicula.genres.join(', ')}
                </p>
                <p>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/021/664/704/small/gold-star-shotting-gold-star-transparent-gold-bokeh-stars-free-free-png.png"
                    alt="imagen de estrella"
                    className="imagen-rating"
                  />{' '}
                  {pelicula.rating}{' '}
                  <span
                    style={{
                      backgroundColor: colorMeta(pelicula),
                      color: 'white',
                    }}
                  >
                    {pelicula.metascore}
                  </span>{' '}
                  Metascore
                </p>
                <p className="actores-info">
                  Director: {pelicula.director} | Actores:{' '}
                  {pelicula.mainActors.join(', ')}
                </p>
                <p className="resumen">{pelicula.plot}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
