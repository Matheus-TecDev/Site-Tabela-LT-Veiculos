import Logo from "../components/Logo_LT.png";
import "./Header.css";

const Header = () => (
    <header className="header-container">
        <img src={Logo} alt="Logo LT" className="header-logo" />
    </header>
);

export default Header;
