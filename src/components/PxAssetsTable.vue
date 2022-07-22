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
      <tr
        v-for="a in estudiants"
        :key="a.id"
        :class="estudiants.indexOf(a) % 2 === 0 ? 'par' : 'impar'"
      >
        <td>{{ a.num_document_est }}</td>
        <td>{{ a.nom_est }}</td>
        <td>{{ a.cognoms_est }}</td>
        <td class="derecha">
          <input
            class="boton b_rojo"
            type="submit"
            id="boton"
            name="boton"
            value="Elimina"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxAssetsTable",

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
