import "../styles/App.scss";
import logoAwesome from "../images/awesome.svg";
import logo from "../images/logo_ninfas.png";
import { useState } from "react";
import dataApi from "../services/Api";
import defaultAvatar from "../images/mariposa.jpg";

import Cards from "./Cards";

function App() {
  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    photo: "../images/mariposa.jpg",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  const [avatar, setAvatar] = useState("");

  const [apiData, setApiData] = useState({});

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      console.log(info);
      setApiData(info);
      console.log(apiData);
    });
  };
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleInputChange = (inputValue, inputChanged) => {
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      image: "../images/mariposa.jpg",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
    setAvatar(defaultAvatar);
  };

  return (
    <Cards
      dataCard={dataCard}
      logoAwesome={logoAwesome}
      logo={logo}
      handleReset={handleReset}
      handleInputChange={handleInputChange}
      handleClickCreateCard={handleClickCreateCard}
      apiData={apiData}
      avatar={avatar}
      updateAvatar={updateAvatar}
    />
  );
}

export default App;
