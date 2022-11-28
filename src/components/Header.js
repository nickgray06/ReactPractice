import React from "react";
import { ReactRouter, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="about">About Us</Link>
      <Link to="contact">Contact Us</Link>
      <Link to="sample">Sample</Link>
      <Link to="defect-tracker">Defect Tracker</Link>
      <Link to="employees">Employees</Link>
      <Link to="productdetails">Product Details</Link>
    </nav>
  );
};
