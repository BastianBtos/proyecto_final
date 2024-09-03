import './App.css';
import React from "react";
import Header_componente from "./component/Header/Header_1.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Texto_1 from "./component/Texto/Texto_1.jsx";
import Texto_2 from "./component/Texto/Texto_2.jsx";

function App() {

  return (
      <>
        <Header_componente/>
          <Texto_1 Titulo="BIENVENIDO A STEAM CONSOLAS" Parrafo="En Steam consolas puedes realizas la compras de tus consolas favoritas. Contamos con una gran variedad de consolas y accesorios."/>
          <Texto_2 Parrafo="Hola buenos dias"/>
        <Footer></Footer>
      </>
  )
}

export default App
