import React from "react";
import { useHistory } from "react-router-dom";
import aries from "../../img/aries.png";
import taurus from "../../img/taurus.png";
import gemini from "../../img/gemini.png";
import cancer from "../../img/cancer.png";
import leo from "../../img/leo.png";
import virgo from "../../img/virgo.png";
import libra from "../../img/libra.png";
import scorpio from "../../img/scorpio.png";
import sagittarius from "../../img/sagittarius.png";
import capricorn from "../../img/capricorn.png";
import aquarius from "../../img/aquarius.png";
import pisces from "../../img/pisces.png";

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
      <section className="hero is-fullheight-with-navbar is-light">
        <div className="columns mt-4">
          <div className="column is-quarter">
            <div className="is-third has-text-centered mt-4">
              <img className="has-text-centered" src={aries} alt="aries logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="aries"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={gemini} alt="gemini logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="gemini"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={capricorn} alt="capricorn logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="capricorn"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className="column is-quarter">
            <div className="is-third has-text-centered mt-4">
              <img src={taurus} alt="taurus logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="taurus"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={leo} alt="leo logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="leo"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={libra} alt="libra logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="libra"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className="column is-quarter">
            <div className="is-third has-text-centered mt-4">
              <img src={scorpio} alt="scorpio logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="scorpio"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={cancer} alt="cancer logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="cancer"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={virgo} alt="virgo logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="virgo"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className="column is-quarter">
            <div className="is-third has-text-centered mt-4">
              <img src={aquarius} alt="aquarius logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="aquarius"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={sagittarius} alt="sagittarius logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="sagittarius"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="is-third has-text-centered mt-4">
              <img src={pisces} alt="pisces logo" />
              <div>
                <input
                  className="button is-link"
                  type="submit"
                  value="pisces"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default HoroscopeIndex;
