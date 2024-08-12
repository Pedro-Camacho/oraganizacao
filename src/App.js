import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
 
  const [colaboradores, setColaboradores]=useState([])
  const [times, setTimes] = useState([]);
  // Função para buscar os dados do times.json
  const buscarTimes = async () => {
    try {
      const response = await fetch('./times.json');
      const data = await response.json();
      setTimes(data);
    } catch (error) {
      console.error('Erro ao buscar times:', error);
    }
    };

  // Chama a função para buscar os times quando o componente é montado
  React.useEffect(() => {
    buscarTimes();
  }, []);
  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }
  return (
    <div className="App">
      <Banner/>  
      <Formulario aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)}/>     
      {times.map(time => <Time 
                            key={time.nome} 
                            nome={time.nome} 
                            corPrimaria={time.corPrimaria} 
                            corSecundaria={time.corSecundaria}
                          />
                  )}
      
    </div>
  );
}

export default App;
