import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

import {v4 as uuidv4} from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      nome: 'programação',
      id: uuidv4(),
      
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      id: uuidv4(),
      
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      id: uuidv4(),
      
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      id: uuidv4(),
      
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      id: uuidv4(),
      
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      id: uuidv4(),
      
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      id: uuidv4(),
      
      cor: '#FFEEDF'
    }
  ])

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[0].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[0].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[0].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[0].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[1].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[1].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[1].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[1].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[2].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[2].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[2].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[3].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[3].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[3].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[3].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[4].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[4].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[4].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[4].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      favorito: false,
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      id: uuidv4(),
      time: times[5].nome
    },
    {
      nome: 'DANIEL ARTINE',
      favorito: false,
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      id: uuidv4(),
      time: times[5].nome
    },
    {
      nome: 'GUILHERME LIMA',
      favorito: false,
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      id: uuidv4(),
      time: times[5].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      favorito: false,
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      id: uuidv4(),
      time: times[5].nome
    },
  ]
  
  const [colaboradores, setColaboradores]=useState(inicial)

  function mudarCorTime(cor, id){
    setTimes(times.map(time=>{
      if(time.id===id){
          time.cor=cor
      }
      return time
    }))
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador=>colaborador.id!==id))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime,id:uuidv4()}])
  }
  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  function resolverFavorito(id){
      setColaboradores(colaboradores.map(colaborador =>{
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }))
  }
  return (
    <div className="App">
      <Banner/>  
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador=>[aoNovoColaboradorAdicionado(colaborador),setColaboradores([...colaboradores,colaborador])]}
        
      />     
      <section className="times">
        
        {times.map((time, indice) => 
          <Time 
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorTime}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape/>
    </div>
  );
}

export default App;
