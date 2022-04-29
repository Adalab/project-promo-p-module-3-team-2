import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import Design from './Design';
import { useState } from 'react';

function Cards(props) {
  const [collapseDesign, setCollapseDesign] = useState(true);
  const [collapseFill, setCollapseFill] = useState(true);
  const [collapseShare, setCollapseShare] = useState(true);

  const handleClickDesign = () => {
    setCollapseDesign(!collapseDesign);
  };
  const handleClickFill = () => {
    setCollapseFill(!collapseFill);
  };
  const handleClickShare = () => {
    setCollapseShare(!collapseShare);
  };
  return (
    <>
      <Header src={props.logoAwesome} />
      <div className='mainCreate__container'>
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
        />

        <form
          action='/signup'
          method='post'
          className='form js-form'
          id='myform'
        >
          <Design
            dataCard={props.dataCard}
            collapseDesign={collapseDesign}
            handleClickDesign={handleClickDesign}
            handleInputChange={props.handleInputChange}
          />
          Fill Share
        </form>
      </div>
      <Footer src={props.logo} />
    </>
  );
}
export default Cards;
