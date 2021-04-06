import React from "react";

import "./Card.scss";

const Card = ({ children, className, style }) => {
  return (
    <section className={`main-card card ${className}`} style={style}>
      {children}
    </section>
  );
};

export default Card;
