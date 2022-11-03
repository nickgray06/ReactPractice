import React from "react";
import { ReactRouter, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="login">Login</Link>
      <Link to="about">About Us</Link>
      <Link to="contact">Contact Us</Link>
    </nav>
  );
};
