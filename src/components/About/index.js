import "./styles.css";

import foto from '../../assets/foto.png';


import { FaHtml5, FaCss3, FaReact  } from "react-icons/fa";
import { SiJavascript, SiMysql, SiSelenium } from "react-icons/si";





export default function About() {
    return (
        <main id="about">
            <div className="container">
                <div className="texto">
                    <h1>Oi, eu sou a <span className="redColor">Dayana</span></h1>
                    <h2>Estudante de Desenvolvimento full stack .</h2>
                    <p>
                        Dando os primeiros passos no mundo da programação.<br />
                        Apaixonada por tecnologia. <br />
                        Sempre trabalhei na área de TI, primeiramente em laboratório, com montagem e manutenção de computadores; posteriormente com suporte técnico para uma empresa de logística de linhas ferroviárias no estado de Minas Gerais. <br />
                        Atualmente estudado programação na Digital House Brasil.
                    </p>
                    <div className="icone_skills">
                        <FaHtml5 className="lg" size={35} />
                        <FaCss3 className="lg" size={35} />
                        <FaReact className="lg" size={35}/>
                        <SiJavascript className="lg" size={35} />
                        <SiMysql className="lg" size={35}/>
                        <SiSelenium className="lg" size={35}/>
                    </div>

                </div>
                <div className="foto">
                    <img src={foto} width="230" alt="logo" />
                </div>
            </div>
        </main>
    )
}