import React from "react";
import { useHistory } from "react-router-dom";

// ask for name (text input) and star sign (selector)
// store in local storage
// buton that history push to star sign stat for the day

const UserInfo = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    formData: {
      name: "",
      starsign: "" //selector
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state.formData);
    const json = JSON.stringify(state.formData);
    localStorage.setItem("userInfo", json);
    history.push("/today");
  };

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    };
    setState({ formData });
  };

  //React.useEffect(() => {
  //  const json = JSON.stringify(formData);
  //  localStorage.setItem("formData", json);
  //}, [formData]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
            <div className="field">
              <label className="label">Name:</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  value={state.formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                Starsign:
                <select
                  value={state.formData.starsign}
                  onChange={handleChange}
                  className="input"
                  name="starsign"
                >
                  <option value="" disabled selected hidden>
                    Select your starsign
                  </option>
                  <option value="aries">Aries</option>
                  <option value="taurus">Taurus</option>
                  <option value="gemini">Gemini</option>
                  <option value="cancer">Cancer</option>
                  <option value="leo">Leo</option>
                  <option value="virgo">Virgo</option>
                  <option value="libra">Libra</option>
                  <option value="scorpio">Scorpio</option>
                  <option value="sagittarius">Sagittarius</option>
                  <option value="capricorn">Capricorn</option>
                  <option value="aquarius">Aquarius</option>
                  <option value="pisces">Pisces</option>
                </select>
              </label>
            </div>
            <div className="field">
              <input
                className="button is-fullwidth is-link is-rounded"
                type="submit"
                value="Discover your personalised horoscope"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
