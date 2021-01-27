import "./index.scss";
import cards from "../../../assets/img/Group.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        We care about your entertainment. Copyright © 2019–2021 felix.com
      </p>
      <img className="footer__cards" src={cards} alt="credit-cards" />
    </footer>
  );
}

export default Footer;
