import "./index.scss";
import logo from '../../../assets/img/F.svg';
import Button from "../Button";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="nav__img" src={logo} alt="logo-felix"/>
                <Button size="large">Sign In</Button>
            </nav>
        </header>
    );
}

export default Header;