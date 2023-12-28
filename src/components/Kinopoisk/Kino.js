import React from "react";
import { Link } from "react-router-dom";
import style from './Kino.module.css'

const Kino = ({ el }) => {
  return (
    <section className={style.kino}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.box}>
            <div className={style.row}>
              <div className={style.col-4}>
                <Link to={`/kinopoisk/details/${el.filmId}`}>
                  <div className={style.img}>
                    <img src={el.posterUrl} alt="" />
                    <h3>{el ? el.nameRu : el.nameEn}</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kino;
