import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div>
      <form       className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Serarch for Chareter"
          type="text"
          className={`${styles.input} `}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className={`${styles.btn} fs-5 btn btn-outline-primary `}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
