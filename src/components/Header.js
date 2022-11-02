import React from "react";
import { ReactRouter, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="home">Home</Link>
      <Link to="about">About Us</Link>
      <Link to="contact">Contact Us</Link>
    </nav>
  );
};
