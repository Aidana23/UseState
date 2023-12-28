import React, { useEffect, useState } from "react";
import { API_KEY, API_URL_POPULAR } from "../../config";
import Kino from "./Kino";
import style from './Kinopoisk.module.css'


const Kinopoisk = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [pages, setPages] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);


  const getMovies = async (url) => {
    try {
      const request = await fetch(url, {
        headers: {
          "X-API-KEY": API_KEY,
        },
      });
      const response = await request.json();
      console.log(response.films);
      setState(response.films);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getMovies(API_URL_POPULAR);
  }, []);

  const films = state?.map((el) => <Kino key={el.filmId} el={el} />);

  return (
    <section className={style.kinopoisk}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.box}>
            <h2>Kinopoisk</h2>
            <div className="row">{films}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kinopoisk;
