function Cards() {
  return (
    <>
      <Header src={logoAwesome} />
      <div className='mainCreate__container'>
        <CardPreview dataCard={dataCard} handleReset={handleReset} />

        <form
          action='/signup'
          method='post'
          className='form js-form'
          id='myform'
        >
          <Design dataCard={dataCard} collapseDesign={collapseDesign} />

          <fieldset className='secondFieldset'>
            <h3
              onClick={handleClickFill}
              className='secondFieldset__legend js-titleFill'
              id='fill'
            >
              <i className='fa-solid fa-keyboard icon'></i>Rellena
              <i className='fa-solid fa-angle-up js-angleFill rotate'></i>
            </h3>
            <div
              className={`${collapseFill ? 'collapsed' : ''} js-secondFieldset`}
            >
              <label htmlFor='completeName' className='secondFieldset__label'>
                Nombre Apellido
              </label>
              <input
                id='completeName'
                type='text'
                name='name'
                placeholder='Ej:Sally Jill'
                className='secondFieldset__input js-name js-input'
                required
                value={dataCard.name}
                onChange={handleInput}
              />
              <label htmlFor='marketStall' className='secondFieldset__label'>
                Puesto
              </label>
              <input
                id='marketStall'
                type='text'
                name='job'
                placeholder='Ej:front-end unicorn'
                className='secondFieldset__input js-job js-input'
                required
                value={dataCard.job}
                onChange={handleInput}
              />
              <label htmlFor='addimage' className='secondFieldset__label'>
                Imagen de perfil
              </label>
              <div className='secondFieldset__buttoncontainer'>
                {/*--<button
              id="addimage"
              type="submit"
              value="Añadir imagen"
              className="secondFieldset__button js-secondFieldset__button js__profile-upload-btn"
              required
            >
              Añadir imagen
  </button>*/}
                <label
                  htmlFor='photo'
                  className='label secondFieldset__button js__profile-trigger'
                >
                  Añadir imagen
                </label>
                <input
                  id='photo'
                  type='file'
                  className='input js-input js__profile-upload-btn'
                />

                <div type='text' className='square js__profile-preview'></div>
              </div>
              <label htmlFor='addemail' className='secondFieldset__label'>
                Email
              </label>
              <input
                id='addemail'
                type='email'
                name='email'
                placeholder='Ej: sally-hill@gmail.com'
                className='secondFieldset__input js-addemail js-input'
                required
                value={dataCard.email}
                onChange={handleInput}
              />
              <label htmlFor='addphone' className='secondFieldset__label'>
                Teléfono
              </label>
              <input
                id='addphone'
                type='text'
                name='phone'
                placeholder='Ej: 555-55-55-55'
                className='secondFieldset__input js-addPhone js-input'
                required
                value={dataCard.phone}
                onChange={handleInput}
              />
              <label htmlFor='addLinkedin' className='secondFieldset__label'>
                Linkedin
              </label>
              <input
                id='addLinkedin'
                type='text'
                name='linkedin'
                placeholder='Ej:sally.hill'
                className='secondFieldset__input js-addLinkedin js-input'
                required
                value={dataCard.linkedin}
                onChange={handleInput}
              />
              <label htmlFor='addGithub' className='secondFieldset__label'>
                Github
              </label>
              <input
                id='addGithub'
                type='text'
                name='github'
                placeholder='Ej: @sally-hill'
                className='secondFieldset__input js-addGithub js-input'
                required
                value={dataCard.github}
                onChange={handleInput}
              />
            </div>
          </fieldset>

          <fieldset className='thirdFieldset'>
            <h3
              onClick={handleClickShare}
              className='thirdFieldset__legend js-titleShare'
              id='share'
            >
              <i className='fa-solid fa-share-nodes'></i>Comparte
              <i className='fa-solid fa-angle-up js-angleShare rotate'></i>
            </h3>
            <div
              className={`${collapseShare ? 'collapsed' : ''} js-thirdFieldset`}
            >
              <button
                className='thirdFieldset__button js-thirdFieldset__button js_create_button'
                title='Crear tarjeta'
                onClick={handleClickCreateCard}
              >
                <i className='fa-regular fa-address-card'></i>Crear tarjeta
              </button>
              <h3 className='fourFieldset__title js-errorCard'></h3>
            </div>
          </fieldset>
          <fieldset className='fourFieldset'>
            <div className='js-fourFieldset collapsed'>
              <a
                href=''
                title='Haz click para ir a la tarjeta creada'
                className='fourFieldset__link js_url_card'
              >
                {apiData.URL}
              </a>

              <button
                className='fourFieldset__button js-twitterButton'
                title='Compartir en twitter'
              >
                <i className='fa-brands fa-twitter'></i>Compartir en twitter
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <Footer src={logo} />
    </>
  );
}
export default Cards;
