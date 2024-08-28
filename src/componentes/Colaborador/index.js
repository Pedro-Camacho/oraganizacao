import { IoMdCloseCircle } from "react-icons/io";
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar}) =>{
    return (
        <div className='colaborador'>
            <IoMdCloseCircle size={25} className='deletar' onClick={()=>aoDeletar(colaborador.id)}>deletar</IoMdCloseCircle>
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