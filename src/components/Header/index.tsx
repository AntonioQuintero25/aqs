import "./style.css";
import { itensDoMenu } from "../../db/db";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import imgBrasil from "../../assets/img/brasil.webp";
import imgEua from "../../assets/img/estados-unidos-da-america.webp";
import imgEspanha from "../../assets/img/espanha.webp";

export default function Header(){
    const [mostrarMenuMobile, setMostrarMenuMobile] = useState<boolean>(false);
    const abrirEFecharMenuMobile = () => {
        if(mostrarMenuMobile){
            document.querySelector("#root")!.classList.remove("overflow-hidden");
            document.querySelector("body")!.classList.remove("overflow-hidden");
        }else{
            document.querySelector("#root")!.classList.add("overflow-hidden");
            document.querySelector("body")!.classList.add("overflow-hidden");
        }
        setMostrarMenuMobile(!mostrarMenuMobile);
    };

    const { t, i18n } = useTranslation();

    const mudarIdioma = (idioma: string) => {
        i18n.changeLanguage(idioma);
    };

    return(
        <>
        <div className={`vw-100 vh-100 position-fixed z-3 menu-full-screen ${mostrarMenuMobile ? 'd-flex': 'd-none'}`}>
            <div className="w-25 h-100 bg-sombra-header"></div>
            <div className="w-75 h-100 bg-white">
                <div className="d-flex justify-content-end p-4">
                    <i className="fa-solid fa-xmark fa-2xl cursor-click" onClick={abrirEFecharMenuMobile}></i>
                </div>
                <div className="d-flex justify-content-start p-3 my-5">
                    <ul className="d-flex flex-column list-unstyled">
                        {itensDoMenu.map((link) => {
                           return <li className="my-3">
                                    <a href={link.link} className="text-decoration-none fs-5 fontTimes p-2" onClick={abrirEFecharMenuMobile}>{t(link.texto)}</a>
                                  </li>
                        })}
                    </ul>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                <img width="40px" height="30px" className="m-1" src={imgBrasil} onClick={() => {
                    mudarIdioma('pt');
                    abrirEFecharMenuMobile();
                }} alt="Mudar idioma para português"/>
                <img width="40px" height="30px" className="m-1" src={imgEua} onClick={() => {
                    mudarIdioma('en');
                    abrirEFecharMenuMobile();
                }} alt="Mudar idioma para inglês"/>
                <img width="40px" height="30px" className="m-1" src={imgEspanha} onClick={() => {
                    mudarIdioma('es');
                    abrirEFecharMenuMobile();
                }} alt="Mudar idioma para espanhol"/>
            </div>
            </div>
    </div>
    <header className="container-fluid bg-white menu z-2 shadow">
        <div className="row flex-nowrap justify-content-evenly m-0 py-1 d-none d-md-flex">
            <div className="col-md-auto col-lg-2 d-flex flex-column justify-content-center align-items-center">
                <a href="#inicio" className="text-decoration-none text-center text-black" aria-label="Link para o inicio da página">
                    <h1 className="border-bottom m-0">AQ</h1>
                    <small className="fontTimes">Silva</small>
                </a>
            </div>
            <div className="col-md-auto d-flex flex-fill justify-content-center">
                <nav className="w-100 d-flex justify-content-center align-items-center">
                    <ul className="w-100 d-flex justify-content-around list-unstyled m-0">
                        {itensDoMenu.map((link) => {
                           return <li>
                                    <a href={link.link} className="text-decoration-none fs-5 fontTimes p-2" aria-label={`Link para ${link.texto}`}>{t(link.texto)}</a>
                                  </li>
                        })}
                    </ul>
                </nav>
            </div>
            <div className="col-md-auto d-flex justify-content-around align-items-center">
                <img width="40px" height="30px" className="m-1" src={imgBrasil} onClick={() => mudarIdioma('pt')} alt="Mudar idioma para português"/>
                <img width="40px" height="30px" className="m-1" src={imgEua} onClick={() => mudarIdioma('en')} alt="Mudar idioma para inglês"/>
                <img width="40px" height="30px" className="m-1" src={imgEspanha} onClick={() => mudarIdioma('es')} alt="Mudar idioma para espanhol"/>
            </div>
        </div>
        <div className="row d-flex justify-content-around d-md-none py-1">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                <a href="#inicio" className="text-decoration-none text-center text-black" aria-label="Link para o inicio da página">
                    <h1 className="border-bottom m-0">AQ</h1>
                    <small className="fontTimes">Silva</small>
                </a>
            </div>
            <div className="col-auto d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-bars-staggered cursor-click fa-2xl" onClick={abrirEFecharMenuMobile}></i>
            </div>
        </div>
    </header>
        </>
    )
}