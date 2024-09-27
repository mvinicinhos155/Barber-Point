import Barpont from "../assets/logo.svg"
import "./nav.css"

function Navbar () {
    return (
        <nav className="nav">
        <div className="img">
            <a href="#home"><img src={Barpont} alt="" /></a>
        </div>
        <div className="ref">
           <ul>
            <li>
                <a href="#home">Home</a>
                </li>
            <li>
                <a href="#sobre">Sobre</a>
                </li>
            <li>
                <a href="#produto">Produtos</a>
                </li>
            <li>
                <a href="#contato">Contatos</a>
                </li>
           </ul>
                <div className="rigth">
                    <button>Agende seu Horario</button>     
            
                </div>
        </div>
    </nav>
    )
}

export default Navbar;