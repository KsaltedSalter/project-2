import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // wellcome info here
  // button to history push to UserInfo
  return (
    <div className="is-centered is-fullheight-with-navbar is-light">
      <h1 className="title is-1 has-text-centered has-text-black">
        Daily Horoscopes
      </h1>
      <p className="has-text-centered has-text-black">
        find out your daily reading by clicking below!
      </p>

      <hr />

      <div className="has-text-centered">
        <Link to={"/user-info"} className="button is-link">
          <p>check it out!</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
