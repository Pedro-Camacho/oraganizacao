import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = 'Pedro Camacho'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    } 
    
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value = {valor} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto