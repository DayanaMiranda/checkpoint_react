import "./styles.css";
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import { SiGmail } from "react-icons/si";



export default function Footer() {
    return (
        <footer id="footer">
            <ul className="contatos">
                <li key={1} className="social">
                    <a href="https://www.linkedin.com/in/dayana-m-092a32224/">
                        <FaLinkedin size={20} />
                    </a>
                </li>
                <li key={2} className="social">
                    <a href="https://github.com/DayanaMiranda">
                        <GoMarkGithub size={20} />
                    </a>
                </li>
                <li key={3} className="social">
                    <a href="malito:dayanamrd@gmail.com">
                        <SiGmail size={20} />
                    </a>
                </li>
            </ul>
            <p>
                <span>Aluna da Digital House - Certified Tech Developer</span>
            </p>


        </footer>
    )
}
