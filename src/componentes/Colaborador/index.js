import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo}) =>{
    return (
        <div className='colaborador'>
            <header className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </header>
            <footer className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </footer>
        </div>
    )
}

export default Colaborador