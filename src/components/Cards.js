import Header from "./Header";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
import Design from "./Design";
import { useState } from "react";
import Fill from "./Fill";
import Share from "./Share";

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
      <div className="mainCreate__container">
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
          avatar={props.avatar}
        />

        <form
          action="/signup"
          method="post"
          className="form js-form"
          id="myform"
        >
          <Design
            dataCard={props.dataCard}
            collapseDesign={collapseDesign}
            handleClickDesign={handleClickDesign}
            handleInputChange={props.handleInputChange}
          />
          <Fill
            dataCard={props.dataCard}
            collapseFill={collapseFill}
            handleClickFill={handleClickFill}
            handleInputChange={props.handleInputChange}
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          />
          <Share
            dataCard={props.dataCard}
            collapseShare={collapseShare}
            handleClickShare={handleClickShare}
            handleClickCreateCard={props.handleClickCreateCard}
            apiData={props.apiData}
          />
        </form>
      </div>
      <Footer src={props.logo} />
    </>
  );
}
export default Cards;
