import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/mariposa.jpg";

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <>
      <label
        htmlFor="photo"
        className="label secondFieldset__button js__profile-trigger"
      >
        Añadir imagen
      </label>
      <input
        id="photo"
        type="file"
        className="input js-input js__profile-upload-btn"
        ref={myFileField}
        onChange={uploadImage}
      />

      <div
        type="text"
        className="square js__profile-preview"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
