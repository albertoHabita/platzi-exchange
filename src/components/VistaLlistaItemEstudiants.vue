<template>
  <tr :class="getClasse" @click="clickItem">
    <td>{{ numDocumentEst }}</td>
    <td>{{ nomEst }}</td>
    <td>{{ cognomsEst }}</td>
    <td class="derecha">
      <BotonRojo
        @click-btn-rojo="eventManager.clickElimina($event)"
        :text="textBoton"
        :codiModel="codiModel"
      ></BotonRojo>
    </td>
  </tr>
</template>

<script>
import BotonRojo from "@/components/BotonRojo";
export default {
  name: "VistaLlistaItemEstudiants",
  components: { BotonRojo },
  computed: {
    getClasse() {
      if (this.index % 2 === 0) {
        return "par";
      } else {
        return "impar";
      }
    },
  },

  data() {
    return {
      textBoton: "Eliminar", //se podría calcular la etiqueta, por ejemplo
    };
  },

  props: {
    codiModel: {
      type: String,
      default: "",
    },
    numDocumentEst: {
      type: String,
      default: "",
    },
    nomEst: {
      type: String,
      default: "",
    },
    cognomsEst: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    eventManager: {
      type: Object,
      default: () => {},
    },
    model: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    clickItem() {
      this.$emit("click-estudiant", this.codiModel);
    },
  },
};
</script>
