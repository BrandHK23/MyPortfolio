<template>
  <nav class="menu-bar">
    <div class="group">
      <a class="item title" @click="scrollToSection('aboutme-section')">Sobre Mí</a>
    </div>
    <div class="group">
      <a class="item" @click="scrollToSection('projects-section')">Portafolio</a>
      <a class="item" @click="scrollToSection('contact-section')">Contacto</a>
    </div>
  </nav>
</template>

<script>
  export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
};
</script>

<style>
.menu-bar {
  background-color: #008bdc;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 40px;
  box-shadow: -10px 10px 10px 3px rgba(0, 0, 0, 0.32);
  transition: transform 0.3s ease-in-out;
  opacity: 0.8;
  position: sticky;
  top: 0;
  z-index: 1000;
  
  /* Ajustes para centrar y reducir el ancho */
  width: 80%; /* Puedes ajustar el porcentaje según tus necesidades */
  margin: 0 auto;
}
.menu-bar:hover{
  transform: translateY(-2px);
}

/* Resto del estilo sin cambios */

.item {
  color: #ffffff;
  font-size: 18px;
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 20px;
  text-align: center;
}

.item.title {
  font-weight: 600;
}

.item {
  min-width: 130px;
  height: 40px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 20px;
  border: 2px solid transparent;
  background: transparent;
}

.item:hover {
  background: #25bb10;
  border-color: #25bb10;
  color: #404a3c;
}
</style>
