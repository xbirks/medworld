import Image from "next/image";
import Link from "next/link";
import logo_azul from "/app/assets/logo_azul.svg"
import med_logo from "/app/assets/medworld_full_logo.svg"

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


    </div>

  );

}

export default HomePage;