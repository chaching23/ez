import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to admin portal </h1>
      <Link to="customers" className="btn btn-primary">
        All Customers
      </Link>
    </div>
  );
};

export default Home;
