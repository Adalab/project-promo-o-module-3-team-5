import logo from '../images/adufflabeers-logo2.png';
function Main(props) {
  return (
    <main class="mainLanding">
      <div class="mainLanding__imageContainer">
        <img class="mainLanding__imageContainer--image" src={logo} alt="" />
      </div>
      <section class="mainLanding__text">
        <h1 class="mainLanding__text--title">Crea tu tarjeta de visita</h1>
        <p class="mainLanding__text--paragraph">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>

      <section>
        <ul class="mainLanding__section">
          <li class="mainLanding__section--list">
            <i class="mainLanding__section--icon fal fa-object-ungroup"></i>
            <p>diseña</p>
          </li>
          <li class="mainLanding__section--list">
            <i class="mainLanding__section--icon far fa-keyboard"></i>
            <p>rellena</p>
          </li>
          <li class="mainLanding__section--list">
            <i class="mainLanding__section--icon fas fa-share-alt"></i>
            <p>comparte</p>
          </li>
        </ul>
      </section>

      <button class="mainLanding__button">
        <a
          class="mainLanding__button--link"
          href="./card.html"
          title="Go to card"
        >
          comenzar
        </a>
      </button>
    </main>
  );
}

export default Main;