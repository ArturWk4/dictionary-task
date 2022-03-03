import React, { useState } from "react";
import {  MDBIcon } from "mdbreact";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/${searchValue}`);
  };

  return (
    <section className="home-page">
      <header className="home-header">
        <h1 className="greet">Welcome to dictionary</h1>
      </header>
      <main>
        <h2 className="home-description">Here you can get information about any word</h2>
        <h2 className="home-description">Just type the word below </h2>
        <form onSubmit={submitSearch} className="inline-form">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search-submit" type="submit">
            <MDBIcon icon="search" />
          </button>
        </form>
      </main>
    </section>
  );
};

export default HomePage;
