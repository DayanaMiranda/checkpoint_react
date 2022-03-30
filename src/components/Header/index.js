import "./styles.css";
import logo from "../../assets/logo.png"



export default function Header() {

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView();
    }




    return (
        <header>
            <img src={logo} width={65} alt="logo" />

            <ul className="menu">
                <li key={1} className="item-menu" onClick={() => scrollToComponent("about")}>Sobre</li>
                <li key={2} className="item-menu" onClick={() => scrollToComponent("projects")}>Projetos</li>
                <li key={3} className="item-menu" onClick={() => scrollToComponent("footer")}>Contato</li>

            </ul>
        </header>
    );
}