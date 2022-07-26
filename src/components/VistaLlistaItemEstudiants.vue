<template>
  <tr :class="getClasse" @click="clickItem">
    <td>{{ numDocumentEst }}</td>
    <td>{{ nomEst }}</td>
    <td>{{ cognomsEst }}</td>
    <td class="derecha">
      <BotonRojo
        @click-btn-rojo="eventManager.clickElimina($event, coleccio)"
        :text="textBoton"
        :codiModel="codiModel"
      ></BotonRojo>
    </td>
  </tr>
</template>

<script>
import { Coleccio } from "@/classes/Coleccio";
import { Model } from "@/classes/Model";
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
      modelObject: new Model(this.model),
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
      type: Model,
      default: () => {},
    },
    coleccio: {
      type: Coleccio,
    },
  },

  methods: {
    clickItem() {
      this.$emit("click-estudiant");
    },
    /*veureDetalls(e, i) {
      console.log(e);
      console.log(i);
      //this.$emit("click-estudiant", this.modelObject);
    },*/
  },
};
</script>
