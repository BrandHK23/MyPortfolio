<template>
  <header id="projects-section">
    <h1>Proyectos</h1>
  </header>
  <main class="Main-content"> 
    <section>
      <article class="article-card" id="hidden-content">
        <div class="div1-card-conent">
        <h2 class="article-h2">IMBO Gestión Escolar</h2>
        <p class="p1-card">El proyecto tiene como objetivo mejorar el sistema digital de gestión escolar del Instituto Mexicano
          de Biología Oral (IMBO) mediante el desarrollo de un programa <strong>eficiente y seguro</strong>. La implementación de esta
          solución contribuirá a optimizar la administración de registros y alumnos, facilitando el manejo de datos
          académicos, documentos y pagos de manera efectiva.</p>
          <div class="div-article-content">
            <h3>
              Acceso y Autenticación
            </h3>
            <p>
              El programa cuenta con un sistema de acceso basado en usuario y
              contraseña. Cada usuario deberá utilizar sus credenciales para acceder
              al programa, lo que garantiza la seguridad y confidencialidad de los
              datos.
              </p>
              <div class="img-login"><img src="@/assets/login.jpg" alt="Acceso y Autenticación"></div>
              
              <p>El programa presenta cuatro pestañas principales: "Alumno",
              "Registros", "Profesores" y "Calendarios". Actualmente, las pestañas
              de "Calendarios" y "Profesores" se encuentran en desarrollo y se integrarán en futuras versiones del programa.
            </p>
          <div class="img-pestaña"><img src="@/assets/pestañas.jpg" alt="Pestañas"></div>
          </div>
          <div class="div-article-content">
            <h3>
              Pestaña Alumno
            </h3>
            <p>
              En esta sección, se pueden realizar búsquedas de alumnos por matrícula, nombre y especialidad. Cada alumno
              registrado en el programa tiene una matrícula única y se registra su fecha de inscripción.
            </p>
            <h4>
              Paneles de Información del Alumno
            </h4>
            <p>
              Al hacer doble clic en un alumno de la tabla, se despliegan tres paneles informativos: "Datos del Alumno",
              "Documentos del Alumno" y "Pagos del Alumno".
            </p>
            <p>
              <strong>Datos del alumno.</strong>
              Este panel contiene información detallada sobre el alumno, como matrícula, especialidad, nombre completo,
              correo electrónico, teléfono y fecha de inscripción.
            </p>
            <p>
              <strong>Documentos del alumno.</strong>
              Aquí se pueden adjuntar las rutas de los
              documentos requeridos para la inscripción del
              alumno, como título, cédula profesional, acta de
              nacimiento, fotografías, CURP, comprobante de
              domicilio, carta de intención e INE. Cada
              documento se guarda en la base de datos del
              programa.
            </p>
            <p>
              <strong>Pagos del alumno.</strong>
              En este panel se pueden agregar y consultar
              los pagos realizados del alumno. Se pueden
              ingresar nuevos pagos, indicando el tipo de
              pago (inscripción, colegiatura, reinscripción u
              otro), la cantidad, la forma de pago (efectivo
              o tarjeta) y un comentario relacionado con el
              pago.
            </p>
            <div class="img-alumno"><img src="@/assets/AlumnosPanel.jpg" alt="Pestaña Alumno"></div>
          </div>
          <div class="div-article-content">
            <h3>
              Pestaña Registros
            </h3>
            <p>
              En esta sección, se gestionan los datos de los interesados en ingresar a la institución. Los registros pueden
              provenir de diferentes fuentes, como Facebook, WhatsApp u otros medios.
            </p>
            <h4>Interacción con Registros</h4>
            <p>
              <strong>Nuevo Registro:</strong> Abre una ventana para registrar a un nuevo interesado con los campos de nombre, teléfono,
              email, ciudad, fuente, especialidad y estatus.
            </p>
            <div class="img-registros"><img src="@/assets/Registro.jpg" alt="Registro"></div>
            <p>
              Al seleccionar un registro de la tabla, se pueden realizar las siguientes
              acciones:
            </p>
            <p>- <strong>Editar Registro:</strong> Permite modificar los datos del registro seleccionado.</p>
            <p>- <strong>Eliminar Registro:</strong> Elimina un registro seleccionado, solicitando
              confirmación antes de la acción.</p>
            <p>- <strong>Inscribir Alumno:</strong> Permite inscribir al registro seleccionado como
              alumno, copiando los datos pertinentes para la inscripción.</p>
            <p>- <strong>Exportar e Importar Registros:</strong> Estas opciones permiten exportar
              todos los registros a un archivo de Excel y realizar importaciones desde un archivo de Excel.</p>
            
            <div class="img-registros2"><img src="@/assets/RegistrosPanel.jpg" alt="Pestaña Registros"></div>
            <h3>Base de Datos y Seguridad</h3>
            <p>La base de datos del programa se implementa en un servidor MySQL debido a sus ventajas. Ofrece una interfaz amigable que simplifica la administración, además de ser ligero para un despliegue ágil. MySQL garantiza la seguridad de los datos, especialmente en las clases "Alumno" y "Registro", evitando riesgos.</p>
            <p>En las operaciones de manipulación de datos, MySQL destaca con conexiones fluidas que permiten crear, editar y eliminar registros. Su versatilidad posibilita funciones de conteo y condiciones específicas para obtener información precisa. La gestión de fechas también es sencilla y coherente.</p>
            <p>La elección de MySQL en este proyecto se basa en su amigabilidad, ligereza y practicidad, lo que se traduce en seguridad y eficiencia en el almacenamiento y consulta de datos esenciales</p>
            <p>
              El Programa de Gestión Escolar para el Instituto Mexicano de Biología Oral IMBO representa un recurso para
              mejorar la administración académica de la institución. Agradezco la oportunidad de presentar este proyecto y
              espero que su implementación contribuya al crecimiento y desarrollo del IMBO.
            </p>
            <p class="p-note">El proyecto se encuentra en constante desarrollo y mantengo un compromiso firme con la institución para proporcionar actualizaciones funcionales. Mi objetivo es finalizar un programa que aborde todas las necesidades presentadas por la institución de manera satisfactoria.</p>
          </div>
        <p class="p2-card">
          Desarrolado en: Java 11, IntelliJ IDEA, Swing, mySQL.
        </p>

        <a href="https://github.com/BrandHK23/GE_IMBO-Actual" target="_blank" class="btn-read-more">
        Ver código en GitHub
        </a>

        </div>      
      </article>
    </section>
  </main>
  
</template>

<script>

</script>

<style>

/* Estilos CSS corregidos */

/* Estilo para el encabezado */
header {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 25px; /* Ajusta el tamaño de fuente */
  color: #008bdc;
  margin-top: 20px;
  margin-bottom: 5px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para el contenido principal */
.Main-content {
  background-color: #404a3c;
  padding: 20px; /* Ajusta el espaciado interno */
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out;
  opacity: 0.7;
  font-family: 'Chakra Petch', sans-serif;
}

/* Estilo para el contenido principal en modo hover */
.Main-content:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

/* Estilo para las tarjetas de artículo */
.article-card {
  margin: auto;
  width: 95%;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #1eff00 0%, #008bdc 100%);
  border-radius: 8px;
  color: white;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
}

/* Estilo para el contenido de las tarjetas de artículo */
.div1-card-content {
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

/* Estilo para los títulos de los artículos */
.article-h2 {
  color: inherit;
  opacity: 0.8;
  font-size: 24px;
  text-align: center;
}

/* Estilo para los párrafos de los artículos */
.p1-card {
  color: inherit;
  opacity: 0.8;
  font-size: 20px;
  text-align: justify;
  margin: 10px;
}

/* Estilo para los párrafos adicionales de los artículos */
.p2-card {
  color: #404a3c;
  opacity: 0.8;
  font-size: 20px;
  text-align: center;
  margin-left: 15px;
}

/* Estilo para las tarjetas de artículo en modo hover */
.article-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #25bb10;
}

/* Pseudoelemento para el efecto de sombra en la parte superior de las tarjetas */
.article-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

/* Efecto de sombra en la parte superior de las tarjetas en modo hover */
.article-card:hover::before {
  transform: translateY(100%);
}

/* Pseudoelemento para el efecto de sombra en la parte derecha de las tarjetas */
.article-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

/* Efecto de sombra en la parte derecha de las tarjetas en modo hover */
.article-card:hover::after {
  transform: translateX(100%);
}

/* Estilo para el botón de "Leer más" */
.btn-read-more {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #25bb10;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: auto;
}

/* Estilo para el botón de "Leer más" en modo hover */
.btn-read-more:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

/* Estilo para el botón de "Leer más" en modo activo */
.btn-read-more:active {
  box-shadow: none;
}

/* Estilo para el contenedor principal */
.div-article-content {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Estilo para los títulos principales */
.div-article-content h2,
.div-article-content h3 {
  text-align: center;
  margin-bottom: 10px;
}

/* Estilo para los subtítulos */
.div-article-content h3 {
  text-align: center;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 35px;
}

/* Estilo para resaltar datos importantes */
.div-article-content strong {
  color: #404a3c;
}

/* Estilo para los párrafos */
.div-article-content p {
  text-align: justify;
  margin-bottom: 15px;
  font-size: 25px;
}

/* Estilo para las imágenes en las secciones */
.img-login img,
.img-pestaña img,
.img-alumno img,
.img-registros img,
.img-registros2 img {
  max-width: 100%;
  height: auto;
}

/* Estilo para las imágenes en modo hover */
.img-login:hover img,
.img-pestaña:hover img,
.img-alumno:hover img,
.img-registros:hover img,
.img-registros2:hover img {
  transform: scale(1.1);
}

/* Estilo para las imágenes de la sección de alumnos */
.img-alumno {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

/* Estilo para las imágenes de la sección de registros */
.img-registros,
.img-registros2 {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 5px;
}

/* Estilo para el párrafo de nota al final */
.p-note {
  font-size: 10px;
  color: #404a3c;
  text-align: center;
  margin: 20px;
}

</style>
