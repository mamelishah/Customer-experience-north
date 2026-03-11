import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__column footer__column--newsletter">
          <p className="footer__eyebrow">Nyhedsbrev</p>
          <h2 className="footer__heading">
            Tilmeld dig og få besked, når vi får nyt strik på lager
          </h2>

          <button className="footer__button" type="button">
            SIGN UP
          </button>
        </section>

        <section className="footer__column">
          <h3 className="footer__title">Kontakt os</h3>

          <div className="footer__group">
            <p className="footer__subtitle">Telefon</p>
            <a className="footer__link" href="tel:27243004">
              27 24 30 04
            </a>
          </div>

          <div className="footer__group">
            <p className="footer__subtitle">Email</p>
            <a className="footer__link" href="mailto:support@north.com">
              support@north.com
            </a>
          </div>

          <div className="footer__group">
            <p className="footer__subtitle">Adresse</p>
            <p className="footer__text">Søndervang 30</p>
            <p className="footer__text">8260, Viby J</p>
          </div>
        </section>

        <section className="footer__column">
          <h3 className="footer__title">Om os</h3>

          <div className="footer__group">
            <p className="footer__subtitle">Virksomhed</p>
            <a className="footer__link" href="#">
              Sælg dit strik
            </a>
            <a className="footer__link" href="#">
              Virksomhedsinfo
            </a>
          </div>

          <div className="footer__group">
            <p className="footer__subtitle">Ansvar</p>
            <a className="footer__link" href="#">
              Bæredygtighed
            </a>
          </div>
        </section>

        <section className="footer__column">
          <h3 className="footer__title">Hjælp</h3>

          <div className="footer__group">
            <p className="footer__subtitle">Kundeservice</p>
            <a className="footer__link" href="#">
              Returnering
            </a>
            <a className="footer__link" href="#">
              Tracking page
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
