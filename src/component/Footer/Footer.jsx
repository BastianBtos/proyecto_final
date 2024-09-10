import "./Footer.css";
import facebook from "../../assets/image/facebook.svg";
import twiter from "../../assets/image/twitter-x.svg";
import steam from "../../assets/image/steam_red.svg";
import instagram from "../../assets/image/instagram.svg";

const Footer_1 = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Para ti</h4>
                        <a href="https://store.steampowered.com/?l=spanish">
                            <p>Tienda de juegos</p>
                        </a>
                        <a href="#">
                            <p>Steam Consolas</p>
                        </a>
                        <a href="https://www.steamdeck.com/es/">
                            <p>SteamDeck</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Patrocinadores</h4>
                        <a href="https://www.nintendo.com/es-es/?srsltid=AfmBOoq9XflZNdsE1XnISQlaESEEwcJIUNfv5viia9Za8WusX-GheFCK">
                            <p>Nintendo</p>
                        </a>
                        <a href="https://www.xbox.com/es-CL/?xr=mebarnav">
                            <p>Microsoft</p>
                        </a>
                        <a href="https://www.playstation.com/es-cl/ps5/">
                            <p>Sony</p>
                        </a>

                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Compañia</h4>
                        <a href="https://www.valvesoftware.com/es/about">
                            <p>Sobre nosotros</p>
                        </a>

                        <a href="https://store.steampowered.com/sale/steam20?l=spanish">
                            <p>Historia</p>
                        </a>
                        <a href="https://help.steampowered.com/es/faqs/view/6F69-0324-B2DB-6E7E">
                            <p>Contactanos</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Nuestras Redes</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com/Steam"><img src={facebook} alt="..."/></a>
                            <a href="https://x.com/Steam"><img src={twiter} alt="..."/></a>
                            <a href="https://www.instagram.com/steam_games_official/?hl=es"><img src={instagram} alt="..."/></a>
                            <a href="https://store.steampowered.com/?l=spanish"><img src={steam} alt="..." /></a>
                        </div>
                    </div>

                <hr></hr>

                    <div className="sb_footer-bellow">
                        <div className="sb_footer-copyright">
                            <p>
                                @{new Date().getFullYear()} Valve Corporation. Todos los derechos reservados
                            </p>
                        </div>
                        <div className="sb_footer-bellow-links">
                            <a href="https://store.steampowered.com/subscriber_agreement/spanish/">
                                <div>
                                    <p>Terminos y Condiciones</p>
                                </div>
                            </a>
                            <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_">
                                <div>
                                    <p>Privacidad</p>
                                </div>
                            </a>
                            <a href="https://help.steampowered.com/es/faqs/view/6639-EB3C-EC79-FF60">
                                <div>
                                    <p>Seguridad</p>
                                </div>
                            </a>
                            <a href="https://help.steampowered.com/es/faqs/view/270E-A6B6-F83C-B9AB">
                                <div>
                                    <p>Cookies</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer_1