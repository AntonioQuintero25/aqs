import { useTranslation } from 'react-i18next';
import type { IStack } from '../../interface/Stack';
import './style.css';

export interface IStacks{
    listaDeStacks: IStack[];
}

export default function Stacks(props: IStacks){
    const { t } = useTranslation();
    return(
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                {props.listaDeStacks.map((stack) => {
                    return stack === props.listaDeStacks[props.listaDeStacks.length - 1] ? 
                    <div className="col-11 d-flex flex-column flex-md-row justify-content-center align-items-center p-2">
                                <div className="titulo d-flex p-2 p-md-5">
                                    <i className={stack.icone}></i>
                                    <h2 className="text-nowrap m-0 ">{t(stack.titulo)}</h2>
                                </div>
                                <div className="tecnologias flex-fill">
                                    <ul className="d-flex justify-content-center flex-wrap list-unstyled m-0">
                                        {stack.technologias.map((tecnologia) => {
                                            return <li className="border p-2 m-1">
                                                        {tecnologia.icone.includes("devicon") ? (
                                                            <><i className={tecnologia.icone}></i><small>{tecnologia.label}</small></>
                                                        ) : (
                                                            <><img src={tecnologia.icone} width="20px" alt={`Logo ${tecnologia.label}`}/><small>{tecnologia.label}</small></>
                                                        )}
                                                   </li>
                                        })}
                                        
                                    </ul>
                                </div>
                           </div>
                    :
                    <div className="col-11 d-flex flex-column flex-md-row justify-content-center align-items-center border-bottom p-2">
                                <div className="titulo d-flex p-2 p-md-5">
                                    <i className={stack.icone}></i>
                                    <h2 className="text-nowrap m-0 ">{t(stack.titulo)}</h2>
                                </div>
                                <div className="tecnologias flex-fill">
                                    <ul className="d-flex justify-content-center flex-wrap list-unstyled m-0">
                                        {stack.technologias.map((tecnologia) => {
                                            return <li className="border p-2 m-1">
                                                        {tecnologia.icone.includes("devicon") ? (
                                                            <><i className={tecnologia.icone}></i><small>{tecnologia.label}</small></>
                                                        ) : (
                                                            <><img src={tecnologia.icone} width="20px" alt={`Logo ${tecnologia.label}`}/><small>{tecnologia.label}</small></>
                                                        )}
                                                   </li>
                                        })}
                                        
                                    </ul>
                                </div>
                           </div>
                })}
            </div>
        </div>
    )
}