<template>
  <main class="Main-content">
    <section id="contact-section">
      <article class="article-card" id="hidden-content">
        <div class="div1-card-conent">
          <h2 class="article-h2">Información de Contacto</h2>
          <p class="p1-card">Si deseas contactarme para colaboraciones, proyectos o simplemente para saludar,
            no dudes en ponerte en contacto a través de los siguientes medios:</p>
          <div class="contact-info">
            <p class="p2-card">Correo electrónico: brandHK23@hotmail.com</p>
            <p class="p2-card">Teléfono: (+52) 715 123 3787</p>
          </div>
          <p class="p2-card">
            ¡Espero tener noticias tuyas pronto!
          </p>
          <p class="p2-card">El portafolio se encuentra actualmente en fase de desarrollo empleando Vue.js, representando así su primera versión en evolución.</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>

</script>

<style>
.contact-info {
  margin-top: 20px;
  text-align: center;
}

.Main-content {
  background-color: #404a3c;
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 45px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease-in-out;
  opacity: 0.7;
  font-family: 'Chakra Petch', sans-serif;
}

.Main-content:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

.article-card {
  margin: auto;
  width: 95%;
  height: auto;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #25bb10 0%, #008bdc 100%);
  border-radius: 8px;
  color: white;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
}

.div1-card-conent {
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

.article-h2 {
  color: inherit;
  opacity: 0.8;
  font-size: 24px;
  text-align: center;
}

.p1-card {
  color: inherit;
  opacity: 0.8;
  font-size: 20px;
  text-align: justify;
  margin: 10px;
}

.p2-card {
  color: #404a3c;
  opacity: 0.8;
  font-size: 20px;
  text-align: center;
  margin-left: 15px;
}

.article-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #25bb10;
}

/* Additional styles for the ContactItem.vue page */

.div-article-content h3 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
}

.div-article-content p {
  text-align: justify;
  margin-bottom: 15px;
  font-size: 20px;
}

.div-article-content ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.div-article-content ul li {
  margin-bottom: 8px;
}

.div-article-content a {
  color: #25bb10;
  text-decoration: none;
  font-weight: bold;
}

.div-article-content a:hover {
  text-decoration: underline;
}

</style>

