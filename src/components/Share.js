<fieldset className='thirdFieldset'>
  <h3
    onClick={handleClickShare}
    className='thirdFieldset__legend js-titleShare'
    id='share'
  >
    <i className='fa-solid fa-share-nodes'></i>Comparte
    <i className='fa-solid fa-angle-up js-angleShare rotate'></i>
  </h3>
  <div className={`${collapseShare ? 'collapsed' : ''} js-thirdFieldset`}>
    <button
      className='thirdFieldset__button js-thirdFieldset__button js_create_button'
      title='Crear tarjeta'
      onClick={handleClickCreateCard}
    >
      <i className='fa-regular fa-address-card'></i>Crear tarjeta
    </button>
    <h3 className='fourFieldset__title js-errorCard'></h3>
  </div>
</fieldset>;
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
</fieldset>;
