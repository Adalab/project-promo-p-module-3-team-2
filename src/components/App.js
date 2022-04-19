import '../styles/App.scss';
import logoAwesome from '../images/awesome.svg';
import logo from '../images/logo_ninfas.png';

function App() {
  return (
    <>
      <header className='header'>
        <a href='index.html' rel='noreferrer'>
          <img
            className='header__logo'
            src={logoAwesome}
            alt='tarjetas molonas'
            title='logotipo awesome'
          />
        </a>
      </header>
      <div className='mainCreate__container'>
        <section className='container__preview'>
          <div className='card__container'>
            <button className='card__reset js-reset' href='#'>
              <i className='far fa-trash-alt'></i> reset
            </button>
            <div className='card js-preview'>
              <div className='card__personalInfo personalInfoBorderPalette1 js-borde'>
                <p className='card__personalInfo--name js-personalName personalInfoNamePalette1'>
                  Nombre Apellido
                </p>
                <p className='card__personalInfo--job js-cardJob'>
                  Front-End developer
                </p>
              </div>
              <div className='card__image js__profile-image'></div>
              <nav className='card__socialInfo'>
                <ul className='card__socialMenu'>
                  <li className='card__rrss'>
                    <a
                      className='card__rrss--item rrssPalette1 js-border1 js-iconPhone'
                      href=''
                      target='_blank'
                      title='phone number'
                      rel='noreferrer'
                    >
                      <i className='icon fas fa-mobile-alt js-icon1'></i>
                    </a>
                  </li>
                  <li className='card__rrss'>
                    <a
                      className='card__rrss--item rrssPalette1 js-border2 js-iconEmail'
                      href=''
                      target='_blank'
                      title='email address'
                    >
                      <i className='icon far fa-envelope js-icon2'></i>
                    </a>
                  </li>
                  <li className='card__rrss'>
                    <a
                      className='card__rrss--item rrssPalette1 js-border3 js-iconLinkedin'
                      href=''
                      target='_blank'
                      title='linkedin'
                    >
                      <i className='icon fab fa-linkedin-in js-icon3'></i>
                    </a>
                  </li>
                  <li className='card__rrss'>
                    <a
                      className='card__rrss--item rrssPalette1 js-border4 js-iconGithub'
                      href=''
                      target='_blank'
                      title='github'
                    >
                      <i className='icon fab fa-github-alt js-icon4'></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <form
          action='/signup'
          method='post'
          className='form js-form'
          id='myform'
        >
          <fieldset className='container-desing'>
            <legend className='legend js-titleDesign' id='design'>
              <h2 className='title-design'>
                <i className='far fa-object-ungroup'></i>Diseña
                <i className='fa-solid fa-angle-up js-angleDesign'></i>
                {/*<i className="fas fa-chevron-up js-angleDesign"></i>--/>*/}
              </h2>
            </legend>
            <section className='container-colors js-firstFieldset'>
              <p className='paragraph'>colores</p>
              <div className='colors'>
                <div className='design-option'>
                  <input
                    className='input js-input1 design-input js_radio'
                    type='radio'
                    id='palette-1'
                    name='palette'
                    value='1'
                  />
                  <label for='palette1'>
                    <ul className='design-list'>
                      <li className='squad1'></li>
                      <li className='squad2'></li>
                      <li className='squad3'></li>
                    </ul>
                  </label>
                </div>
                <div className='design-option'>
                  <input
                    className='input js-input2 design-input js_radio'
                    type='radio'
                    id='palette-2'
                    name='palette'
                    value='2'
                  />
                  <label for='palette2'>
                    <ul className='design-list'>
                      <li className='squad1-1'></li>
                      <li className='squad2-2'></li>
                      <li className='squad3-3'></li>
                    </ul>
                  </label>
                </div>
                <div className='design-option'>
                  <input
                    className='input js-input3 design-input js_radio'
                    type='radio'
                    id='palette-3'
                    name='palette'
                    value='3'
                  />
                  <label for='palette3'>
                    <ul className='design-list'>
                      <li className='squad1-1-1'></li>
                      <li className='squad2-2-2'></li>
                      <li className='squad3-3-3'></li>
                    </ul>
                  </label>
                </div>
                <div className='design-option'>
                  <input
                    className='input js-input4 design-input js_radio'
                    type='radio'
                    id='palette-4'
                    name='palette'
                    value='4'
                  />
                  <label for='palette4'>
                    <ul className='design-list'>
                      <li className='squad1-4'></li>
                      <li className='squad2-4'></li>
                      <li className='squad3-4'></li>
                    </ul>
                  </label>
                </div>
                <div className='design-option'>
                  <input
                    className='input js-input5 design-input js_radio'
                    type='radio'
                    id='palette-5'
                    name='palette'
                    value='5'
                  />
                  <label for='palette5'>
                    <ul className='design-list'>
                      <li className='squad1-5'></li>
                      <li className='squad2-5'></li>
                      <li className='squad3-5'></li>
                    </ul>
                  </label>
                </div>
                <div className='design-option'>
                  <input
                    className='input js-input6 design-input js_radio'
                    type='radio'
                    id='palette-6'
                    name='palette'
                    value='6'
                  />
                  <label for='palette6'>
                    <ul className='design-list'>
                      <li className='squad1-6'></li>
                      <li className='squad2-6'></li>
                      <li className='squad3-6'></li>
                    </ul>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>

          <fieldset className='secondFieldset'>
            <h3 className='secondFieldset__legend js-titleFill' id='fill'>
              <i className='fa-solid fa-keyboard icon'></i>Rellena
              <i className='fa-solid fa-angle-up js-angleFill rotate'></i>
            </h3>
            <div className='js-secondFieldset collapsed'>
              <label for='completeName' className='secondFieldset__label'>
                Nombre completo
              </label>
              <input
                id='completeName'
                type='text'
                name='Complete Name'
                placeholder='Ej:Sally Jill'
                className='secondFieldset__input js-name js-input'
                required
                value=''
              />
              <label for='marketStall' className='secondFieldset__label'>
                Puesto
              </label>
              <input
                id='marketStall'
                type='text'
                name='Market Stall'
                placeholder='Ej:front-end unicorn'
                className='secondFieldset__input js-job js-input'
                required
                value=''
              />
              <label for='addimage' className='secondFieldset__label'>
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
                  for='photo'
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
              <label for='addemail' className='secondFieldset__label'>
                Email
              </label>
              <input
                id='addemail'
                type='email'
                name='add email'
                placeholder='Ej: sally-hill@gmail.com'
                className='secondFieldset__input js-addemail js-input'
                required
              />
              <label for='addphone' className='secondFieldset__label'>
                Teléfono
              </label>
              <input
                id='addphone'
                type='text'
                name='add phone'
                placeholder='Ej: 555-55-55-55'
                className='secondFieldset__input js-addPhone js-input'
                required
              />
              <label for='addLinkedin' className='secondFieldset__label'>
                Linkedin
              </label>
              <input
                id='addLinkedin'
                type='text'
                name='add Linkedin'
                placeholder='Ej:linkedin.com/in/sally.hill'
                className='secondFieldset__input js-addLinkedin js-input'
                required
              />
              <label for='addGithub' className='secondFieldset__label'>
                Github
              </label>
              <input
                id='addGithub'
                type='text'
                name='add Github'
                placeholder='Ej: @sally-hill'
                className='secondFieldset__input js-addGithub js-input'
                required
              />
            </div>
          </fieldset>

          <fieldset className='thirdFieldset'>
            <h3 className='thirdFieldset__legend js-titleShare' id='share'>
              <i className='fa-solid fa-share-nodes'></i>Comparte
              <i className='fa-solid fa-angle-up js-angleShare rotate'></i>
            </h3>
            <div className='js-thirdFieldset collapsed'>
              <button
                className='thirdFieldset__button js-thirdFieldset__button js_create_button'
                title='Crear tarjeta'
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
                rel='noreferrer'
              ></a>

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

      <footer className='footer'>
        <small className='footer__text'>Awesome profile-cards @2018</small>
        <a href='http://adalab.es' target='_blank' rel='noreferrer'>
          <img
            className='footer__logo'
            src={logo}
            alt='Logo Ninfas'
            title='Logo Equipo Ninfas'
          />
        </a>
      </footer>
    </>
  );
}

export default App;
