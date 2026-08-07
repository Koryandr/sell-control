import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer className="lower">
            <div className="bottom-icons">
                <Link to="/products">Товары</Link>
                <Link to="/sales">Продажи</Link>
                <Link to="/analytics">Аналитика</Link>
            </div>
        </footer>
        </>
    )
}

export default Footer;