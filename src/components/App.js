import '../styles/App.scss';
import logoAwesome from '../images/awesome.svg';
import logo from '../images/logo_ninfas.png';
import { useState } from 'react';
import dataApi from '../services/Api';

import Cards from './Cards';

function App() {
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    photo: '../images/mariposa.jpg',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });

  const [apiData, setApiData] = useState({});

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      console.log(dataCard);
      console.log(info);
      setApiData(info);
      console.log(apiData);
    });
  };

  const handleInputChange = (inputValue, inputChanged) => {
    // const inputValue = ev.target.value;
    // const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      image: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  return (
    <Cards
      dataCard={dataCard}
      logoAwesome={logoAwesome}
      logo={logo}
      handleReset={handleReset}
      handleInputChange={handleInputChange}
    />
  );
}

export default App;
