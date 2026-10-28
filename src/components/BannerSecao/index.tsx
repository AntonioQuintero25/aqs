import { useTranslation } from 'react-i18next';
import './style.css';

interface IBannerSecao{
    id: string;
    imagemBackground: string;
    titulo: string;
    texto: string;
    alinhamento: "Esquerda" | "Direita";
}

export default function BannerSecao(props: IBannerSecao){
    const { t } = useTranslation();
    return(
        <div id={props.id} className="container-fluid p-5 background-banner" style={{backgroundImage: `url(${props.imagemBackground})`}}>
        <div className={`row my-5 ${props.alinhamento === "Direita" && "justify-content-end"}`}>
            <div className="col-auto text-center bg-white p-5">
                <h2>{t(props.titulo)}</h2>
                <p>{t(props.texto)}</p>
            </div>
        </div>
    </div>
    )
}