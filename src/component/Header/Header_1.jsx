import "./Header.css"
import logo from "../../assets/image/steam.svg"


function Header_componente() {
    const menu = () =>{
        let desplegar = document.getElementById('menu');
        let cerrar = document.getElementById('x');
        desplegar.classList.toggle('abrir');
        cerrar.classList.toggle('ponerx');
    }
    return (
        <header>
            <div className="barras">
                <button onClick={menu} className='boton_menu margen_boton' id='x'></button>
            </div>
            <nav id='menu' className="desplegable">
                <ul className="nav_lateral">

                    <a className="logo_barra" href="/home">
                        <img id="logo" src={logo} alt="..."/>
                    </a>
                    <li className="estilo_lista">
                        <a className="estilo_bloque hover padding_lateral" href="/Home">Inicio</a>
                    </li>

                    <li className="estilo_lista">
                        <a className="estilo_bloque hover padding_lateral" href="/SteamDeck">SteamDeck</a>
                    </li>
                    <li className="estilo_lista">
                        <a className="estilo_bloque hover padding_lateral" href="/Xbox">Xbox Series</a>
                    </li>
                    <li className="estilo_lista">
                        <a className="estilo_bloque hover padding_lateral" href="/Ps5">Play Station 5</a>
                    </li>
                    <li className="estilo_lista">
                        <a className="estilo_bloque hover padding_lateral" href="/Switch">Nintendo Switch</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;