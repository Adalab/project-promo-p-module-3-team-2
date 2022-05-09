import '../styles/layout/landing/_main.scss';
import logo from '../images/logo_ninfas.png';
import logoAwesome from '../images/awesome.svg';
import iconDesign from '../images/object-ungroup-solid.svg';
import iconKeyboard from '../images/keyboard-solid.svg';
import iconShare from '../images/share-nodes-solid.svg';
import '../styles/core/_variables.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='main__container'>
        <img className='main__logo' src={logoAwesome} alt='Logo' title='logo' />
        <h1 className='main__title'>Crea tu tarjeta de visita</h1>
        <h2 className='main__subtitle'>
          Crea mejores contactos profesionales de forma fácil y cómoda
        </h2>

        <div className='main__rectangle'>
          <article className='main__article'>
            <img
              className='main__article-image'
              src={iconDesign}
              alt='icon design'
              title='icon design'
            />
            <small className='main__article-text'>Diseña</small>
          </article>
          <article className='main__article'>
            <img
              className='main__article-image'
              src={iconKeyboard}
              alt='icon keyboard'
              title='icon keyboard'
            />
            <small className='main__article-text'>Rellena</small>
          </article>
          <article className='main__article'>
            <img
              className='main__article-image'
              src={iconShare}
              alt='icon share'
              title='icon share'
            />
            <small className='main__article-text'>Comparte</small>
          </article>
        </div>
        <nav className='main__link'>
          <a
            className='main__link-cta'
            href='./createcard.html'
            rel='noreferrer'
          >
            <Link to='/cards' className='main__button'>
              Comenzar
            </Link>
          </a>
        </nav>
      </main>
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
