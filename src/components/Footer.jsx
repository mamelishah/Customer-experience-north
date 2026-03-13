import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-content">
        <section className="footer-column newsletter-box">
          <p className="top-text">Nyhedsbrev</p>
          <h2 className="big-text">
            Tilmeld dig og få besked, når vi får nyt strik på lager
          </h2>
          <button className="sign-button" type="button">
            Abonnere nu
          </button>
        </section>

        <section className="footer-column">
          <h3 className="column-title">Kontakt os</h3>

          <div className="footer-info-box">
            <div className="footer-small-title">Telefon</div>
            <a className="footer-item-link" href="tel:27243004">
              27 24 30 04
            </a>
          </div>

          <div className="footer-info-box">
            <div className="footer-small-title">Email</div>
            <a className="footer-item-link" href="mailto:support@north.com">
              support@north.com
            </a>
          </div>

          <div className="footer-info-box">
            <div className="footer-small-title">Adresse</div>
            <p className="footer-item-text">Søndervang 30</p>
            <p className="footer-item-text">8260, Viby J</p>
          </div>
        </section>

        <section className="footer-column">
          <h3 className="column-title">Om os</h3>

          <div className="footer-info-box">
            <div className="footer-small-title">Virksomhed</div>
            <a className="footer-item-link" href="#">
              Sælg dit strik
            </a>
            <a className="footer-item-link" href="#">
              Virksomhedsinfo
            </a>
          </div>

          <div className="footer-info-box">
            <div className="footer-small-title">Ansvar</div>
            <a className="footer-item-link" href="#">
              Bæredygtighed
            </a>
          </div>
        </section>

        <section className="footer-column">
          <h3 className="column-title">Hjælp</h3>

          <div className="footer-info-box">
            <div className="footer-small-title">Kundeservice</div>
            <a className="footer-item-link" href="#">
              Returnering
            </a>
            <a className="footer-item-link" href="#">
              Tracking page
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
