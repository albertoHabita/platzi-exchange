<template>
  <main>
    <div class="container">
      <div class="grid">
        <div id="img-header-min" class="unit span-grid"></div>
        <div id="menu-sup">
          <ul>
            <li>
              <span
                name="enlace_principal"
                id="enlace_principal"
                class="cursor_mano"
                ><img
                  src="./img/blanco.gif"
                  alt=" "
                  width="5"
                  height="10"
                />Pàgina principal</span
              >
            </li>
            <li>
              <span
                name="enlace_contactar"
                id="enlace_contactar"
                class="cursor_mano"
                ><img
                  src="./img/separador.gif"
                  alt=" "
                  width="25"
                  height="10"
                />Contacta</span
              >
            </li>
            <li>
              <span name="enlace_faqs" id="enlace_faqs" class="cursor_mano"
                ><img
                  src="./img/separador.gif"
                  alt=" "
                  width="25"
                  height="10"
                />FAQ</span
              >
            </li>
            <li id="mostrar_ayuda" style="display: none">
              <span name="enlace_ayuda" id="enlace_ayuda" class="cursor_mano"
                ><img
                  src="./img/separador.gif"
                  alt=" "
                  width="25"
                  height="10" /><img
                  src="./img/icono_ayuda.gif"
                  style="vertical-align: text-top"
                  title="Ajuda de la funcionalitat seleccionada"
                  width="12"
                  height="12"
              /></span>
            </li>
            <li>
              <span name="enlace_debug" id="enlace_debug" class="cursor_mano"
                ><img
                  src="./img/separador.gif"
                  alt=" "
                  width="25"
                  height="10"
                />@</span
              >
            </li>
          </ul>
          <div id="menu-sup-der">
            <ul>
              <li>
                <span
                  name="enlace_cambia_idioma"
                  id="enlace_cambia_idioma1"
                  class="cursor_mano"
                  value="2"
                  >Español</span
                >
              </li>
              <li>
                <span
                  name="enlace_cambia_idioma"
                  id="enlace_cambia_idioma2"
                  class="cursor_mano"
                  value="3"
                  ><img
                    src="./img/separador.gif"
                    alt=" "
                    width="25"
                    height="10"
                  />English</span
                >
              </li>
            </ul>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import "./css/toast.css";
@import "./css/estilos.css";
</style>
