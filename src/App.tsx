import 'bootstrap/dist/css/bootstrap.min.css';
import { infoProjetosComercial, linkContato, projetosComerciais, stacksAtual, stacksEstudadas } from './db/db'
import bgNatureza from './assets/img/bgnatureza.webp';
import bgTeclado from './assets/img/tecladoAzul.webp';
import { lazy } from 'react';
import './locales/index';

const Header = lazy(() => import('./components/Header'));
const Banner = lazy(() => import('./components/Banner'));
const SobreMim = lazy(() => import('./components/SobreMim'));
const Projetos = lazy(() => import('./components/Projetos'));
const BannerSecao = lazy(() => import('./components/BannerSecao'));
const Stacks = lazy(() => import('./components/Stacks'));
const Contato = lazy(() => import('./components/Contato'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <SobreMim />
        <Projetos 
        id='projetos' 
        textoSmall='projetoscomerciaissmall' 
        titulo='projetoscomerciaistitulo'
        texto='Abaixo segue os 3 projetos de grande escala dos quais eu participei ativamente, contribuindo em todas as etapas do ciclo de desenvolvimento com foco em performance, escalabilidade e experiência do usuário.'
        listaDeInfos={infoProjetosComercial}
        listaDeProjetos={projetosComerciais}
        />
        <BannerSecao 
          id='techstacks' 
          imagemBackground={bgNatureza} 
          titulo='titulostack' 
          texto='textostack'
          alinhamento='Esquerda'
          />
        <Stacks listaDeStacks={stacksAtual} />
        <BannerSecao 
          id='techstacks' 
          imagemBackground={bgTeclado} 
          titulo='titulostackestudei' 
          texto='textostackestudei' 
          alinhamento='Direita'
          />
          <Stacks listaDeStacks={stacksEstudadas} />
          <Contato linksDoContato={linkContato} />
      </main>
      <Footer />
    </>
  )
}

export default App
