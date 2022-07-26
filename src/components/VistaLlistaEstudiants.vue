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
        v-for="(a, index) in model.models"
        :key="index"
        :numDocumentEst="a.atributs.num_document_est"
        :nomEst="a.atributs.nom_est"
        :cognomsEst="a.atributs.cognoms_est"
        :index="index"
        :codiModel="a.atributs.id"
        :eventManager="eventManager"
        :model="a"
        :coleccio="model"
        @click-estudiant="veureDetalls(index)"
      />
    </tbody>
  </table>
</template>

<script>
import { Coleccio } from "@/classes/Coleccio";
import VistaLlistaItemEstudiants from "@/components/VistaLlistaItemEstudiants";

export default {
  name: "VistaLlistaEstudiants",

  components: {
    //VistaLlistaItemEstudiants: () => import("./VistaLlistaItemEstudiants.vue"),
    VistaLlistaItemEstudiants,
  },

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  props: {
    model: {
      type: Coleccio,
    },
    eventManager: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    veureDetalls(i) {
      this.$emit("click-estudiant", this.model.models[i]);
    },

    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>
