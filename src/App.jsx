import './App.css'
import jaca from "./assets/produtos/corte-do-jaca7.jpg"
import americano from "./assets/produtos/americano.jpg"
import militar from "./assets/produtos/militar.jpg"
import lp from "./assets/produtos/lp.jpg"
import barba1 from "./assets/produtos/barba1.jpeg"
import barba2 from "./assets/produtos/barba2.jpg"
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Barpont from "./assets/logo.svg"
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./pages/csspages/home.css"
import "./pages/csspages/sobre.css"
import "./pages/csspages/produtos.css"
import "./pages/csspages/contato.css"
import Navbar from "./components/Navbar.jsx";



function App() {

  return (
   <div className='container'>
    <Navbar/>
        <main>
            <section id="home">
                <div className="homepeges" >
                    <div className="lerf">
                        <h1>Original como <br /> tem que ser.</h1>
                        <h2>Transformando seu visual, <br /> renovando sua autoestima. <span>Agende-se ja.</span></h2>
                    </div>
                </div>
            </section>

        <section id="sobre">
        <div className="sobre">
        <div className="left"></div>
        <div className="rigth-sobre">
            
            <h1>Quem é a Barber-s Point ?</h1>
            <div className="barra-duo"></div>
            <div className="barra"></div>
            <p>Somos a <strong>Barbearia do Rapha</strong>, localizada em Belo Horizonte e Nova Lima, 
               fundada em 2019 com a missão de renovar sua autoestima e transformar seu visual. 
               Nosso fundador, Marcio Vinicius, começou a cortar cabelo aos 15 anos e, aos 22, 
               está realizando seu sonho de oferecer serviços de qualidade em um ambiente acolhedor. 
               Venha conhecer nosso espaço e sentir-se original como deve ser! 
            </p>

        </div>
      </div>
        </section>

        <section id="produto">
        <div className="produtos-container">
            <h1>Produtos da Barbearia</h1>
            <div className="imgs">
            <div className="produto">
                <img src={jaca} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            <div className="produto">
                <img src={americano} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            <div className="produto">
                <img src={militar} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            <div className="produto">
                <img src={lp} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            <div className="produto">
                <img src={barba1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            <div className="produto">
                <img src={barba2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste aliquid illum quod ullam quia incidunt soluta harum, dolore earum nulla cupiditate facilis saepe blanditiis dicta, eos, eaque in. Eum.</p>
                <span>35.00</span>
            </div>
            </div>
            <button className='prev'>❮</button>
            <button className='next'>❯</button>
         </div>
        </section>

        <section id="contato">
        <div className="rodape-contatos">
        <footer>
            <div className="rede-social">
            <FaFacebook className="logos"/>
            <IoLogoWhatsapp className="logos"/>
            <RiInstagramFill className="logos"/>
            <FaTwitter className="logos"/>
            </div>
            <div className="logo-princ">
                <a href="#home"><img src={Barpont} alt="logo-site" /></a>
                <span>@Viniciius_Freiista</span>
            </div>
            <div className="endtel">
                <div className="endereço">
                    <BsTelephoneFill className="full"/>
                    <span>(21) 9 7543-3366</span>
                </div>
                <div className="endereço">
                    <MdEmail className="full"/>
                    <span>BarbarPoint@gmail.com</span>
                </div>
                <div className="endereço">
                    <IoLocationSharp className="full"/>
                    <span>Rua Gétulio de moura - Nova Iguaço - Rio de janeiro</span>
                    </div>
                  </div>
                 </footer>
            </div>
      </section>
    </main>
   </div>
  )
}

export default App
