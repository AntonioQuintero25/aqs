import './style.css'
import { useTranslation } from "react-i18next";

export default function SobreMim(){
    const { t } = useTranslation();

    return(
        <div id="sobremim" className="container-fluid py-5 bg-dark-blue text-white">
        <div className="row justify-content-center">
            <div className="col-11 col-md-5">
                <small><strong className="text-uppercase fontTimes">{t('textosobremim')}</strong></small>
                <h2 className="py-2 fontTimes">{t('titulosobremim')} <br /><strong className="fontTimes">Antonio Quintero</strong></h2>
                <p>
                    {t('textosobremimum')}
                </p>
                <p>
                    {t('textosobremimdois')}
                </p>
            </div>
            <div className="col-11 col-md-5">
                <p>Foto minha</p>
            </div>
            <div className="col-11 d-flex flex-wrap justify-content-around py-2">
                <div className="d-flex justify-content-center p-4 my-3 border">
                    <i
                        className="fa-solid fa-suitcase fa-2xl text-white d-flex justify-content-center align-items-center"></i>
                    <div className="texto d-flex flex-column justify-content-center align-items-start">
                        <p className="text-uppercase m-0 fontTimes">{t('textosobremimexperienciaum')}</p>
                        <p className="m-0">5+ {t('textosobremimexperienciaanos')}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center p-4 my-3 border">
                    <i
                        className="fa-solid fa-crosshairs fa-2xl text-white d-flex justify-content-center align-items-center"></i>
                    <div className="texto d-flex flex-column justify-content-center align-items-start">
                        <p className="text-uppercase m-0 fontTimes">{t('textosobremimexperienciafoco')}</p>
                        <p className="m-0">{t('textosobremimexperienciafocodois')}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center p-4 my-3 border">
                    <i
                        className="fa-solid fa-diagram-project fa-2xl text-white d-flex justify-content-center align-items-center"></i>
                    <div className="texto d-flex flex-column justify-content-center align-items-start">
                        <p className="text-uppercase m-0 fontTimes">{t('textosobremimexperienciaprojetos')}</p>
                        <p className="m-0">{t('textosobremimexperienciaprojetosdois')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}