import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <h1>{"Ooops..."}</h1>
      <h2>{"404 Not found"}</h2>
      <h3>{"You can try to search later"}</h3>
      <Link to="/" className="back-link">Back</Link>
    </section>
  );
};

export default NotFoundPage;