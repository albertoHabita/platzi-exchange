<template>
  <div class="principal_contenido">
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <vista-llista-estudiants
      @click-estudiant="clickDetalls"
      :model="estudiants"
      :eventManager="eventManager"
    />
    <dades-detall-estudiant
      :model="model"
      :v-if="veureDetall"
    ></dades-detall-estudiant>
  </div>
</template>

<script>
import api from "@/api";
import { EventManager } from "@/classes/EventManager";
import { Coleccio } from "@/classes/Coleccio";
import { Model } from "@/classes/Model";
import VistaLlistaEstudiants from "@/components/VistaLlistaEstudiants";
import DadesDetallEstudiant from "@/components/DadesDetallEstudiant";

export default {
  name: "HomeView",

  components: { VistaLlistaEstudiants, DadesDetallEstudiant },

  data() {
    return {
      isLoading: false,
      estudiants: Coleccio,
      eventManager: EventManager,
      model: Model,
      veureDetall: false,
      /*eventManager: {
        clickElimina(index) {
          const vIndex = this.estudiants.findIndex(function (valor) {
            return valor.id == index;
          });
          this.estudiants.splice(vIndex, 1);
        },
        veureDetalls(index) {
          this.estudiants.splice(this.estudiants.indexOf(index), 1);
        },
      },*/
    };
  },

  methods: {
    clickDetalls(model) {
      this.model = model;
      this.veureDetall = true;
    },
  },

  created() {
    this.isLoading = true;
    this.eventManager = new EventManager();

    api
      .getEstudiants()
      .then((estudiants) => (this.estudiants = new Coleccio(estudiants)))
      .finally(() => (this.isLoading = false));
  },
};
</script>
