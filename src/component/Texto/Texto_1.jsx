import "./Texto_1.css";
const Texto_1 = ({Titulo, Parrafo}) => {
    return(
        <>
            <div className="titulo">
                <h2>{Titulo}</h2>
            </div>
            <div className="parrafos">
                <p>{Parrafo}</p>
            </div>
        </>
    )
}

export default Texto_1
