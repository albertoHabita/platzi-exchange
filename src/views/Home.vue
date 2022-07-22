<template>
  <div class="principal_contenido">
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :estudiants="estudiants" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "HomeView",

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      estudiants: [],
    };
  },

  created() {
    this.isLoading = true;

    /*api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));*/
    this.estudiants = api.getAssets();
    this.isLoading = false;
  },
};
</script>
