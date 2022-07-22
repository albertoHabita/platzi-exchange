<template>
  <div class="principal_contenido">
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <vista-llista-estudiants v-if="!isLoading" :estudiants="estudiants" />
  </div>
</template>

<script>
import api from "@/api";
import VistaLlistaEstudiants from "@/components/VistaLlistaEstudiants";

export default {
  name: "HomeView",

  components: { VistaLlistaEstudiants },

  data() {
    return {
      isLoading: false,
      estudiants: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getEstudiants()
      .then((estudiants) => (this.estudiants = estudiants))
      .finally(() => (this.isLoading = false));
  },
};
</script>
