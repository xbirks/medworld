import Image from "next/image";
import Link from "next/link";
import logo_azul from "/app/assets/logo_azul.svg"
import med_logo from "/app/assets/medworld_full_logo.svg"
import pilar1 from "/app/assets/sec1.svg"
import pilar2 from "/app/assets/sec2.svg"
import pilar3 from "/app/assets/sec3.svg"
import med_logo_oscuro from "/app/assets/medworld_full_logo_oscuro.svg"

function HomePage(){

  return(

    <div className="master__body">

      
      <div className="navbar__master">
        <div className="navbar__logo">
          <Image src={logo_azul} alt="Icono de Medworld en color azul oscuro"></Image>
        </div>
        <div className="button">
          <Link href="/contacto">
            <p>Llámanos</p>
          </Link>
        </div>
      </div>


      <Image className="medworld_full_logo" src={med_logo} alt="Logo de Medworld completo en color azul claro"></Image>

      <h1 className="title">Hacemos crecer la <span className="title_v1">marca personal</span> de los <span className="title_v2">mejores</span> médicos cirujanos estéticos. </h1>



      <div className="pilares">
        
        <div className="cajon__pilares">
          <Image className="pilar_img" src={pilar1} alt="Número uno"></Image>
          <p>Captamos clientes a través de nuestro Clinic Funnel</p>
        </div>

        <div className="cajon__pilares">
          <Image className="pilar_img" src={pilar2} alt="Número dos"></Image>
          <p>Implementamos una estrategia de contenido viral</p>
        </div>

        <div className="cajon__pilares">
          <Image className="pilar_img" src={pilar3} alt="Número tres"></Image>
          <p>Gestionamos por completo todas
          tus redes sociales</p>
        </div>

      </div>

      <div className="button button_claro">
          <Link href="/contacto">
            <p>Llámanos</p>
          </Link>
      </div>




      <div className="footer">

        <Image className="footer__logo" src={med_logo_oscuro} alt="Medworld logo versión azul oscuro"></Image>

        <p>Conoce nuestro trabajo a través de Instagram:</p>
        <Link href="https://www.instagram.com/medworld.es/">@medworld.es</Link>

      </div>


    </div>

  );

}

export default HomePage;