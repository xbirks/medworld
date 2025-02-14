import Image from "next/image";
import Link from "next/link";
import logo_azul from "/app/assets/logo_azul.svg"
import med_logo from "/app/assets/medworld_full_logo.svg"
import pilar1 from "/app/assets/sec1.svg"
import pilar2 from "/app/assets/sec2.svg"
import pilar3 from "/app/assets/sec3.svg"
import med_logo_oscuro from "/app/assets/medworld_full_logo_oscuro.svg"
import clinic_funnel_logo from "/app/assets/clinic_funnel_logo.svg"

function HomePage(){

  return(

    <div className="">

      
      <div className="navbar__master">
        <div className="navbar__logo">
          <Image src={logo_azul} alt="Icono de Medworld en color azul oscuro"></Image>
        </div>

        <div className="buttons_nav">

          <div className="button cita_previa">
            <a href="https://calendly.com/medworld-es/45min">
              <p>Cita previa</p>
            </a>
          </div>

          <div className="button">
            <a href="tel:+34605076461">
              <p>Llámanos</p>
            </a>
          </div>

        </div>

      </div>




    {/* PRIMERA PARTE */}

      <div className="master__body">


      <Image className="medworld_full_logo" src={med_logo} alt="Logo de Medworld completo en color azul claro"></Image>

      <h1 className="title"><span className="title_v1">¿Eres buen cirujano?</span> Bien. <br></br> ¿Eres el cirujano más buscado y que más factura? <span className="title_v2">Con nosotros lo consigues.</span> </h1>

      
      <div className="linea_horizontal"></div>


      <h2>Hablemos claro.</h2><div className="spacer-s"></div>

        <p>¿Cuántas veces has visto <span className="azul-claro">cirujanos estéticos mediocres</span> con agendas llenas y pacientes haciendo cola? </p><div className="spacer-m"></div>

      

        <div className="circulo-azul">
          <p>¿Y tú?</p>
        </div><div className="spacer-s"></div>

    
        <p>Que con tu <span className="azul-claro">talento</span> y tus años de experiencia sigues luchando por llenar los huecos de tu calendario...</p>


      <div className="linea_vertical"></div>


      <h2 className="azul-claro"><span className="subrayado">NO</span>, no es justo.</h2>
      <p>Pero aquí estamos para cambiar esto.</p><div className="spacer-l"></div>
      


    

      <div className="button button_claro">
          <Link href="https://calendly.com/medworld-es/45min">
            <p>Reserva una consulta gratis</p>
          </Link>
      </div> 

      <p className="button_disclaimer_1">Las plazas son limitadas. Sesión valorada en 250 €.</p>



      </div><div className="spacer-xl"></div>





    {/* SEGUNDA PARTE */}

    <div className="master__body bg-azul-claro"><div className="spacer-m"></div>

      <h2>El problema que nadie quiere decir en voz alta</h2>

      <div className="linea_vertical_oscuro"></div>

      <p className="azul-oscuro">El marketing tradicional <span className="negrita">te ha vendido humo.</span></p>

      <div className="linea_vertical_oscuro"></div>

      <p className="azul-oscuro">Publicar tres posts al mes en Instagram, pagar anuncios que no atraen pacientes y dejar tu reputación en manos de estrategias genéricas es la receta perfecta para quedarte en el anonimato.</p> <div className="spacer-l"></div>

      <h3 className="azul-oscuro">¿El resultado?</h3> <div className="spacer-s"></div>

          <div className="box_resultados"><p className="blanco">Más tiempo <span className="negrita">pegado al móvil</span> que al bisturí.</p></div> <div className="spacer-xs"></div>

          <div className="box_resultados"><p className="blanco"><span className="negrita">Más frustración</span> que reconocimiento.</p></div> <div className="spacer-xs"></div>

          <div className="box_resultados"><p className="blanco"><span className="negrita">Menos pacientes</span> y más dudas sobre si este juego vale la pena.</p></div> <div className="spacer-xs"></div>

          <div className="spacer-m"></div>


    </div>









    {/* TERCERA PARTE */}

    <div className="master__body">


    <Image className="medworld_full_logo" src={med_logo} alt="Logo de Medworld completo en color azul claro"></Image> <div className="spacer-s"></div>

    <h2><span className="azul-claro">No somos médicos,</span> somos una agencia de marketing médico.</h2> <div className="spacer-m"></div>

    <p>No tenemos ni idea de usar un bisturí y nos mareamos si vemos una gota de <span className="rojo">sangre.</span>
    <br></br><br></br>
    No hacemos magia.
    <br></br><br></br>
    ¿Pero sabes que SI hacemos bien?
    <br></br><br></br>
    <span className="azul-claro">¡Diagnosticar los puntos débiles de tu marketing</span> que necesistan un “retoque” y crear la estrategia ideal que necesita tu clínica!</p>


    <div className="linea_vertical"></div>


    <h2>¿Cómo lo hacemos?</h2><div className="spacer-xs"></div>

        <p className="azul-claro">Gracias a nuestro sistema ClinicFunnel </p><div className="spacer-xs"></div>

        <Image className="funnel_logo" src={clinic_funnel_logo} alt="Logo de Clinic Funnel para cirujanos estéticos"></Image> <div className="spacer-s"></div>

        <p>ClinicFunnel no solo llenará tu consulta de nuevos pacientes: <span className="negrita">llenará tu marca personal de <span className="subrayado">autoridad.</span></span>
        <br></br><br></br>
        Nuestro sistema va más allá de los <span className="cursiva">“likes”. </span>
        <br></br><br></br>
        Construimos algo más valioso:</p><div className="spacer-xs"></div>

        <h3 className="azul-claro">pacientes que <span className="subrayado">confían en ti</span> antes de cruzar la puerta de tu clínica.</h3>



    <div className="linea_vertical"></div>

      <h4>Imagina esto...</h4><div className="spacer-xs"></div>

      <p>Tu presencia en redes sociales e internet grita: <span className="negrita cursiva">“Soy el mejor y puedo demostrarlo”.</span>
      <br></br><br></br>
      Pacientes que no regatean ni piden <span className="negrita cursiva">“descuentitos”.</span>
      <br></br><br></br>
      <span className="negrita">Una agenda llena,</span> no de citas, sino, de oportunidades para cambiar vidas.</p><div className="spacer-xl"></div>
      

</div>




      {/* CUARTA PARTE */}

<div className="master__body bg-azul-claro"><div className="spacer-m"></div>

<h2>La <span className="subrayado">garantía</span> que otros no se atreven a ofrecer</h2><div className="spacer-s"></div>

<p className="azul-oscuro">¿Quieres saber como de serio nos tomamos esto?</p>


<div className="linea_vertical_oscuro"></div>


<p className="azul-oscuro">No veas MedWorld como la típica agencia.
<br></br><br></br>
<span className="blanco negrita">Somos tus socios y nos implicamos tanto como tú en tu negocio.</span>
<br></br><br></br>
Así que si tu <span className="negrita">NO ganas</span>, nosotros <span className="negrita">NO ganamos</span>...</p>


<div className="linea_vertical_oscuro"></div>


<p className="azul-oscuro">Así es...</p>

<h3>La factura se queda en blanco.</h3>


<div className="linea_vertical_oscuro"></div>



<p className="azul-oscuro">Si, si... Lo has leído bien...</p><div className="spacer-s"></div>

<div className="circulo-azul-grande">
          <p>TRABAJAMOS<br></br><span className="gratis">GRATIS</span></p>
        </div><div className="spacer-s"></div>

<h4>Porque nosotros no vendemos promesas.</h4>


<div className="linea_vertical_oscuro"></div>


<h4>Nosotros construimos y te damos resultados objetivos.</h4><div className="spacer-xs"></div>

<p className="azul-oscuro">Así de confiados estamos con nuestras estrategias.</p><div className="spacer-m"></div>



<div className="button button_oscuro">
          <Link href="https://calendly.com/medworld-es/45min">
            <p>Reserva una consulta gratis</p>
          </Link>
      </div> 

      <p className="button_disclaimer_1">Las plazas son limitadas. Sesión valorada en 250 €.</p>
      <div className="spacer-xl"></div>




</div><div className="spacer-xl"></div>











   {/* QUINTA PARTE */}

   <div className="master__body">




<h2>Tu historia empieza aquí.</h2><div className="spacer-xs"></div>

<div className="linea_vertical"></div>

<p>Todavía no tenemos una lista interminable de casos de éxito… <br></br>
Y esto es justo lo que nos hace diferentes.</p>

<div className="linea_vertical"></div>

<p>Estamos buscando <span className="azul-claro">nuestra <span className="subrayado negrita">primera</span> gran historia de éxito</span> y queremos que seas...</p><div className="spacer-xs"></div>



  <div className="circulo-azul-ind">
    <p>¡Tú!</p>
  </div>

  <div className="linea_vertical"></div>

  <p>Sí, <span className="azul-claro subrayado">TÚ</span>. El cirujano que no tiene miedo de arriesgar para ganar.</p><div className="spacer-xs"></div>





<div className="button button_claro">
    <Link href="https://calendly.com/medworld-es/45min">
      <p>Reserva una consulta gratis</p>
    </Link>
</div> 

<p className="button_disclaimer_1">Las plazas son limitadas. Sesión valorada en 250 €.</p>



</div><div className="spacer-xl"></div>









      {/* SEXTA PARTE */}

      <div className="master__body bg-azul-claro"><div className="spacer-m"></div>

<h2>El primer paso para llenar tu agenda.</h2><div className="spacer-s"></div>

<p className="azul-oscuro">Seamos honestos… Aquí <span className="negrita">el único riesgo que corres</span> es que sigas haciendo <span className="negrita">lo mismo de siempre</span> y sigas obteniendo los mismos resultados de siempre….</p>


<div className="linea_vertical_oscuro"></div>


<h3 className="azul-oscuro">¿Cómo lo hacemos?</h3> <div className="spacer-s"></div>

<div className="box_resultados"><p className="blanco">Hacemos que <span className="negrita">tus metas</span> sean las nuestras.</p></div> <div className="spacer-xs"></div>

<div className="box_resultados"><p className="blanco"><span className="negrita">Estratégias personalizadas,</span> no prefabricadas.</p></div> <div className="spacer-xs"></div>

<div className="box_resultados"><p className="blanco">Potenciamos tu <span className="negrita">marca personal.</span></p></div> <div className="spacer-xs"></div>


<div className="linea_vertical_oscuro"></div>


<h2>No hay trucos.<br></br>No hay excusas.</h2><div className="spacer-s"></div>

<p className="azul-oscuro">Si estás listo para que el mundo reconozca <span className="negrita">todo el potencial que tienes</span> como cirujano estético...</p>



<div className="spacer-s"></div>



<div className="button button_oscuro">
    <Link href="https://calendly.com/medworld-es/45min">
      <p>Reserva una consulta gratis</p>
    </Link>
</div> 

<p className="button_disclaimer_1 azul-oscuro">Las plazas son limitadas. Sesión valorada en 250 €.</p>


<div className="spacer-l"></div>






</div><div className="spacer-xl"></div>










      <div className="footer">

        <Image className="footer__logo" src={med_logo_oscuro} alt="Medworld logo versión azul oscuro"></Image>

        <p>Conoce nuestro trabajo a través de Instagram:</p>
        <Link href="https://www.instagram.com/medworld.es/">@medworld.es</Link>

      </div>


    </div>

  );

}

export default HomePage;