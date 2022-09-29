import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Cards({ results, page }) {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status, species } = x;
      return (
        <Link 
        style={{textDecoration: "none"}}
        to={`${page}${id}`}
        
        key={id} className="col-lg-3 col-md-5 col-sm-6 col-12 mb-4 position-relative text-dark">
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${styles.img} img-fluid `} />
            <div className="content ">
              <div className="fs-4 fw-bold mb-2 text-center ">{name}</div>
              <div className=" fs-6 fw-bolder position-absolute  top-0 start-0.25  translate-left badge rounded-end bg-secondary text-white bg-opacity-50">
                {species}
              </div>
              <div className="">
                <div style={{ padding: "10px" }} className="fs-6 pb-0 ">
                  Last known location:
                </div>
                <div className="fs-5 text-center pb-2 ">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger fs-6`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success fs-6`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary fs-6`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "not found ";
  }

  return <>{display} </>;
}

export default Cards;
