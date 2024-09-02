import { IoMdCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) =>{
    function favoritar(){
        aoFavoritar(colaborador.id)
    }
    const propsFavorito={
        size:25,
        onClick: favoritar
    }
    return (
        <div className='colaborador'>
            <IoMdCloseCircle size={25} className='deletar' onClick={()=>aoDeletar(colaborador.id)}>deletar</IoMdCloseCircle>
            <header className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </header>
            <footer className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <MdFavorite {...propsFavorito} color='#ff0000'/> 
                        : <MdFavoriteBorder {...propsFavorito}/>}
                </div>
                
            </footer>
        </div>
    )
}

export default Colaborador