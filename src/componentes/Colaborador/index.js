import './Colaborador.css'

const Colaborador = (props) =>{
    return (
        <div className='colaborador'>
            <header className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </header>
            <footer className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </footer>
        </div>
    )
}

export default Colaborador