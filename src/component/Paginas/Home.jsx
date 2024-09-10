import './Home.css';
import React from "react";
import Header_componente from "../Header/Header_1.jsx";
import Footer from "../Footer/Footer.jsx";
import Texto_1 from "../Texto/Texto_1.jsx";
import Imagen_1 from "../Imagen/Imagen_1.jsx";
import Texto_2 from "../Texto/Texto_2.jsx";

function Home() {

    return (
        <>

            <Header_componente/>
                <div className="body_fondo">
                    <Texto_1 Titulo="BIENVENIDO A STEAM CONSOLAS"
                         Parrafo="En Steam consolas puedes realizar las compras de tus consolas favoritas. Contamos con una gran variedad de consolas y accesorios para satisfacer la necesidades de cualquier usuario, desde accesorios hasta consolas. La mejor calidad del mercado."/>
                    <Imagen_1 />
                    <Texto_2 Parrafo="A traves de la colaboración con microsoft ahora esta disponible para toda la comunidad toda las coleccion de xbox series desde la series S hasta la series X con sus respectivos accesorios."/>
                    <Footer/>
                </div>
        </>
    )
}

export default Home