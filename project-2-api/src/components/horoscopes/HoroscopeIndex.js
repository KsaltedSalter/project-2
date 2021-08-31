import React from "react";
import { useHistory } from "react-router-dom";

const HoroscopeIndex = () => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push("/reading");
    const json = JSON.stringify(e.target.value);
    localStorage.setItem("value", json);
  };

  // if we have time
  return (
    <>
      <div>
        <input
          className="button"
          type="submit"
          value="aries"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="gemini"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="capricorn"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="taurus"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="leo"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="libra"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="scorpio"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="cancer"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="virgo"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="aquarius"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="sagittarius"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          className="button"
          type="submit"
          value="pisces"
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default HoroscopeIndex;
