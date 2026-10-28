import type { ITecnologias } from "./Tecnologias";

export interface IProjeto{
    id: string,
    imagem: string,
    titulo: string,
    texto: string,
    entregas: string[],
    tecnologias: ITecnologias[]
}