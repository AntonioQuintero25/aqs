import type { ILink } from '../../interface/Link';
import './style.css';
import imgAviao from "../../assets/img/aviaoEmBranco.webp";
import { useTranslation } from 'react-i18next';

interface IContato{
    linksDoContato: ILink[];
}

export default function Contato(props: IContato){
    const { t } = useTranslation();
    return(
        <div id="contato" className="container-fluid py-5 text-white bg-dark-blue">
        <div className="row justify-content-center">
            <div className="col-11 align-self-start">
                <h2><strong>{t("titulocontato")}</strong></h2>
                <p>{t("textocontato")}</p>
            </div>
        </div>
        <div className="row justify-content-center align-items-center flex-lg-row flex-column-reverse">
            <div className="col-11 col-md-5">
                {props.linksDoContato.map((link) => {
                    return <a href={link.link} target="_blank" className="p-4 border-bottom d-flex align-items-center justify-content-between text-decoration-none link-footer text-white my-3" aria-label="Link para linkedin de Antonio Quintero">
                    <div className="d-flex align-items-center">
                        <i className={link.icone}></i>
                        <div>
                            <p className='fs-5'>{t(link.texto)}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right fa-lg"></i>
                </a>
                })}
            </div>
            <div className="col-10 col-md-5 d-flex flex-column justify-content-center align-items-center text-center p-2 p-md-5">
                <img src={imgAviao} alt="" className="img-fluid" />
                <div className="border p-5">
                    <p className="fontTimes"><strong className="fs-5">{t('titulomensagemcontato')}</strong><br />
                        {t('textomensagemcontato')}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}