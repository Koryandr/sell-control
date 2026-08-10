import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer className="lower">
            <div className="bottom-icons">
                <Link to="/home">Домой</Link> 
                <Link to="/products">Товары</Link>
                <Link to="/sales">Продажи</Link>
                
            </div>
        </footer>
        </>

        //<Link to="/analytics">Аналитика</Link>
    )
}

export default Footer;