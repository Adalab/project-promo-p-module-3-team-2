import '../styles/App.scss';
import logoAwesome from '../images/awesome.svg';
import logo from '../images/logo_ninfas.png';
import { useState } from 'react';
import dataApi from '../services/Api';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import Design from './Design';
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
  const [collapseDesign, setCollapseDesign] = useState(true);
  const [collapseFill, setCollapseFill] = useState(true);
  const [collapseShare, setCollapseShare] = useState(true);

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      console.log(dataCard);
      console.log(info);
      setApiData(info);
      console.log(apiData);
    });
  };

  const handleClickDesign = () => {
    setCollapseDesign(!collapseDesign);
  };
  const handleClickFill = () => {
    setCollapseFill(!collapseFill);
  };
  const handleClickShare = () => {
    setCollapseShare(!collapseShare);
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
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

  return <Cards />;
}

export default App;
