//componentes
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

//estilo e states
import './Formulario.css'
import { useState } from 'react'

//componente formulario
const Formulario = ({aoCadastrar, times}) => {

    const [nome,setNome]= useState('')
    const [cargo,setCargo]=useState('')
    const [imagem,setImagem]=useState('')
    const [time, setTime]=useState('')

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
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor=>setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor=>setCargo(valor)}    
                />
                <CampoTexto 
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
        </section>
    )
}

export default Formulario