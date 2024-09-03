import "./Header.css"
import logo_nav from "../../assets/image/steam.svg"

let vacio = '';
function Header_componente() {
    const abrir_cerrar_menu = () =>{
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    }
    return (
        <header>
            <div className="barras">
                <button onClick={abrir_cerrar_menu} className='boton_menu margen_boton' id='x'></button>
            </div>
            <nav id='menu' className="desplegable">
                <ul className="nav_lateral">

                    <a className="logo_barra" href="#">
                        <img id="logo" src={logo_nav}/>
                    </a>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Inicio</a></li>

                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>SteamDeck</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Xbox Series</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Play Station 5</a></li>
                    <li className="estilo_lista_vacio"><a className="estilo_bloque hover padding_lateral"
                                                          href={vacio}>Nintendo Switch</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header_componente;