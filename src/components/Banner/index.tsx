import './style.css'
import bgStack from "../../assets/img/bgstack.webp";
import { useTranslation } from "react-i18next";

export default function Banner(){
    const { t } = useTranslation();

    return(
        <div id='inicio' className="container-fluid bg-stack" style={{backgroundImage: `url(${bgStack})`}}>
            <div className="row h-100 justify-content-center bg-stack-sombra  py-5">
                <div className="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center align-items-center">
                    <div className="text-center text-white p-3 p-md-5 m-auto">
                        <h1 className="border-bottom">{t('titulobanner')}</h1>
                        <p>{t('textobanner')}</p>
                    </div>
                </div>
                <div className="col-10 col-md-5 p-3 p-md-5 d-flex justify-content-center align-items-center">
                </div>
            </div>
        </div>
    )
}