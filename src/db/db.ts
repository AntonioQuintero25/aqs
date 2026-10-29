import type { IInfoProjeto } from "../interface/InfoProjeto";
import type { ILink } from "../interface/Link";
import type { IProjeto } from "../interface/Projeto";
import type { IStack } from "../interface/Stack";
import logoSpMaisDigital from "../assets/img/sp-digital.webp";
import logoCms from "../assets/img/logo_CMS_Período_Eleitoral.webp";
import logoAlesp from "../assets/img/alesp_marca_monocromatica_postitiva.webp";
import type { ITecnologias } from "../interface/Tecnologias";
import webSphere from "../assets/img/Websphere_logo.webp";
import hcl from "../assets/img/HCL_Technologies_logo.webp";
import logoliferay from "../assets/img/logoLiferay.webp";
import documento from "../assets/doc/Profile.pdf";

export const itensDoMenu: ILink[] = [
    {texto: "inicio", link: "#inicio"},
    {texto: "sobremim", link: "#sobremim"},
    {texto: "projetos", link: "#projetos"},
    {texto: "techstacks", link: "#techstacks"},
    {texto: "contato", link: "#contato"},
];

export const infoProjetosComercial: IInfoProjeto[] = [
    {icone: "fa-regular fa-folder fa-2xl", titulo: "3", texto:"projetoscomerciaisprojetosentregue"},
    {icone: "fa-solid fa-code fa-2xl", titulo: "Full Stack", texto:"atuacao"}
];

/** Itens da Stack atual*/
const html: ITecnologias = {
    icone: "devicon-html5-plain colored",
    label: "HTML5"
};

const css3: ITecnologias = {
    icone: "devicon-css3-plain colored",
    label: "CSS3"
};

const bootstrap: ITecnologias = {
    icone: "devicon-bootstrap-plain colored",
    label: "BootStrap"
};

const javascript: ITecnologias = {
    icone: "devicon-javascript-plain colored",
    label: "JavaScript"
};

const typescript: ITecnologias = {
    icone: "devicon-typescript-plain colored",
    label: "TypeScript"
};

const react: ITecnologias = {
    icone: "devicon-react-original colored",
    label: "React"
};

const java: ITecnologias = {
    icone: "devicon-java-plain colored",
    label: "Java"
};

const springboot: ITecnologias = {
    icone: "devicon-spring-original colored",
    label: "SpringBoot"
};

const websphere: ITecnologias = {
    icone: webSphere,
    label: "WebSphere"
};

const hcldx: ITecnologias = {
    icone: hcl,
    label: "HCL DX"
};

const hclfoundry: ITecnologias = {
    icone: hcl,
    label: "HCL Foundry"
};

const git: ITecnologias = {
    icone: "devicon-git-plain colored",
    label: "Git"
};

const github: ITecnologias = {
    icone: "devicon-github-original colored",
    label: "GitHub"
};

const npm: ITecnologias = {
    icone: "devicon-npm-original-wordmark colored",
    label: "NPM"
};

const cpanel: ITecnologias = {
    icone: "devicon-cpanel-original colored",
    label: "CPanel"
};

const eclipse: ITecnologias = {
    icone: "devicon-eclipse-plain-wordmark colored",
    label: "Eclipse"
};

const filezilla: ITecnologias = {
    icone: "devicon-filezilla-plain colored",
    label: "FileZilla"
};

const postman: ITecnologias = {
    icone: "devicon-postman-plain colored",
    label: "Postman"
};

const vscode: ITecnologias = {
    icone: "devicon-vscode-plain colored",
    label: "VSCode"
};
/** Itens da Stack atual*/

/** Itens da Stack estudadas*/
const laravel: ITecnologias = {
    icone: "devicon-laravel-original colored",
    label: "Laravel"
};

const wordpress: ITecnologias = {
    icone: "devicon-wordpress-plain colored",
    label: "WordPress"
};

const angular: ITecnologias = {
    icone: "devicon-angularjs-plain colored",
    label: "Angular"
};

const liferay: ITecnologias = {
    icone: logoliferay,
    label: "Liferay"
};

const vuejs: ITecnologias = {
    icone: "devicon-vuejs-plain colored",
    label: "VueJS"
};

const python: ITecnologias = {
    icone: "devicon-python-plain colored",
    label: "Python"
};

const nodejs: ITecnologias = {
    icone: "devicon-nodejs-plain colored",
    label: "NodeJS"
};

const csharp: ITecnologias = {
    icone: "devicon-csharp-plain colored",
    label: "C#"
};

const cplusplus: ITecnologias = {
    icone: "devicon-cplusplus-plain colored",
    label: "C++"
};

const apsnet: ITecnologias = {
    icone: "devicon-dot-net-plain colored",
    label: "APS.NET"
};

const php: ITecnologias = {
    icone: "devicon-php-plain colored",
    label: "PHP"
};

const android: ITecnologias = {
    icone: "devicon-android-plain colored",
    label: "Android"
};

const express: ITecnologias = {
    icone: "devicon-express-original colored",
    label: "Express"
};

const fastapi: ITecnologias = {
    icone: "devicon-fastapi-plain colored",
    label: "FastApi"
};

const gcp: ITecnologias = {
    icone: "devicon-google-plain colored",
    label: "GCP"
};

const mysql: ITecnologias = {
    icone: "devicon-mysql-original colored",
    label: "MySQL"
};

const postgresql: ITecnologias = {
    icone: "devicon-postgresql-plain colored",
    label: "PostgreSQL"
};

const alloydb: ITecnologias = {
    icone: "devicon-google-plain colored",
    label: "AlloyDB"
};
/** Itens da Stack estudadas*/

export const projetosComerciais: IProjeto[] = [
    {
        id: "spmaisdigital", 
        imagem: logoSpMaisDigital, 
        titulo: "SP+Digital", 
        texto: "textospmaisdigital", 
        entregas: ["responsividade", "conteudo", "acessibilidade", "busca", "integrando", "seo"],
        tecnologias: [html, css3, bootstrap, javascript, java, websphere, hcldx]
    },
    {
        id: "cms", 
        imagem:logoCms, 
        titulo: "CMS", 
        texto: "textocms", 
        entregas: ["responsividade", "conteudo", "acessibilidade", "busca", "integrando", "seo"],
        tecnologias: [html, css3, bootstrap, javascript, react, java, websphere, hcldx]
    },
    {
        id: "alesp", 
        imagem:logoAlesp, 
        titulo: "Alesp", 
        texto: "textoalesp", 
        entregas: ["responsividade", "conteudo", "acessibilidade", "busca", "integrando", "seo"],
        tecnologias: [html, css3, bootstrap, javascript, typescript, react, java, springboot, websphere, hcldx, hclfoundry]
    }
]

export const stacksAtual: IStack[] = [
    {
        icone: "fa-solid fa-code text-white fa-xl icon-tech-front-end d-flex align-items-center",
        titulo: "titulofrontend",
        technologias: [html, css3, bootstrap, javascript, typescript, react, hcldx, hclfoundry]
    },
    {
        icone: "fa-brands fa-codepen text-white fa-xl icon-tech-back-end d-flex align-items-center",
        titulo: "titulobackend",
        technologias: [java, springboot, hcldx, hclfoundry]
    },
    {
        icone: "fa-solid fa-gear text-white fa-xl icon-tech-devops d-flex align-items-center",
        titulo: "titulodevtools",
        technologias: [git, github, npm, cpanel, eclipse, filezilla, postman, vscode]
    },
];

export const stacksEstudadas: IStack[] = [
    {
        icone: "fa-solid fa-code text-white fa-xl icon-tech-front-end d-flex align-items-center",
        titulo: "titulofrontend",
        technologias: [laravel, wordpress, angular, liferay, vuejs]
    },
    {
        icone: "fa-brands fa-codepen text-white fa-xl icon-tech-back-end d-flex align-items-center",
        titulo: "titulobackend",
        technologias: [python, nodejs, csharp, cplusplus, apsnet, php, liferay, android, express, fastapi]
    },
    {
        icone: "fa-solid fa-gear text-white fa-xl icon-tech-devops d-flex align-items-center",
        titulo: "titulodevtools",
        technologias: [gcp]
    },
    {
        icone: "fa-solid fa-database fa-xl icon-tech-dados d-flex align-items-center",
        titulo: "titulobancodedados",
        technologias: [mysql, postgresql, alloydb]
    },  
];

export const linkContato: ILink[] = [
    {
        link:"https://www.linkedin.com/in/antonio-quintero-da-silva/", 
        texto: "linkedin", 
        icone: "fa-brands fa-linkedin fa-2xl text-white mx-3"
    },
    {
        link:"https://wa.me/5511985675500?text=Ol%C3%A1%20Antonio%2C%20gostei%20do%20seu%20perfil%20vamos%20conversar!", 
        texto: "whatsapp", 
        icone: "fa-brands fa-square-whatsapp fa-2xl text-white mx-3"
    },
    {
        link:"tel:+5511985675500", 
        texto: "celular", 
        icone: "fa-solid fa-mobile fa-2xl text-white mx-3"
    },
        {
        link:documento, 
        texto: "download", 
        icone: "fa-solid fa-download fa-2xl text-white mx-3"
    },
    {
        link:"mailto:antonioquintero.emprego@gmail.com", 
        texto: "email", 
        icone: "fa-solid fa-envelope fa-2xl text-white mx-3"
    },
    {
        link:"https://github.com/AntonioQuintero25", 
        texto: "github", 
        icone: "fa-brands fa-square-github fa-2xl text-white mx-3"
    },
]