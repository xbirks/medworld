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

      <h1 className="title"><span className="title_v1">¿Eres buen cirujano?</span> Bien. <br></br> ¿Eres el cirujano más buscado y que más factura? <span className="title_v2">Con nosotros lo consigues.</span> </h1>

      
      <div className="linea_horizontal"></div>


      <h2>Hablemos claro.</h2><div className="spacer-s"></div>

        <p>¿Cuántas veces has visto <span className="azul-claro">cirujanos estéticos mediocres</span> con agendas llenas y pacientes haciendo cola? </p><div className="spacer-m"></div>

      

        <div className="circulo-azul">
          <p>¿Y tú?</p>
        </div><div className="spacer-s"></div>

    
        <p>Que con tu <span className="destacado-txt-azul">talento</span> y tus años de experiencia sigues luchando por llenar los huecos de tu calendario...</p>


      <div className="linea_vertical"></div>


      <h2 className="azul-claro"><span className="subrayado">NO</span>, no es justo.</h2>
      <p>Pero aquí estamos para cambiar esto.</p>


    

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