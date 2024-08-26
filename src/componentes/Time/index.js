import './Time.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar,mudarCor}) =>{
    return(        
        colaboradores.length>0 && <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor,0.6 )}}>
            <input value={time.cor} type="color" className='input-color' onChange={evento=>mudarCor(evento.target.value, time.nome)}></input>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}/>
                })}
            </div>            
        </section>
    )
}

export default Time
