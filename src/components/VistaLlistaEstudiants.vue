<template>
  <table class="seleccionable">
    <thead>
      <tr>
        <th style="width: 20%">Núm. document</th>
        <th style="width: 20%">Nom</th>
        <th style="width: 50%">Cognoms</th>
        <th style="width: 10%">&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <vista-llista-item-estudiants
        v-for="(a, index) in estudiants"
        :key="index"
        :numDocumentEst="a.num_document_est"
        :nomEst="a.nom_est"
        :cognomsEst="a.cognoms_est"
        :classe="estudiants.indexOf(a)"
      />
    </tbody>
  </table>
</template>

<script>
export default {
  name: "VistaLlistaEstudiants",

  components: {
    VistaLlistaItemEstudiants: () => import("./VistaLlistaItemEstudiants.vue"),
  },

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  props: {
    estudiants: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>
