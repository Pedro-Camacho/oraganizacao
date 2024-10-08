//componentes
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'

//estilo e states
import './Formulario.css'
import { useState } from 'react'

//componente formulario
const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome,setNome]= useState('')
    const [cargo,setCargo]=useState('')
    const [imagem,setImagem]=useState('')
    const [time, setTime]=useState('')

    const [nomeTime,setNomeTime]=useState('')
    const [corTime,setCorTime]=useState('#000000')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('Form enviado', nome, cargo, imagem, time)
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form  className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor=>setNome(valor)} 
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor=>setCargo(valor)}    
                />
                <Campo 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor=>setImagem(valor)}
                />                
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar Card'/>
            </form>
            <form  className="formulario" onSubmit={(evento)=>{
                    evento.preventDefault()
                    cadastrarTime({nome: nomeTime, cor:corTime})
                }}>
                <h2>Preencha os dados para criar um Time</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome time" 
                    placeholder="Digite seu nome"
                    valor={nomeTime}
                    aoAlterado={valor=>setNomeTime(valor)} 
                />
                <Campo 
                    type='color'
                    label="Cor" 
                    placeholder="Digite o valor hex da cor" 
                    valor={corTime}
                    aoAlterado={valor=>setCorTime(valor)}    
                />               
                <Botao texto='Criar Time'/>
            </form>
        </section>
    )
}

export default Formulario