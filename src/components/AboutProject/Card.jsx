import React from "react";
import "./AboutProject.css";

export default function Card({ title, content }) {
  return (
    <div className="overview-card">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
