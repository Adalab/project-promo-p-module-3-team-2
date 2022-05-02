import '../styles/App.scss';
import logoAwesome from '../images/awesome.svg';
import logo from '../images/logo_ninfas.png';
import { useState } from 'react';
import dataApi from '../services/Api';
import localStorage from '../services/localStorage';
import defaultAvatar from '../images/mariposa.jpg';
import Cards from './Cards';

//Aquí calculamos el estado inicial DataCard, si se ha guardado previamente en LS se usa ese valor. Sino se crea uno por defecto.
function getInitialDataCardState() {
  const dataCardFromLocalStorage = localStorage.get('dataCard');
  return (
    dataCardFromLocalStorage || {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    }
  );
}

function getInitialAvatarState() {
  const avatarFromLocalStorage = localStorage.get('avatar');
  return avatarFromLocalStorage || defaultAvatar;
}

//Al crear estado dataCard le pasamos valor por defecto que calcula getInitialDataCardState.
//He quitado la img de dataCard.
//Al crear estado avatar le pasamos valor por defecto que calcula getInitialAvatarState.(cada uno tiene su state y cada uno se guarda en LS con una clave distinta)

function App() {
  const [dataCard, setDataCard] = useState(getInitialDataCardState());
  const [avatar, setAvatar] = useState(getInitialAvatarState());

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
    localStorage.set('avatar', avatar);
  };

  const handleInputChange = (inputValue, inputChanged) => {
    const newDataCard = {
      ...dataCard,
      [inputChanged]: inputValue,
    };
    setDataCard(newDataCard);
    localStorage.set('dataCard', newDataCard);
  };

  //Cuando se haga reset, también se borrará LS.
  const handleReset = (ev) => {
    ev.preventDefault();
    localStorage.clear();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
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
