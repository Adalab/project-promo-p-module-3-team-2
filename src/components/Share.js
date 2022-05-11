function Share(props) {
  return (
    <>
      <fieldset className='thirdFieldset'>
        <h3
          onClick={props.handleClickShare}
          className='thirdFieldset__legend js-titleShare'
          id='share'
        >
          <i className='fa-solid fa-share-nodes'></i>Comparte
          <i
            className={`fa-solid fa-angle-up ${
              props.collapseShare ? 'rotate' : ''
            } js-angleShare`}
          ></i>
        </h3>
        <div
          className={`${
            props.collapseShare ? 'collapsed' : ''
          } js-thirdFieldset`}
        >
          <button
            className='thirdFieldset__button js-thirdFieldset__button js_create_button'
            title='Crear tarjeta'
            onClick={props.handleClickCreateCard}
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
            {props.apiData.cardURL || 'url'}
          </a>

          <button
            className='fourFieldset__button js-twitterButton'
            title='Compartir en twitter'
          >
            <i className='fa-brands fa-twitter'></i>Compartir en twitter
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default Share;
