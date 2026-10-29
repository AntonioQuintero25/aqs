import { useTranslation } from "react-i18next";
import type { IInfoProjeto } from "../../interface/InfoProjeto";
import type { IProjeto } from "../../interface/Projeto";
import './style.css';

interface IProjetos{
    id: string;
    textoSmall: string;
    titulo: string;
    texto: string;
    listaDeInfos: IInfoProjeto[];
    listaDeProjetos: IProjeto[];
}

export default function Projetos(props: IProjetos){
    const { t } = useTranslation();
    
    return(
        <div id={props.id} className="container py-5">
            <div className="row justify-content-center m-md-5">
                <div className="col-12 col-lg-6">
                    <small><strong className="cor-texto-destaque">{t(props.textoSmall)}</strong></small>
                    <h2>{t(props.titulo)}</h2>
                    <p>{t(props.texto)}</p>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                    <div className="border d-flex py-3 bg-dark-green text-white">
                        {props.listaDeInfos.map((item) => {
                           return item === props.listaDeInfos[props.listaDeInfos.length - 1] ? 
                                 <div className="w-50 p-3 d-flex flex-column justify-content-evenly align-items-center">
                                    <i className={item.icone}></i>
                                    <p className="fs-5 m-0 fw-bold my-3 my-md-0">{item.titulo}</p>
                                    <p className="m-0">{t(item.texto)}</p>
                                </div>
                             : <div className="w-50 p-3 border-end d-flex flex-column justify-content-evenly align-items-center">
                                    <i className={item.icone}></i>
                                    <p className="fs-5 m-0 fw-bold my-3 my-md-0">{item.titulo}</p>
                                    <p className="m-0">{t(item.texto)}</p>
                                </div>
                        })}
                    </div>
                </div>
            </div>
            {props.listaDeProjetos.map((projeto) => {
                return <div id={projeto.id} className="row justify-content-center p-1 p-md-5 border m-2 my-4 m-md-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                <img src={projeto.imagem} className="img-fluid" alt={`Logo do projeto ${projeto.titulo}`} />
            </div>
            <div className="col-12 col-lg-7">
                <div className="d-flex flex-column py-3">
                    <h2>{projeto.titulo}</h2>
                    <p>{t(projeto.texto)}</p>
                </div>
                <div>
                    <ul className="row row-cols-1 row-cols-md-2 list-unstyled g-3">
                        {projeto.entregas.map((entrega) => {
                            return <li>
                                        <small><i className="fa-regular fa-circle-check fa-lg icon-geral"></i>{t(entrega)}</small>
                                    </li>
                        })}
                    </ul>
                </div>

                <div className="py-2">
                    <h3>{t('technologias')}</h3>
                    <ul className="d-flex flex-wrap list-unstyled">
                        {projeto.tecnologias.map((tecnologia) => {
                            return <li className="border  p-2 m-1">
                                {tecnologia.icone.includes("devicon") ? (
                                    <><i className={tecnologia.icone}></i><small>{tecnologia.label}</small></>
                                    ) : (
                                    <><img src={tecnologia.icone} width="40px" alt={`Imagem do logo do ${tecnologia.label}`} /><small>{tecnologia.label}</small></>
                                )}
                                   </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
            })}
        </div>
    )
}